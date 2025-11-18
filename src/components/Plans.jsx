import { motion } from 'framer-motion'
import { Crown, Sparkles, Star } from 'lucide-react'

const billing = [
  { label: 'Weekly', note: '+25%' },
  { label: 'Monthly', note: '$3/GB' },
  { label: 'Quarterly', note: '-12.50%' },
  { label: 'Yearly', note: '-25%' },
]

const plans = [
  {
    name: 'Villager',
    price: 'Free',
    btn: 'Get Started Free',
    ram: '3 GB',
    storage: '10 GB SATA SSD',
    mem: 'Standard DDR4 RAM',
    players: '24 Players',
    locations: 'Europe & America',
    note: 'Premium Locations',
    popular: false,
    icon: Sparkles,
  },
  {
    name: 'Witch',
    price: '$23.98/month',
    btn: 'Get Started Now',
    ram: '8 GB',
    storage: '40 GB NVMe SSD',
    mem: 'Premium DDR5 RAM',
    players: '64 Players',
    locations: 'Europe & America',
    note: 'Premium Locations',
    popular: true,
    icon: Star,
  },
  {
    name: 'Warden',
    price: '$59.98/month',
    btn: 'Select Plan',
    ram: '20 GB',
    storage: '100 GB NVMe SSD',
    mem: 'Premium DDR5 RAM',
    players: '160 Players',
    locations: 'Europe & America',
    note: 'Premium Locations',
    popular: false,
    icon: Crown,
  },
]

export default function Plans() {
  return (
    <section id="plans" className="relative py-24 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,rgba(2,6,23,0)_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Billing tabs */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Popular Hosting Plans
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Start with our free tier or choose a premium plan for more features. All plans include easy setup and no hidden fees.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-2">
            {billing.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-xs text-slate-300 bg-white/0">
                <span className="text-white/90">{b.label}</span>
                <span className="text-emerald-300/90">{b.note}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl p-6 border ${plan.popular ? 'border-emerald-500/40 bg-slate-900/70' : 'border-slate-800 bg-slate-900/60'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 right-6 text-center">
                  <span className="inline-block text-[10px] uppercase tracking-wider bg-emerald-500 text-slate-950 font-bold px-2 py-1 rounded-md shadow">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-slate-800">
                  <plan.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              </div>
              <div className="mt-3 text-2xl font-black text-white">{plan.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li>{plan.ram}</li>
                <li>{plan.mem}</li>
                <li>{plan.storage}</li>
                <li>{plan.players}</li>
                <li>{plan.locations}</li>
                <li>{plan.note}</li>
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-2 shadow-emerald-500/20 shadow-lg hover:bg-emerald-400 transition-all">
                {plan.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
