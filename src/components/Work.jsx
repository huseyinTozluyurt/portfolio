import BoundingBox from './BoundingBox.jsx'

// --- Physical hardware & project images ---
import robotImg from '../assets/images/delivery-robot.jpg'

// --- Indoor delivery robot: simulation & web stack ---
import heroCollageImg from '../assets/images/delivery-hero-collage.jpg'
import simCampusAreaImg from '../assets/images/delivery-sim-campus-area.jpg'
import simArucoOverlayImg from '../assets/images/delivery-sim-aruco-overlay.jpg'
import simMapCorrectionImg from '../assets/images/delivery-sim-map-correction.jpg'
import webShopImg from '../assets/images/delivery-web-shop.jpg'
import webCameraImg from '../assets/images/delivery-web-camera.jpg'
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

// --- LANGuard (network security) ---
import languardDashboardImg from '../assets/images/languard-dashboard.jpg'
import languardThreatsImg from '../assets/images/languard-threats.jpg'
import languardProtectionImg from '../assets/images/languard-protection.jpg'
import languardDnsImg from '../assets/images/languard-dns.jpg'

// 1. FLAGSHIP PROJECT
const flagshipProject = [
  {
    tag: 'GRADUATION PROJECT',
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
    image: heroCollageImg,
    imageAlt: 'Gazebo two-building campus world, the operator web page with the shortest tour, and the final ArUco SLAM map',
    imageBadge: 'GAZEBO WORLD · WEB APP · SLAM MAP',
    layout: 'stacked',
    gallery: [
      { src: simCampusAreaImg, alt: 'campus_area Gazebo world with delivery pads', caption: 'Simulation: campus_area world' },
      { src: simRb1Img, alt: 'Robotnik RB1 base with cargo box and mast camera', caption: 'Simulation: RB1 + mast camera' },
      { src: simArucoOverlayImg, alt: 'Mast camera view with detected ArUco markers', caption: 'ArUco detection from the mast camera' },
      { src: simMapCorrectionImg, alt: 'Pose-graph correction of a run with 15 % wheel slip', caption: 'Map correction (15 % wheel slip)' },
      { src: simTourCompareImg, alt: 'Order-of-arrival tour (290.7 m) vs Held-Karp tour (176.0 m)', caption: 'Tour: 290.7 m → 176.0 m' },
      { src: webShopImg, alt: 'User shop page with cart and delivery point on the SLAM map', caption: 'Web app: shop' },
      { src: webCameraImg, alt: 'Admin camera streaming page with manual control and emergency stop', caption: 'Web app: live camera + control' },
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

// 3. NETWORK SECURITY
const securityProjects = [
  {
    tag: 'NETWORK SECURITY',
    conf: 0.98,
    title: 'LANGuard: LAN Attack Monitor and Intrusion Prevention',
    role: 'Linux Security Tool · Python · scapy · nftables · ClamAV · PyQt5',
    description:
      'A LAN attack monitor, intrusion prevention system and real-time anti-malware for Linux laptops on weak or untrusted networks such as home Wi-Fi, shared offices, dorms and cafés. It catches ARP spoofing, rogue DHCP and IPv6 routers, DNS spoofing, SSL stripping, evil-twin Wi-Fi and LLMNR/Responder poisoning, stops them on the machine itself, and scans new files with ClamAV. It never changes your DNS settings and comes with a desktop app and a CLI.',
    stats: [
      { value: '13', label: 'LAN attack detectors' },
      { value: '17', label: 'active protection responses' },
      { value: '11', label: 'Linux distro releases tested in CI' },
      { value: 'v1.7', label: 'current release' },
    ],
    highlights: [
      { label: 'MITM Detection', text: 'ARP and NDP spoofing, rogue DHCP / DHCPv6 (mitm6) and router advertisements, DNS spoofing and leaks, evil-twin Wi-Fi, an extra hop on the path to the router' },
      { label: 'Active Protection', text: 'Pins the verified router MAC, isolates an attacker\'s frames with nftables, repairs a hijacked DHCP lease and cuts connections that went through the attacker' },
      { label: 'SSL Strip Guard', text: 'A local proxy upgrades plain-HTTP requests to sites you use over HTTPS before anything is sent, and warns on look-alike hosts' },
      { label: 'Anti-Malware', text: 'Every new file in Downloads, Desktop and temp folders is scanned by ClamAV in milliseconds and quarantined if infected; disguised and fileless programs are flagged' },
    ],
    tech: ['Python', 'scapy', 'nftables', 'ClamAV', 'PyQt5', 'systemd', 'Linux networking', 'GitHub Actions'],
    image: languardDashboardImg,
    imageAlt: 'LANGuard desktop app dashboard with protection layers and threat counters',
    imageBadge: 'DESKTOP APP · DASHBOARD',
    gallery: [
      { src: languardThreatsImg, alt: 'LANGuard threats page listing detected attacks', caption: 'Threats' },
      { src: languardProtectionImg, alt: 'LANGuard active protection settings', caption: 'Active protection' },
      { src: languardDnsImg, alt: 'LANGuard encrypted DNS status page', caption: 'Encrypted DNS check' },
    ],
    galleryBadge: 'APP',
    links: [
      { label: 'View repository', href: 'https://github.com/huseyinTozluyurt/LANGuard' },
    ],
    featured: true,
  },
]

function ProjectCard({ p, i }) {
  const { featured } = p
  const stacked = p.layout === 'stacked'

  return (
    <BoundingBox
      label={p.tag}
      confidence={p.conf}
      accent="teal"
      delay={(i % 6) * 70}
      className={`bbox--card ${featured ? 'bbox--featured' : ''}`}
    >
      <article className={`card ${featured ? 'card--featured' : ''} ${stacked ? 'card--stacked' : ''}`}>
        {featured ? (
          <div className="card__media card__media--dashboard">
            {p.image && (
              <div className="media-frame">
                <span className="media-badge mono">{p.imageBadge || 'ARCHITECTURAL CONCEPT'}</span>
                <a href={p.image} target="_blank" rel="noreferrer" title="Open full size">
                  <img src={p.image} alt={p.imageAlt || ''} loading="lazy" className="media-img media-img--wide" />
                </a>
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

export function GraduationProject() {
  return (
    <section className="section work graduation" id="graduation">
      <div className="container">
        <p className="eyebrow mono"><span className="eyebrow__num">01</span> Graduation project</p>
        <h2 className="section__title">Graduation Project</h2>
        <p className="section__lede">
          My B.S. Computer Engineering graduation project: an autonomous indoor delivery robot, built
          as a ROS 2 / Gazebo simulation with a full web app and as a physical robot.
        </p>
        <div className="work__grid">
          {flagshipProject.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <p className="eyebrow mono"><span className="eyebrow__num">05</span> Selected projects</p>
        <h2 className="section__title">Engineering Projects</h2>

        <h3 className="work__subhead mono">Robot Arm &amp; Factory Vision</h3>
        <div className="work__grid work__grid--spaced">
          {factoryProjects.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        <h3 className="work__subhead work__subhead--spaced mono">Network Security</h3>
        <div className="work__grid work__grid--spaced">
          {securityProjects.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
