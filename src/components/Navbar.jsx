import { useState } from 'react'
import { Menu, X, Server, ChevronDown } from 'lucide-react'

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
        {/* Static, elevated bar */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4">
            {/* Brand */}
            <a href="#" className="inline-flex items-center gap-3">
              <span className="relative inline-flex h-9 w-9 items-center justify-center">
                <span className="absolute -inset-1 rounded-xl bg-emerald-500/25 blur-md" />
                <Server className="relative h-6 w-6 text-emerald-400" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-black tracking-tight text-white">MCServerHost</span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-300/80">Premium Hosting</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-slate-800" />
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:bg-emerald-400 transition"
              >
                Get Started Free
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-1 rounded-xl border border-slate-800 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
              >
                View Plans <ChevronDown className="h-4 w-4" />
              </a>
            </nav>

            {/* Mobile toggle */}
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-slate-800 px-4 py-3">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <a
                    href="#plans"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold px-4 py-3"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="#plans"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-white/5 text-white px-4 py-3"
                  >
                    View Plans
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
