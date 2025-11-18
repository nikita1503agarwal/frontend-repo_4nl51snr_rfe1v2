import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex (SMP Owner)',
    quote: 'We moved our 30-player modded SMP here and TPS is rock solid. The one-click modpacks and backups saved hours.',
  },
  {
    name: 'PixelBuilder',
    quote: 'Spun up a creative server for an event in minutes. The UI is clean and the support team actually knows Minecraft.',
  },
  {
    name: 'RedstoneLabs',
    quote: 'Finally a host that handles redstone-heavy farms without lag. Obsidian plan is worth every cent.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background:radial-gradient(circle_at_30%_20%,#10b981_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-emerald-400">
          <Quote className="h-5 w-5" />
          <span className="text-sm uppercase tracking-wider">What players say</span>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-3 text-center text-3xl sm:text-5xl font-extrabold text-white">
          Loved by creators
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 hover:via-emerald-500/10 transition-all pointer-events-none" />
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
