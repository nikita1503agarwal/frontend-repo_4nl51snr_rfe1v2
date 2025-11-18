import { Server, MessageCircle, Twitter, Video, ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <Server className="h-6 w-6 text-emerald-400" />
              <span className="font-semibold">MCServerHost</span>
            </div>
            <p className="mt-3 text-slate-400 max-w-md">
              Premium Minecraft server hosting with exceptional performance, reliability, and 24/7 support.
            </p>
            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <a href="#" aria-label="Community" className="hover:text-white transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Tiktok" className="hover:text-white transition-colors"><Video className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white inline-flex items-center gap-1" href="#plans">Create a Server <ChevronRight className="h-3 w-3" /></a></li>
              <li><a className="hover:text-white" href="#features">Server Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a className="hover:text-white" href="#">Resources</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MCServerHost. All rights reserved.</p>
          <div className="text-slate-400">Instant Setup • DDoS Protection • Premium Hardware • NVMe Storage</div>
        </div>
      </div>
    </footer>
  )
}
