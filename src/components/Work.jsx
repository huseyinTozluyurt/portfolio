import BoundingBox from './BoundingBox.jsx'

// --- Physical hardware & project images ---
import robotImg from '../assets/images/delivery-robot.jpg'
import ros2PerceptionImg from '../assets/images/ros2-perception.png'

// --- Indoor delivery robot: simulation & web stack ---
import simOperatorRouteImg from '../assets/images/delivery-sim-operator-route.jpg'
import simTwoBuildingsImg from '../assets/images/delivery-sim-two-buildings.jpg'
import simRb1Img from '../assets/images/delivery-sim-rb1-robot.jpg'
import simTourCompareImg from '../assets/images/delivery-sim-tour-compare.jpg'

// --- Indoor delivery robot: hardware ---
import hwArduinoWiringImg from '../assets/images/delivery-hw-arduino-wiring.svg'
import hwStm32PinoutImg from '../assets/images/delivery-hw-stm32-pinout.jpg'

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
    title: 'Indoor Delivery Robot',
    role: 'Full-Stack Robotics · ROS 2 & Gazebo · Embedded Hardware · Web App',
    description:
      'An indoor robot that maps a building, plans the shortest multi-stop tour and delivers customer orders, developed in two repositories. The simulation stack runs in ROS 2 Jazzy / Gazebo Harmonic on a two-building campus: the robot maps the buildings on its own with ArUco-marker EKF-SLAM, plans tours with Dijkstra and Held-Karp, and drives them, while customers order from a React + Vite web shop backed by Spring Boot and MySQL. The hardware is a four-wheel skid-steer robot where a Raspberry Pi commands an Arduino Uno (motors and MPU6050 heading) and an STM32 (four HC-SR04 distance sensors) over UART. The simulation serves the same HTTP API as the real robot, so switching from Gazebo to hardware is one setting in the admin page.',
    stats: [
      { value: '−39 %', label: 'driving saved by the Held-Karp tour (6 stops)' },
      { value: '0.39 m', label: 'internal error of the final SLAM map' },
      { value: '242 m', label: 'driven to map a 70 × 45 m campus' },
      { value: '0.08–0.16 m', label: 'stop error at the delivery pads' },
    ],
    highlights: [
      { label: 'ArUco EKF-SLAM', text: 'solvePnP marker poses feed an EKF over the robot pose and every marker; the robot explores frontiers and unseen walls on its own' },
      { label: 'Map Correction', text: 'Pose-graph rebuild with robust Gauss-Newton: in a 15 % wheel-slip test marker errors fell from 72.7 m to 0.07 m' },
      { label: 'Shortest Tour', text: 'Clearance-weighted Dijkstra on a 0.2 m grid, exact Held-Karp order (8 ms for 6 stops, 161 ms for 12), pure-pursuit driving' },
      { label: 'Web Communication', text: 'web_bridge REST API: /robot/plan, /robot/mission, /robot/status, manual control, emergency stop and a live camera stream' },
      { label: 'Heading Control', text: 'Arduino per-side trim, gyro yaw integration and a 5° threshold that stops, counter-turns and finishes the drive' },
      { label: 'Distance Sensing', text: 'STM32 HAL driver on a 1 MHz timer fires four HC-SR04s in turn and streams a CSV line to the Pi every ~300 ms' },
    ],
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'OpenCV ArUco', 'EKF-SLAM', 'Dijkstra', 'React + Vite', 'Spring Boot', 'MySQL', 'Raspberry Pi', 'Arduino', 'STM32'],
    image: simOperatorRouteImg,
    imageAlt: 'Operator web page showing the Dijkstra shortest delivery tour on the robot SLAM map',
    imageBadge: 'WEB APP · SHORTEST TOUR',
    gallery: [
      { src: simTwoBuildingsImg, alt: 'Two-building campus world in Gazebo Sim with ArUco markers', caption: 'Simulation: Gazebo campus' },
      { src: simRb1Img, alt: 'Robotnik RB1 base with cargo box and mast camera', caption: 'Simulation: RB1 + mast camera' },
      { src: simTourCompareImg, alt: 'Order-of-arrival tour (290.7 m) vs Held-Karp tour (176.0 m)', caption: 'Tour: 290.7 m → 176.0 m' },
      { src: robotImg, alt: 'Physical delivery robot chassis build', caption: 'Hardware: real build' },
      { src: hwArduinoWiringImg, alt: 'Arduino Uno wiring diagram with L298N drivers and MPU6050', caption: 'Hardware: Arduino wiring' },
      { src: hwStm32PinoutImg, alt: 'STM32CubeIDE pinout of the STM32F103C8T6', caption: 'Hardware: STM32 pinout' },
    ],
    links: [
      { label: 'Project website', href: 'https://huseyintozluyurt.github.io/Indoor-Autonomous-Robot-For-Delivery-Simulation-Stack/' },
      { label: 'Simulation & web repository', href: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-For-Delivery-Simulation-Stack' },
      { label: 'Hardware repository', href: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-for-Delivery' },
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

        <h3 className="work__subhead mono">Perception Builds</h3>
        <div className="work__grid">
          {personalBuilds.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
