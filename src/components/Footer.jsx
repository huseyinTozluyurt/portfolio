export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>© {new Date().getFullYear()} Huseyin Tozluyurt</span>
        <span>Computer Engineering · Kadir Has University</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
