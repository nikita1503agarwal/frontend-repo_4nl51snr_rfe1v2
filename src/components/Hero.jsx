import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms for cinematic feel
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.4])

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center overflow-hidden bg-slate-950">
      {/* 3D Parallax Background */}
      <motion.div style={{ y: translateY, scale }} className="absolute inset-0 will-change-transform">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Depth overlays */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14)_0%,rgba(0,0,0,0)_52%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-28">
          {/* Left copy */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Premium Minecraft Hosting
              <span className="mx-2 h-3 w-px bg-slate-700" />
              Free Minecraft Servers
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_24px_rgba(16,185,129,0.25)]">
              Start free. Scale to premium power.
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Experience lightning-fast performance, 99.9% uptime, and dedicated 24/7 support. Spin up your server in seconds and level up as your community grows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-semibold px-6 py-3 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all">
                Get Started Free
              </a>
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-white/5 text-white font-semibold px-6 py-3 backdrop-blur-sm border border-slate-800 hover:bg-white/10 transition-all">
                View Plans
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">99.9% Uptime</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">DDoS Protected</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">Instant Setup</span>
            </div>
          </motion.div>

          {/* Right console card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-4 md:p-6 overflow-hidden">
              <div className="absolute -inset-px pointer-events-none bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 hover:via-emerald-500/10 transition" />
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-300">MC Server Console</div>
                <div className="flex items-center gap-2 text-xs text-emerald-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Online
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-black/40 border border-slate-800 font-mono text-[12px] leading-relaxed p-3 text-slate-300 h-56 overflow-auto">
                <div className="text-slate-400">4:23:12 PM</div>
                {[ 
                  '[4:23:08 PM] [INFO] Loading server properties...',
                  '[4:23:08 PM] [INFO] Starting Minecraft server version 1.20.1',
                  '[4:23:08 PM] [INFO] Loading worlds...',
                  '[4:23:08 PM] [INFO] Preparing level "world"...',
                  '[4:23:08 PM] [INFO] Preparing start region for dimension minecraft:overworld',
                  '[4:23:08 PM] [INFO] Preparing spawn area: 100%',
                  '[4:23:08 PM] [SUCCESS] Done! Server started successfully',
                  '[4:23:08 PM] [INFO] Server is running on port 25565',
                ].map((line) => (
                  <div key={line} className={line.includes('SUCCESS') ? 'text-emerald-300' : ''}>{line}</div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-slate-800 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Memory Usage</div>
                  <div className="mt-1 text-sm text-white">2102MB / 4096MB</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Players Online</div>
                  <div className="mt-1 text-sm text-white">24/100</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">TPS</div>
                  <div className="mt-1 text-sm text-white">20.0</div>
                </div>
              </div>

              {/* Command input */}
              <div className="mt-4 flex items-center gap-2">
                <div className="rounded-xl border border-slate-800 bg-black/40 px-3 py-2 flex-1 text-slate-400 text-sm">$ Type a command...</div>
                <button className="rounded-xl bg-emerald-500 text-slate-950 text-sm font-semibold px-4 py-2 hover:bg-emerald-400">Run</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Under-hero chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            ['99.9% Uptime', 'SLA-backed'],
            ['One-click Mods', 'Forge • Fabric • Paper'],
            ['DDoS Protected', 'Advanced mitigation'],
            ['Instant Backups', 'Restore in one click'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-slate-800 p-4 text-left">
              <p className="text-sm text-emerald-300 font-semibold">{title}</p>
              <p className="text-xs text-slate-300/80">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floor fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
