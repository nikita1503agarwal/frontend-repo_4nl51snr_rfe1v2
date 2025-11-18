import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
