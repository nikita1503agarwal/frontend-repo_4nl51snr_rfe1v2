import { useState } from 'react'
import { Menu, X, Server, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Plans', href: '#plans' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 ring-1 ring-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="inline-flex items-center gap-2 text-white">
              <div className="relative">
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-400 blur-md opacity-30"></span>
                <Server className="relative h-7 w-7 text-emerald-300" />
              </div>
              <span className="font-semibold tracking-tight">BlockHost</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#plans" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-900 font-semibold px-4 py-2 shadow-lg shadow-emerald-500/20 hover:shadow-amber-500/30 transition-shadow">
                <Sparkles className="h-4 w-4" /> Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-3 text-slate-200/90 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#plans" onClick={() => setOpen(false)} className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-900 font-semibold px-4 py-3">
                  <Sparkles className="h-4 w-4" /> Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
