import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Formación', href: '#training' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="container navbar__content">
        <a href="#hero" className="navbar__brand">
          NM<span className="navbar__brand-dot">.</span>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="navbar__mobile-link"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar