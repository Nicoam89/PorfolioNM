import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Training from '../components/sections/Training'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <main>
        <Hero />
        <About />
        <Skills />
        <Training />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        Hecho con React + Sass · {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Home