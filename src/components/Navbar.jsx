import { useState } from 'react'
import { Menu, X, Server, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = [
    { label: 'Solutions', items: [
      { label: 'Minecraft Hosting', href: '#plans' },
      { label: 'Premium Hardware', href: '#features' },
      { label: 'Global Locations', href: '#features' },
    ]},
    { label: 'Company', items: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'About', href: '#footer' },
    ]},
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Brand */}
            <a href="#" className="inline-flex items-center gap-2">
              <Server className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold tracking-tight text-white">MCServerHost</span>
            </a>

            {/* Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((group) => (
                <div key={group.label} className="relative group">
                  <button className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                    {group.label}
                    <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  </button>
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute left-0 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur shadow-lg p-2">
                    {group.items.map((item) => (
                      <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <a href="#plans" className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5">View Plans</a>
              <a href="#plans" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Get Started</a>
            </nav>

            {/* Mobile toggle */}
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
              {nav.map((group) => (
                <div key={group.label} className="py-2">
                  <div className="text-xs uppercase tracking-wider text-slate-400/80 mb-1">{group.label}</div>
                  <div className="grid">
                    {group.items.map((item) => (
                      <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg text-slate-200 hover:bg-white/5">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a href="#plans" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-semibold px-4 py-2">Get Started</a>
                <a href="#plans" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg border border-white/10 text-white px-4 py-2">View Plans</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
