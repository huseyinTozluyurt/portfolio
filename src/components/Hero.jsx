import robotImg from '../assets/images/my_image.jpeg'

const telemetry = [
  { k: 'Tour saving', v: '−39 %' },
  { k: 'SLAM map error', v: '0.39 m' },
  { k: 'Stop error', v: '0.08–0.16 m' },
]

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

        <figure className="feed" aria-label="Graduation project: the indoor delivery robot">
          <div className="feed__bar mono">
            <span>
              <span className="feed__dots" aria-hidden="true"><i /><i /><i /></span>
              /camera/image_raw
            </span>
            <span className="feed__rec">LIVE</span>
          </div>

          <a className="feed__view" href="#graduation" aria-label="Go to the graduation project">
            <img
              src={robotImg}
              alt="The physical indoor delivery robot, a four-wheel skid-steer build, in a hallway"
              fetchpriority="high"
            />
            <span className="feed__overlay" aria-hidden="true">
              hardware build<br />
              Raspberry Pi · Arduino · STM32
            </span>
            <span
              className="feed__det"
              style={{ left: '40.5%', top: '15%', width: '15.5%', height: '28.5%' }}
              aria-hidden="true"
            >
              <span>delivery_robot 0.99</span>
            </span>
          </a>

          <dl className="feed__hud">
            {telemetry.map((t) => (
              <div key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>

          <figcaption className="feed__caption mono">
            <span>Graduation project · Indoor Delivery Robot</span>
            <a href="#graduation">Details →</a>
          </figcaption>
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
