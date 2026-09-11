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
          <a href="#work" className="btn btn--primary">View the work →</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__stats mono">
          <div className="stat">
            <span className="stat__value">ROS2 / C++</span>
            <span className="stat__label">Core Stack</span>
          </div>
          <div className="stat">
            <span className="stat__value">Ubuntu</span>
            <span className="stat__label">Environment</span>
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