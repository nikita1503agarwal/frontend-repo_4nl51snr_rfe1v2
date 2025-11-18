import { motion } from 'framer-motion'
import { Shield, Rocket, Cpu, Cloud, Zap, Boxes } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Shield, title: 'DDoS Protection', desc: 'Enterprise-grade mitigation keeps your worlds online.' },
    { icon: Rocket, title: 'One-click Modpacks', desc: 'Install Forge, Fabric, Paper and 1000s of packs instantly.' },
    { icon: Cpu, title: 'NVMe + Ryzen', desc: 'Top-tier hardware for ultra-low tick lag and TPS stability.' },
    { icon: Cloud, title: 'Global Locations', desc: 'Pick the closest region for the best ping anywhere.' },
    { icon: Zap, title: 'Instant Scaling', desc: 'Upgrade RAM and slots as your community grows.' },
    { icon: Boxes, title: 'Backups & Schedules', desc: 'Automated snapshots and restore in one click.' },
  ]

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      {/* Subtle grid for 3D vibe */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Built for creators and SMPs
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Everything you need to run smooth, modded or vanilla servers — with zero hassle.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:via-emerald-500/10 transition-all pointer-events-none" />
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-500/10 border border-slate-800">
                <Icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-slate-300/90 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
