import portraitImg from '../assets/images/my_image.jpeg'

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__status mono">
            <span className="pulse" aria-hidden="true" />
            Istanbul, TR · B.S. Computer Engineering 2026
          </p>

          <h1 className="hero__title">
            Huseyin <span>Tozluyurt</span>
          </h1>

          <ul className="hero__role mono" aria-label="Focus areas">
            <li>Computer Vision</li>
            <li>Robotics · ROS 2</li>
            <li>Embedded Systems</li>
          </ul>

          <p className="hero__claim">
            I build the perception and control stack that lets machines see a room, make a decision, and move through it. From raw sensor data to optimized actuators, I specialize in computer vision, robotics, and embedded systems.
          </p>

          <div className="hero__actions">
            <a href="#graduation" className="btn btn--primary">Graduation project →</a>
            <a href="#experience" className="btn btn--ghost">View experience</a>
            <a href="#work" className="btn btn--ghost">See projects</a>
            <a href="#contact" className="btn btn--text">Get in touch →</a>
          </div>
        </div>

        <figure className="portrait">
          <div className="portrait__frame">
            <img
              src={portraitImg}
              alt="Huseyin Tozluyurt standing next to a humanoid robot in a robotics lab"
              fetchpriority="high"
            />
            <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
            <span className="portrait__corner portrait__corner--tr" aria-hidden="true" />
            <span className="portrait__corner portrait__corner--bl" aria-hidden="true" />
            <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
            <figcaption className="portrait__caption">
              <span className="portrait__name">Huseyin Tozluyurt</span>
              <span className="portrait__role mono">Computer engineer · robotics &amp; computer vision</span>
            </figcaption>
          </div>

          <a className="portrait__card" href="#graduation">
            <span className="portrait__card-k mono">Graduation project</span>
            <span className="portrait__card-v">Indoor Delivery Robot</span>
            <span className="portrait__card-meta mono">ROS 2 · ArUco EKF-SLAM · STM32 →</span>
          </a>
        </figure>

        <div className="hero__stats">
          <div className="stat">
            <span className="stat__value">ROS2 · OpenCV · PyTorch</span>
            <span className="stat__label">Core stack</span>
          </div>
          <div className="stat">
            <span className="stat__value">STM32 · ESP32 · C++</span>
            <span className="stat__label">Embedded</span>
          </div>
          <div className="stat">
            <span className="stat__value">5</span>
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
