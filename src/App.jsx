import './App.css'
import { Header, Hero, About, Skills, Projects, Contact, Footer } from './components'

function App() {
  return (
    <div className="min-h-screen scroll-snap-container">
      <Header />

      {/* Hero Section - Dark Gradient with Special Effects */}
      <div className="scroll-snap-section bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <Hero />
      </div>

      {/* About Section - Medium Dark Background */}
      <div className="scroll-snap-section bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200">
        <About />
      </div>

      {/* Skills Section - Dark Background */}
      <div className="scroll-snap-section bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
        <Skills />
      </div>

      {/* Projects Section - Medium Background */}
      <div className="scroll-snap-section bg-gradient-to-br from-indigo-600 to-emerald-600">
        <Projects />
      </div>

      {/* Contact Section - Dark Background */}
      <div className="scroll-snap-section bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <Contact />
      </div>

      {/* Footer */}
      <div className="scroll-snap-section w-full">
        <Footer />
      </div>
    </div>
  )
}

export default App
