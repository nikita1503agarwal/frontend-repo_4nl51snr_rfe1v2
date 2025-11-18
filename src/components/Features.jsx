import { motion } from 'framer-motion'
import { Shield, Rocket, Cpu, Cloud, Zap, Boxes } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Rocket, title: 'Blazing Fast Performance', desc: 'Powered by high‑frequency CPUs and NVMe SSDs for lightning‑fast loading times and lag‑free gameplay.' },
    { icon: Shield, title: 'Unmatched Security', desc: 'Advanced DDoS protection and automatic backups to keep your server safe and your data secure.' },
    { icon: Cpu, title: 'Premium Hardware', desc: 'DDR5 RAM options and modern Ryzen cores for stable 20 TPS even under load.' },
    { icon: Cloud, title: 'Global Locations', desc: 'Pick the closest region for the best ping across Europe and America.' },
    { icon: Zap, title: 'Instant Setup', desc: 'Spin up servers in seconds with one‑click installers for Forge, Fabric, Paper.' },
    { icon: Boxes, title: 'Backups & Schedules', desc: 'Automated snapshots and restores in one click keep you covered.' },
  ]

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:linear-gradient(to_right,rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Why Choose MCServerHost?
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            We provide the best Minecraft hosting experience with cutting‑edge hardware and exceptional support.
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
