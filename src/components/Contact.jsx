const links = [
  { k: 'Email', v: 'huseyintozluyurt@hotmail.com', href: 'mailto:huseyintozluyurt@hotmail.com', primary: true },
  { k: 'GitHub', v: 'github.com/HuseyinTozluyurt', href: 'https://github.com/HuseyinTozluyurt' },
  { k: 'LinkedIn', v: 'linkedin.com/in/HuseyinTozluyurt', href: 'https://linkedin.com/in/HuseyinTozluyurt' },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <p className="eyebrow mono"><span className="eyebrow__num">05</span> Contact</p>
          <h2 className="contact__title">
            Let&apos;s build something that has to work in the <em>real world.</em>
          </h2>
          <p className="contact__location mono">Istanbul / Beşiktaş, Türkiye</p>
        </div>

        <div className="contact__links mono">
          {links.map((l) => (
            <a
              key={l.k}
              href={l.href}
              className={`contact__link ${l.primary ? 'contact__link--primary' : ''}`}
              {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span>{l.k}</span>
              <span>{l.v}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
