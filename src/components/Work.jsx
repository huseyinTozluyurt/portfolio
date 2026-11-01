import BoundingBox from './BoundingBox.jsx'

// --- Concept render ---
import roboticsAiImg from '../assets/images/robotics_ai_img.png'

// --- Physical hardware & project images ---
import robotImg from '../assets/images/delivery-robot.jpg'
import thermistorImg from '../assets/images/thermistor_stm32.jpeg'
import ros2PerceptionImg from '../assets/images/ros2-perception.png'

// 1. FLAGSHIP PROJECT
const flagshipProject = [
  {
    tag: 'FLAGSHIP PLATFORM',
    conf: 0.99,
    title: 'AkarBot — Autonomous Indoor Delivery Platform',
    role: 'Full-Stack Robotics, ROS2 & Hardware Integration',
    description:
      'Architected an end-to-end autonomous delivery platform, engineering a cost-effective, vision-first navigation system that drops expensive LiDAR in favor of ArUco markers and a custom YOLO model. Orchestrated a ROS2 navigation stack on a Raspberry Pi, bridging visual tracking with an Arduino UNO for IMU-guided trim motor control. Developed a custom STM32 quad-sensor node using hardware timers to stream microsecond collision telemetry. The entire robot accepts HTTP dispatch requests via a custom Spring Boot, MySQL, and React web interface.',
    highlights: [
      { label: 'Vision Navigation', text: 'ArUco point-to-point pathfinding combined with YOLO dynamic obstacle avoidance' },
      { label: 'Bare-Metal Safety', text: 'STM32 quad-sensor array with 30ms hardware timeouts and IMU trim-based rotation' },
      { label: 'Data Logging', text: 'Custom pipeline recording PWM, IMU data, and camera feeds for future ML optimization' },
    ],
    tech: ['ROS2', 'STM32', 'Embedded C++', 'Computer Vision', 'Raspberry Pi', 'React', 'Spring Boot'],
    image: roboticsAiImg,
    imageAlt: 'Isometric CAD wireframe of autonomous delivery robot',
    gallery: [{ src: robotImg, alt: 'Physical AkarBot chassis build' }],
    repo: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-for-Delivery',
    featured: true,
  },
]

// 2. SELECTED BUILDS
const personalBuilds = [
  {
    tag: 'ROBOT PERCEPTION',
    conf: 0.95,
    title: 'ROS2 Camera Perception Pipeline',
    role: 'ROS2 Jazzy · Modular Vision Nodes',
    description:
      'A topic-based ROS2 Jazzy perception stack for a USB camera: separate nodes for capture, image processing, bounding-box visualization and green object detection, each publishing its own topic (raw, processed, debug, mask, detected) so stages can be swapped or inspected independently in rqt.',
    tech: ['ROS2 Jazzy', 'OpenCV', 'cv_bridge', 'Python'],
    image: ros2PerceptionImg,
    imageAlt: 'ROS2 node graph of the camera perception pipeline',
    repo: 'https://github.com/huseyinTozluyurt/ROS2-Perception-Project',
  },
  {
    tag: 'HARDWARE INTERFACING',
    conf: 0.94,
    title: 'STM32 Environmental Telemetry & HMI',
    role: 'Bare-Metal Polling & I2C Display Control',
    description:
      'Engineered a localized environmental telemetry node using an STM32F103C8T6. Developed a custom one-wire protocol driver using microsecond hardware timers (TIM1 @ 1 MHz) to acquire temperature data from a DHT11 sensor. Implemented a responsive Human-Machine Interface (HMI) driving a 128×64 SSD1306 OLED via I2C at 400 kHz, featuring hardware-debounced GPIO interrupts for dynamic setpoint configuration.',
    tech: ['STM32', 'Embedded C', 'I2C', 'Hardware Timers', 'OLED HMI'],
    image: thermistorImg,
    imageAlt: 'STM32 telemetry node driving an I2C OLED display',
    repo: 'https://github.com/huseyinTozluyurt/STM32-Projects-EmbeddedSystems',
  },
]

function ProjectCard({ p, i }) {
  const { featured } = p

  return (
    <BoundingBox
      label={p.tag}
      confidence={p.conf}
      accent="teal"
      delay={(i % 6) * 70}
      className={`bbox--card ${featured ? 'bbox--featured' : ''}`}
    >
      <article className={`card ${featured ? 'card--featured' : ''}`}>
        {featured ? (
          <div className="card__media card__media--dashboard">
            {p.image && (
              <div className="media-frame">
                <span className="media-badge mono">ARCHITECTURAL CONCEPT</span>
                <img src={p.image} alt={p.imageAlt || ''} loading="lazy" className="media-img media-img--wide" />
              </div>
            )}
            {p.gallery && (
              <div className={`media-gallery ${p.gallery.length > 1 ? 'media-gallery--multi' : ''}`}>
                {p.gallery.map((g) => (
                  <div key={g.src} className="media-frame">
                    <span className="media-badge media-badge--live mono">REAL BUILD</span>
                    <img src={g.src} alt={g.alt} loading="lazy" className="media-img" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          p.image && (
            <div className="card__media">
              <img src={p.image} alt={p.imageAlt || ''} loading="lazy" />
            </div>
          )
        )}

        <div className="card__body">
          <p className="card__role mono">{p.role}</p>
          <h3 className="card__title">{p.title}</h3>
          <p className="card__desc">{p.description}</p>

          {p.highlights && (
            <ul className="card__highlights">
              {p.highlights.map((h) => (
                <li key={h.label}>
                  <span className="card__highlight-label mono">{h.label}</span>
                  <span className="card__highlight-text">{h.text}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="card__tech mono">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="card__repo mono">
              View repository →
            </a>
          )}
        </div>
      </article>
    </BoundingBox>
  )
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <p className="eyebrow mono">// selected projects</p>
        <h2 className="section__title">Engineering Projects</h2>

        <h3 className="work__subhead mono">Flagship Architecture</h3>
        <div className="work__grid work__grid--spaced">
          {flagshipProject.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        <h3 className="work__subhead mono">Perception &amp; Embedded Builds</h3>
        <div className="work__grid">
          {personalBuilds.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
