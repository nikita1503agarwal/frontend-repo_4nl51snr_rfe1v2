import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200/90">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Lag-free Minecraft hosting
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
            Power your Minecraft worlds with next‑gen servers
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200/90">
            Spin up blazing-fast servers in seconds. Easy modpacks, DDoS protection, and instant backups — beautifully simple for creators and communities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-amber-400 text-slate-900 font-semibold px-6 py-3 shadow-xl shadow-emerald-500/20 hover:shadow-amber-400/30 transition-all">
              Launch a server
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-semibold px-6 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
              Explore features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            ['99.99% Uptime', 'Always online worlds'],
            ['One‑click Modpacks', 'Forge, Fabric, Spigot'],
            ['DDoS Protected', 'Backed by global edge'],
            ['Instant Backups', 'Never lose progress'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left">
              <p className="text-sm text-emerald-300 font-semibold">{title}</p>
              <p className="text-xs text-slate-200/80">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
