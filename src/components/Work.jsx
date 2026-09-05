import BoundingBox from './BoundingBox.jsx'

// 1. Import images directly so Vite handles the hashing and routing automatically
import robotImg from '../assets/images/delivery-robot.jpg'
import conveyorImg from '../assets/images/factory-bent-conveyor-v1.jpg'
import detection1Img from '../assets/images/factory-bent-detection-1.jpg'
import pickplaceImg from '../assets/images/factory-bent-arm-pickplace.jpg'

const personalBuilds = [
  {
    tag: 'FLAGSHIP',
    conf: 0.98,
    title: 'AkarBot — Indoor Autonomous Delivery Robot',
    role: 'Vision-navigated robotic platform & full-stack web application, in progress',
    description:
      'A web-triggered delivery platform navigating without LiDAR to significantly reduce hardware costs. A custom YOLO model handles dynamic obstacle avoidance while ArUco markers manage point-to-point pathfinding. A Raspberry Pi orchestrates trim-based IMU motor control and ultrasonic sensors, logging PWM and movement data to train future optimization models. Tied to a React and Spring Boot backend for direct HTTP dispatch requests.',
    highlights: [
      { label: 'Hardware', text: 'Raspberry Pi orchestrating IMU and HC-SR04 ultrasonic sensors via serial' },
      { label: 'Navigation', text: 'Vision-first pathfinding using ArUco markers and YOLO object detection' },
      { label: 'Web Integration', text: 'React Vite + Spring Boot + MySQL stack for order handling and HTTP dispatch' },
    ],
    tech: ['ROS 2', 'YOLO', 'OpenCV', 'React', 'Spring Boot', 'Raspberry Pi', 'Arduino'],
    image: robotImg, 
    imageAlt: 'Indoor delivery robot navigating a hallway with camera mounted',
    repo: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-for-Delivery',
  },
  {
    tag: 'SYSTEM SIMULATION',
    conf: 0.93,
    title: 'Factory Bent — Robotic Pick-and-Place Cell',
    role: 'ROS2 / Gazebo industrial simulation',
    description:
      'An industrial robotic cell simulation built in ROS2 and Gazebo. Engineered a custom Python and OpenCV detection pipeline using foreground masking and edge detection to feed coordinates from a rotary conveyor to a 7-DOF robotic arm. Operated via a custom joint-space GUI with teach-and-playback capabilities.',
    tech: ['ROS2', 'Gazebo', 'OpenCV', 'Python', 'GUI'],
    gallery: [
      { src: conveyorImg, alt: 'Linear conveyor simulation in Gazebo' },
      { src: detection1Img, alt: 'OpenCV object detection pipeline' },
      { src: pickplaceImg, alt: '7-joint robotic arm performing pick-and-place' },
    ],
  },
  {
    tag: 'CORE ENGINEERING',
    conf: 0.88,
    title: 'Embedded Systems & Algorithmic Logic',
    role: 'C++ algorithms, ESP32 IoT, and Linux Security',
    description:
      'Embedded and low-level algorithmic implementations. Engineered an ESP32-based rover with differential drive, hardware e-stops, and sensor-driven LED integration. Developed highly optimized C++ numerical algorithms for LeetCode problem sets, including binary search and square root evaluation logic. Designed network security protocols for Ubuntu Linux environments, hardening DNS, TLS/HTTPS, and port defenses against intrusions.',
    tech: ['C++', 'ESP32', 'Ubuntu Linux', 'Cybersecurity', 'Algorithms'],
    repo: 'https://github.com/huseyinTozluyurt/MarsRoverProject-ESP32',
  }
]

const experience = [
  {
    tag: 'PRODUCTION',
    conf: 0.94,
    title: 'Conveyor Pick-and-Place Vision',
    role: 'ITU ENRO — Computer Vision Engineer, 2026–present',
    description:
      'Engineered real-time object detection and stable-object counting pipelines for factory conveyor operations. Implemented ROI-based preprocessing and centroid tracking within a ROS2 and Gazebo environment to calculate and hand off precise grasp coordinates to robotic arms.',
    tech: ['OpenCV', 'ROS2', 'Gazebo', 'Python'],
  },
  {
    tag: 'INTERNSHIP',
    conf: 0.88,
    title: 'FlyRank Machine Learning Validation',
    role: 'FlyRank — Machine Learning Intern',
    description:
      'Developed validation model notebooks in Google Colab to analyze search intelligence datasets and freshness-decay interactions. Engineered a pipeline from feature creation to training, lifting Precision@50 by roughly 3x over the baseline. Executed rigorous feature leakage checks, signal audits, and data contracts to validate model integrity.',
    tech: ['Python', 'scikit-learn', 'Google Colab', 'Data Contracts', 'DuckDB'],
    repo: 'https://github.com/huseyinTozluyurt/Flyrank-Internship-MachineLearning',
  },
]

function ProjectCard({ p, i }) {
  const featured = (p.tag === 'FLAGSHIP' || p.tag === 'PERSONAL BUILD') && (p.image || p.gallery)
  return (
    <BoundingBox
      label={p.tag}
      confidence={p.conf}
      accent={i % 2 === 0 ? 'teal' : 'yellow'}
      delay={(i % 6) * 70}
      className={`bbox--card ${featured ? 'bbox--featured' : ''}`}
    >
      <article className={`card ${featured ? 'card--featured' : ''}`}>
        {p.image && (
          <div className="card__media">
            <img src={p.image} alt={p.imageAlt || ''} loading="lazy" />
          </div>
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

          {p.gallery && (
            <div className="card__gallery">
              {p.gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />
              ))}
            </div>
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
  const total = personalBuilds.length + experience.length
  return (
    <section className="section work" id="work">
      <div className="container">
        <p className="eyebrow mono">// detections in frame: {total}</p>
        <h2 className="section__title">Work that proves it</h2>

        <h3 className="work__subhead mono">Personal builds</h3>
        <div className="work__grid">
          {personalBuilds.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        <h3 className="work__subhead mono work__subhead--spaced">Professional &amp; academic experience</h3>
        <div className="work__grid">
          {experience.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
