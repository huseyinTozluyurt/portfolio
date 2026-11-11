import BoundingBox from './BoundingBox.jsx'

// --- Concept render ---
import roboticsAiImg from '../assets/images/robotics_ai_img.png'

// --- Physical hardware & project images ---
import robotImg from '../assets/images/delivery-robot.jpg'
import thermistorImg from '../assets/images/thermistor_stm32.jpeg'
import ros2PerceptionImg from '../assets/images/ros2-perception.png'

// --- Indoor delivery robot: simulation & web stack ---
import simOperatorRouteImg from '../assets/images/delivery-sim-operator-route.jpg'
import simSlamMapImg from '../assets/images/delivery-sim-slam-map.jpg'
import simGazeboWorldImg from '../assets/images/delivery-sim-gazebo-world.jpg'
import simDijkstraImg from '../assets/images/delivery-sim-dijkstra-mission.jpg'

// --- Factory bent simulation (ENRO) ---
import factoryDualImg from '../assets/images/factory-bent-dual-circular.jpg'
import factoryOverheadImg from '../assets/images/factory-bent-overhead-detections.jpg'
import factoryOrderGuiImg from '../assets/images/factory-bent-order-gui.jpg'
import factoryPipelineImg from '../assets/images/factory-bent-pipeline-factory.jpg'

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
      { label: 'Simulation Twin', text: 'A full Gazebo simulation and web stack serving the same robot API (next card)' },
    ],
    tech: ['ROS2', 'STM32', 'Embedded C++', 'Computer Vision', 'Raspberry Pi', 'React', 'Spring Boot'],
    image: roboticsAiImg,
    imageAlt: 'Isometric CAD wireframe of autonomous delivery robot',
    gallery: [{ src: robotImg, alt: 'Physical AkarBot chassis build' }],
    repo: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-for-Delivery',
    featured: true,
  },
  {
    tag: 'SIMULATION + WEB STACK',
    conf: 0.98,
    title: 'Indoor Delivery Robot — Gazebo Simulation & Web App',
    role: 'ROS 2 Jazzy · Gazebo Harmonic · ArUco SLAM · React + Vite',
    description:
      'The simulation and software stack behind the delivery robot. In a ROS 2 Jazzy / Gazebo Harmonic model of a two-building campus, the robot maps the buildings with ArUco-marker visual SLAM, plans the shortest multi-stop tour with Dijkstra, and drives it on its own. Customers order from a React + Vite web shop backed by Spring Boot and MySQL, an operator loads the robot, and the robot delivers. The robot side serves the same HTTP API in simulation and on the real Raspberry Pi, so the web app moves from Gazebo to hardware by changing one IP.',
    highlights: [
      { label: 'ArUco EKF-SLAM', text: 'Self-exploring mapper: EKF over robot pose and markers, lidar occupancy grid, delivery points saved in front of each marker' },
      { label: 'Shortest Tour', text: 'Dijkstra on a 0.2 m clearance map for every leg, exact best stop order with Held-Karp (2-opt beyond 12 stops)' },
      { label: 'Autonomous Driving', text: 'Pure-pursuit control, obstacle stop and replan, and a camera check that the right marker is in view at each stop' },
      { label: 'Web Communication', text: 'web_bridge HTTP API (/robot/plan, /robot/mission, /robot/status, live camera) with order status pushed back to the backend' },
      { label: 'Map Correction', text: 'Pose-graph optimisation (robust Gauss-Newton) repairs maps spoiled by wheel slip' },
    ],
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'OpenCV ArUco', 'EKF-SLAM', 'Dijkstra', 'React + Vite', 'Spring Boot', 'MySQL'],
    image: simOperatorRouteImg,
    imageAlt: 'Operator web page showing the Dijkstra shortest delivery tour on the robot SLAM map',
    imageBadge: 'WEB APP · SHORTEST TOUR',
    gallery: [
      { src: simGazeboWorldImg, alt: 'Two-building campus world in Gazebo with ArUco markers', caption: 'Gazebo campus world' },
      { src: simSlamMapImg, alt: 'ArUco SLAM map with markers and delivery points', caption: 'ArUco SLAM map' },
      { src: simDijkstraImg, alt: 'Delivery GUI running a multi-stop Dijkstra mission', caption: 'Multi-stop mission' },
    ],
    galleryBadge: 'SIMULATION',
    links: [
      { label: 'Project website', href: 'https://huseyintozluyurt.github.io/Indoor-Autonomous-Robot-For-Delivery-Simulation-Stack/' },
      { label: 'View repository', href: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-For-Delivery-Simulation-Stack' },
    ],
    featured: true,
  },
]

