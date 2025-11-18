import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms for cinematic feel
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35])

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden bg-slate-950">
      {/* 3D Parallax Background */}
      <motion.div style={{ y: translateY, scale }} className="absolute inset-0 will-change-transform">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Gradient and vignette overlays to push depth, restricted to greens/greys/blacks */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,rgba(0,0,0,0)_50%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-36"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Lag‑free Minecraft hosting
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_24px_rgba(16,185,129,0.25)]">
            Cinematic servers for epic worlds
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Blazing performance with NVMe + Ryzen, one‑click modpacks, and instant backups. Simple to start, powerful as you scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-semibold px-6 py-3 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all">
              Launch a server
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/5 text-white font-semibold px-6 py-3 backdrop-blur-sm border border-slate-800 hover:bg-white/10 transition-all">
              Explore features
            </a>
          </div>
        </motion.div>

        {/* Stats chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            ['99.99% Uptime', 'Always online'],
            ['Modpacks', 'Forge • Fabric • Paper'],
            ['DDoS Protected', 'Global edge'],
            ['Instant Backups', 'One‑click restore'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-slate-800 p-4 text-left">
              <p className="text-sm text-emerald-300 font-semibold">{title}</p>
              <p className="text-xs text-slate-300/80">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Subtle floor reflection for depth */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </section>
  )
}
