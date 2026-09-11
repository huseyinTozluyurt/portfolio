import BoundingBox from './BoundingBox.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow mono">// one action</p>

        <BoundingBox label="CONTACT" confidence={1.0} accent="yellow" className="bbox--contact">
          <h2 className="contact__title">Let&apos;s build something that has to work in the real world.</h2>
        </BoundingBox>

        <div className="contact__links mono">
          <a href="mailto:huseyintozluyurt@hotmail.com" className="contact__link">
            huseyintozluyurt@hotmail.com
          </a>
          <a href="https://github.com/HuseyinTozluyurt" target="_blank" rel="noreferrer" className="contact__link">
            github.com/HuseyinTozluyurt
          </a>
          <a href="https://linkedin.com/in/HuseyinTozluyurt" target="_blank" rel="noreferrer" className="contact__link">
            linkedin.com/in/HuseyinTozluyurt
          </a>
        </div>

        <p className="contact__location mono">Istanbul / Beşiktaş, Türkiye</p>
      </div>
    </section>
  )
}
