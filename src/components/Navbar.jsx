import { useState } from 'react'
import { Menu, X, Server } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Plans', href: '#plans' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl bg-slate-950/90 border border-slate-800">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="inline-flex items-center gap-2 text-white">
              <div className="relative">
                <span className="absolute -inset-1 rounded-xl bg-emerald-500/20 blur-md opacity-40" />
                <Server className="relative h-7 w-7 text-emerald-400" />
              </div>
              <span className="font-semibold tracking-tight">BlockHost</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:bg-emerald-400 transition"
              >
                Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-800 px-4 py-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-3 text-slate-300 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a
                  href="#plans"
                  onClick={() => setOpen(false)}
                  className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-3"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
