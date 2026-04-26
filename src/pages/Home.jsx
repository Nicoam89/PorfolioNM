import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        Hecho con React + Tailwind · {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Home