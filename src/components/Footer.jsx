import { Server, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex items-center gap-2 text-white">
            <Server className="h-6 w-6 text-emerald-400" />
            <span className="font-semibold">BlockHost</span>
          </div>
          <div className="text-slate-400 text-sm">
            <p>High-performance Minecraft hosting for creators and communities.</p>
            <p className="mt-1">© {new Date().getFullYear()} BlockHost. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
