import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()

  // Respect reduced motion preferences
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Subtle parallax for background accents (disabled if reduced motion)
  const y1 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -40])

  useEffect(() => {
    // no-op: hook exists to keep parity if we later expand motion prefs
  }, [])

  return (
    <section className="relative min-h-[96vh] flex items-center overflow-hidden bg-slate-950">
      {/* Clean, cinematic gradient background (no image) */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(800px_400px_at_10%_20%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_500px_at_90%_30%,rgba(16,185,129,0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-black/70" />

      {/* Soft floating accents */}
      <motion.div aria-hidden className="absolute -top-24 -left-20 h-[42rem] w-[42rem] rounded-full bg-emerald-500/10 blur-3xl" style={{ y: y1 }} />
      <motion.div aria-hidden className="absolute -bottom-32 -right-24 h-[36rem] w-[36rem] rounded-full bg-emerald-400/10 blur-3xl" style={{ y: y2 }} />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-24 pb-12">
          {/* Left copy */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-xs text-slate-200" aria-label="Hosting tagline">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Premium Minecraft Hosting
              <span className="mx-2 h-3 w-px bg-white/10" />
              Free Minecraft Servers
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
              Start free. Scale to premium power.
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Experience lightning-fast performance, 99.9% uptime, and dedicated 24/7 support. Spin up your server in seconds and level up as your community grows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-semibold px-6 py-3 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all">
                Get Started Free
              </a>
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-white/5 text-white font-semibold px-6 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                View Plans
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-300/90" role="list" aria-label="Trust badges">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">99.9% Uptime</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">DDoS Protected</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">Instant Setup</span>
            </div>
          </motion.div>

          {/* Right console card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative"
            aria-label="Server console preview"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-200">MC Server Console</div>
                <div className="flex items-center gap-2 text-xs text-emerald-300" aria-live="polite">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Online
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[12px] leading-relaxed p-3 text-slate-200 h-56 overflow-auto" aria-label="Console output">
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
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-300/90">Memory Usage</div>
                  <div className="mt-1 text-sm text-white">2102MB / 4096MB</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-300/90">Players Online</div>
                  <div className="mt-1 text-sm text-white">24/100</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-300/90">TPS</div>
                  <div className="mt-1 text-sm text-white">20.0</div>
                </div>
              </div>

              {/* Command input */}
              <div className="mt-4 flex items-center gap-2">
                <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 flex-1 text-slate-400 text-sm" aria-label="Command input placeholder">$ Type a command...</div>
                <button className="rounded-xl bg-emerald-500 text-slate-950 text-sm font-semibold px-4 py-2 hover:bg-emerald-400">Run</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Under-hero chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          role="list"
          aria-label="Highlights"
        >
          {[
            ['99.9% Uptime', 'SLA-backed'],
            ['One-click Mods', 'Forge • Fabric • Paper'],
            ['DDoS Protected', 'Advanced mitigation'],
            ['Instant Backups', 'Restore in one click'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left">
              <p className="text-sm text-emerald-300 font-semibold">{title}</p>
              <p className="text-xs text-slate-300/80">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floor fade to blend with the next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}
