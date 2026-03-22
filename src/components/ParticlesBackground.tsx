import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  opacitySpeed: number
  color: string
}

const COLORS = [
  "rgba(139, 92, 246,",
  "rgba(167, 139, 250,",
  "rgba(196, 181, 253,",
  "rgba(109, 40, 217,",
]

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animFrameId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: 0,
      opacitySpeed: Math.random() * 0.005 + 0.002,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    })

    const init = () => {
      resize()
      particles = Array.from({ length: 80 }, () => {
        const p = createParticle()
        p.y = Math.random() * window.innerHeight
        p.opacity = Math.random() * 0.5
        return p
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.opacity = Math.min(p.opacity + p.opacitySpeed, 0.7)

        if (p.y < -10) {
          particles[i] = createParticle()
          return
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.opacity})`
        ctx.fill()

        if (p.size > 1.5) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `${p.color}${p.opacity * 0.15})`
          ctx.fill()
        }
      })

      animFrameId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
