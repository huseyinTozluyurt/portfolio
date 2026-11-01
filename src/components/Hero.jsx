import BoundingBox from './BoundingBox.jsx'

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero__scanline" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow mono">// live feed — istanbul, tr</p>

        <BoundingBox label="ENGINEER" confidence={0.99} accent="yellow" className="bbox--hero">
          <h1 className="hero__title">
            Huseyin Tozluyurt
          </h1>
        </BoundingBox>

        <p className="hero__claim">
          I build the perception and control stack that lets machines see a room, make a decision, and move through it. From raw sensor data to optimized actuators, I specialize in computer vision, robotics, and embedded systems.
        </p>

        <div className="hero__actions">
          <a href="#experience" className="btn btn--primary">View experience →</a>
          <a href="#work" className="btn btn--ghost">See projects</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__stats mono">
          <div className="stat">
            <span className="stat__value">ROS2 · OpenCV · PyTorch</span>
            <span className="stat__label">Core stack</span>
          </div>
          <div className="stat">
            <span className="stat__value">4</span>
            <span className="stat__label">Internships, team &amp; teaching roles</span>
          </div>
          <div className="stat">
            <span className="stat__value">2026</span>
            <span className="stat__label">B.S. CE, Kadir Has Univ.</span>
          </div>
        </div>
      </div>
    </section>
  )
}