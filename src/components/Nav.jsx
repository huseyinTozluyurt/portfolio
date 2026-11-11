import { useState } from 'react'

const links = [
  { href: '#graduation', label: 'Graduation Project' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand mono">HUSEYIN TOZLUYURT</a>

        <button
          type="button"
          className="nav__toggle mono"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="nav-links" className={`nav__links mono ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/huseyinTozluyurt"
            target="_blank"
            rel="noreferrer"
            className="nav__cta"
            onClick={() => setOpen(false)}
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
