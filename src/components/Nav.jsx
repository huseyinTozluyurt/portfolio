import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#graduation', label: 'Graduation Project' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function getTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [theme, setTheme] = useState(getTheme)
  const progressRef = useRef(null)

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'top' ? '' : `#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    const hero = document.getElementById('top')
    if (hero) io.observe(hero)
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Thin reading-progress bar under the nav.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      const p = max > 0 ? el.scrollTop / max : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setTheme(next)
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand mono" aria-label="Huseyin Tozluyurt, back to top">
          <span className="nav__mark" aria-hidden="true">HT</span>
          <span>HUSEYIN TOZLUYURT</span>
        </a>

        <div className="nav__right">
          <nav id="nav-links" className={`nav__links mono ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href ? 'is-active' : undefined}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="nav__actions">
              <a
                href="https://github.com/huseyinTozluyurt"
                target="_blank"
                rel="noreferrer"
                className="nav__cta"
                onClick={() => setOpen(false)}
              >
                GitHub ↗
              </a>
            </div>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="nav__toggle mono"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <span className="nav__progress" ref={progressRef} aria-hidden="true" />
    </header>
  )
}
