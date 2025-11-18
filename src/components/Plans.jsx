import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Grass',
    price: 4.99,
    ram: '2 GB RAM',
    players: 'Up to 10 players',
    storage: '20 GB NVMe',
    features: ['24/7 Uptime', 'DDoS Protected', '1 Backup/day'],
    popular: false,
  },
  {
    name: 'Stone',
    price: 9.99,
    ram: '4 GB RAM',
    players: 'Up to 25 players',
    storage: '40 GB NVMe',
    features: ['24/7 Uptime', 'DDoS Protected', '3 Backups/day', 'Modpack Ready'],
    popular: true,
  },
  {
    name: 'Obsidian',
    price: 19.99,
    ram: '8 GB RAM',
    players: 'Up to 50 players',
    storage: '80 GB NVMe',
    features: ['24/7 Uptime', 'DDoS Protected', 'Hourly Backups', 'Priority Support'],
    popular: false,
  },
]

export default function Plans() {
  return (
    <section id="plans" className="relative py-24 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,rgba(2,6,23,0)_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-extrabold text-white">
            Choose your plan
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Simple pricing. Scale as you grow. Cancel anytime.
          </p>
        </div>

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
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-black text-white">${plan.price}</span>
                <span className="text-slate-400 mb-1">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                <li>{plan.ram}</li>
                <li>{plan.players}</li>
                <li>{plan.storage}</li>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-2 shadow-emerald-500/20 shadow-lg hover:bg-emerald-400 transition-all">
                Start now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