// 2. ROBOT ARM & FACTORY VISION (ENRO)
const factoryProjects = [
  {
    tag: 'ENRO · COMPUTER VISION',
    conf: 0.97,
    title: 'Factory Bent Simulation with a BCR Robot Arm',
    role: 'ENRO Team · ROS 2 Jazzy · Gazebo Harmonic · OpenCV',
    description:
      'Vision-guided pick and place on factory conveyor belts ("bents"). A 7-axis Black Coffee Robotics arm watches moving products through three cameras, catches each one off a bent and places it on another bent or sorts it into a trash or recycling bin. Built up from a single straight conveyor into ten worlds, including a pipeline factory with 13 conveyors and 12 arms, plus a vision lab for testing OpenCV or YOLO detectors.',
    stats: [
      { value: '7-axis', label: 'BCR robot arm' },
      { value: '3', label: 'OpenCV cameras' },
      { value: '10', label: 'Gazebo worlds' },
      { value: '100+', label: 'product types' },
    ],
    highlights: [
      { label: 'Three Cameras', text: 'Overhead detection and tracking, a side-camera cross-check that measures height, and a drop-zone check' },
      { label: 'Pick & Place', text: 'URDF-based IK (damped least squares), catching moving products, grip only within 1.5 cm, six movement styles' },
      { label: 'Sorting & Orders', text: 'Trash and recycling bins, auto-sort by material, and a PyQt5 order GUI for products, belt and simulation speed' },
      { label: 'Vision Lab', text: 'Plug-in OpenCV / YOLO detectors, offline scoring, auto-labelled datasets and PASS/FAIL pipeline tests' },
    ],
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'OpenCV', 'Python', 'PyQt5', 'URDF / IK', 'YOLO'],
    image: factoryDualImg,
    imageAlt: 'Dual circular factory cell with the BCR arm between two conveyor rings',
    imageBadge: 'DUAL CIRCULAR CELL',
    gallery: [
      { src: factoryOverheadImg, alt: 'Overhead camera detections in world coordinates', caption: 'Overhead detections' },
      { src: factoryOrderGuiImg, alt: 'PyQt5 order GUI with trash and recycling destinations', caption: 'Order GUI' },
      { src: factoryPipelineImg, alt: 'Pipeline factory with 12 arms and 13 conveyors', caption: '12-arm pipeline factory' },
    ],
    galleryBadge: 'SIMULATION',
    links: [
      { label: 'Project website', href: 'https://huseyintozluyurt.github.io/Factory-Bent-Simulation-with-BCR-Robot-Arm/' },
      { label: 'View repository', href: 'https://github.com/huseyinTozluyurt/Factory-Bent-Simulation-with-BCR-Robot-Arm' },
    ],
    featured: true,
  },
]

// 3. SELECTED BUILDS
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
                <span className="media-badge mono">{p.imageBadge || 'ARCHITECTURAL CONCEPT'}</span>
                <img src={p.image} alt={p.imageAlt || ''} loading="lazy" className="media-img media-img--wide" />
              </div>
            )}
            {p.gallery && (
              <div className={`media-gallery ${p.gallery.length > 1 ? 'media-gallery--multi' : ''}`}>
                {p.gallery.map((g) => (
                  <figure key={g.src} className="media-frame">
                    {!g.caption && (
                      <span className="media-badge media-badge--live mono">{p.galleryBadge || 'REAL BUILD'}</span>
                    )}
                    <a href={g.src} target="_blank" rel="noreferrer" title="Open full size">
                      <img src={g.src} alt={g.alt} loading="lazy" className="media-img" />
                    </a>
                    {g.caption && <figcaption className="media-caption mono">{g.caption}</figcaption>}
                  </figure>
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

          {p.stats && (
            <dl className="xp-metrics card__stats">
              {p.stats.map((m) => (
                <div className="xp-metric" key={m.label}>
                  <dt className="mono">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

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
          {p.links ? (
            <div className="card__links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="card__repo mono">
                  {l.label} →
                </a>
              ))}
            </div>
          ) : (
            p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="card__repo mono">
                View repository →
              </a>
            )
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

        <h3 className="work__subhead mono">Robot Arm &amp; Factory Vision</h3>
        <div className="work__grid work__grid--spaced">
          {factoryProjects.map((p, i) => (
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
