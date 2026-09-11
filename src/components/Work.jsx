import BoundingBox from './BoundingBox.jsx'

// --- AI Generated Concept Images ---
import roboticsAiImg from '../assets/images/robotics_ai_img.png'
import factoryAiImg from '../assets/images/factory_ai_img.png'
import mlAiImg from '../assets/images/machine_learning_ai_img.png'

// --- Physical Hardware & Project Images ---
import robotImg from '../assets/images/delivery-robot.jpg'
import roverImg from '../assets/images/esp32_mars_rover.jpeg'
import thermistorImg from '../assets/images/thermistor_stm32.jpeg'

// --- Factory Simulation Gallery ---
import conveyorImg from '../assets/images/factory-bent-conveyor-v1.jpg'
import detection1Img from '../assets/images/factory-bent-detection-1.jpg'
import pickplaceImg from '../assets/images/factory-bent-arm-pickplace.jpg'

// --- Computer Vision Internship Gallery ---
import edgeDetectionImg from '../assets/images/edge_detection.png'
import ros2PerceptionImg from '../assets/images/ros2-perception.png'
import fineTuningImg from '../assets/images/fine_tuning.png'

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
      { label: 'Data Logging', text: 'Custom pipeline recording PWM, IMU data, and camera feeds for future ML optimization' }
    ],
    tech: ['ROS2', 'STM32', 'Embedded C++', 'Computer Vision', 'Raspberry Pi', 'React', 'Spring Boot'],
    image: roboticsAiImg, 
    imageAlt: 'Isometric CAD wireframe of autonomous delivery robot',
    gallery: [
      { src: robotImg, alt: 'Physical AkarBot chassis build' }
    ],
    repo: 'https://github.com/huseyinTozluyurt/Indoor-Autonomous-Robot-for-Delivery',
  }
];

// 2. PROFESSIONAL EXPERIENCE & INTERNSHIPS
const experience = [
  {
    tag: 'COMPUTER VISION INTERNSHIP',
    conf: 0.97,
    title: 'Neural Bridge - Computer Vision & Deep Learning R&D',
    role: 'Computer Vision Intern (Dec 2025 – Jan 2026)',
    description:
      'Executed an intensive 6-week engineering program focusing on advanced image processing, ROS2 perception pipelines, and data-centric deep learning. Implemented core algorithms spanning edge detection (Canny, Harris, Shi-Tomasi), Optical Flow tracking, and PyTorch semantic segmentation (DeepLabV3). Bridged computer vision with robotics by implementing custom ROS2 sensor nodes, and successfully trained, evaluated, and fine-tuned YOLO object detection models for enterprise logo recognition[cite: 11].',
    highlights: [
      { label: 'Perception & ROS2', text: 'Built custom ROS2 nodes integrating OpenCV web camera streams for real-time green area detection[cite: 11]' },
      { label: 'Data-Centric ML', text: 'Diagnosed model gaps, manually labeled missing classes via LabelImg, and fine-tuned YOLO weights[cite: 11]' },
    ],
    tech: ['Python', 'OpenCV', 'ROS2', 'YOLO', 'PyTorch', 'PyQt5'],
    image: mlAiImg,
    imageAlt: 'Abstract 3D data visualization of computer vision models',
    gallery: [
      { src: edgeDetectionImg, alt: 'Custom edge detection and thresholding pipeline[cite: 11]' },
      { src: ros2PerceptionImg, alt: 'ROS2 node graph architecture and image processing pipeline[cite: 11]' },
      { src: fineTuningImg, alt: 'YOLO model training metrics and fine-tuning validation[cite: 11]' },
    ],
  },
  {
    tag: 'PRODUCTION SYSTEMS',
    conf: 0.95,
    title: 'Industrial Pick-and-Place Vision Cell',
    role: 'ITU ENRO — Computer Vision Engineer (2026–present)',
    description:
      'Engineered an end-to-end industrial robotic cell simulation and perception pipeline for factory automation. Developed real-time object detection and counting systems using custom ROI-based preprocessing, foreground masking, and centroid tracking. Calculated and handed off spatial coordinates from the vision node to a 7-DOF robotic arm, utilizing URDF endpoint frame definitions and teach-and-playback kinematics in a ROS2/Gazebo ecosystem.',
    highlights: [
      { label: 'Perception', text: 'Custom OpenCV edge detection, mask fusion, and stable-object centroid tracking' },
      { label: 'Kinematics', text: 'Gazebo physics, URDF endpoints, and a self-built joint-space GUI for 7-DOF arm control' },
    ],
    tech: ['ROS2', 'Gazebo', 'OpenCV', 'Python', 'URDF', 'Kinematics'],
    image: factoryAiImg,
    imageAlt: 'Clean computer vision dashboard visualization',
    gallery: [
      { src: conveyorImg, alt: 'Linear conveyor physics simulation' },
      { src: detection1Img, alt: 'OpenCV contour and edge detection pipeline' },
      { src: pickplaceImg, alt: '7-DOF robotic arm utilizing URDF endpoints' },
    ],
  },
  {
    tag: 'MACHINE LEARNING',
    conf: 0.98,
    title: 'FlyRank Machine Learning Validation',
    role: 'FlyRank — Machine Learning Intern',
    description:
      'Conducted extensive exploratory data analysis (EDA) and content optimization analysis on massive search-ranking datasets using DuckDB. Built robust evaluation pipelines prioritizing signal auditing, baseline scoring, and strict feature leakage prevention, utilizing clustering techniques and dimension reduction. Lifted Precision@50 by roughly 3x over the baseline.',
    tech: ['Python', 'scikit-learn', 'EDA', 'Data Contracts', 'DuckDB'],
    repo: 'https://github.com/huseyinTozluyurt/Flyrank-Internship-MachineLearning',
  }
];

// 3. CORE BUILDS
const personalBuilds = [
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
  {
    tag: 'EMBEDDED SYSTEMS',
    conf: 0.92,
    title: 'ESP32 IoT Rover Platform',
    role: 'Microcontroller Programming & Web Control',
    description:
      'Engineered a rover platform built on an ESP32 microcontroller, featuring differential drive control via an L298N motor driver. Implemented a self-hosted Wi-Fi server directly on the MCU to serve a custom control interface, establishing a foundation for ultrasonic obstacle avoidance and streaming sensor telemetry.',
    tech: ['ESP32', 'C++', 'L298N', 'I2C/Serial', 'Hardware Control'],
    image: roverImg,
    imageAlt: 'ESP32 IoT Rover hardware',
    repo: 'https://github.com/huseyinTozluyurt/MarsRoverProject-ESP32',
  }
];

function ProjectCard({ p, i }) {
  // Flagship and Experience items span full width with the media dashboard layout.
  const featured = p.tag === 'FLAGSHIP PLATFORM' || p.tag === 'COMPUTER VISION INTERNSHIP' || p.tag === 'PRODUCTION SYSTEMS'
  
  return (
    <BoundingBox
      label={p.tag}
      confidence={p.conf}
      accent={i % 2 === 0 ? 'accent' : 'line-heavy'} 
      delay={(i % 6) * 70}
      className={`bbox--card ${featured ? 'bbox--featured' : ''}`}
    >
      <article className={`card ${featured ? 'card--featured' : ''}`}>
        
        {/* MEDIA DASHBOARD */}
        {featured ? (
          <div className="card__media" style={{ 
            padding: '28px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            background: 'var(--bg-panel-raised)', 
            borderBottom: 'none'
          }}>
            {/* Top: AI Architectural Concept */}
            {p.image && (
              <div style={{ position: 'relative' }}>
                <span className="mono" style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.95)', color: 'var(--text)', padding: '4px 8px', fontSize: '0.65rem', borderRadius: '4px', border: '1px solid var(--line)', zIndex: 2 }}>
                  ARCHITECTURAL CONCEPT
                </span>
                <img src={p.image} alt={p.imageAlt || ''} loading="lazy" style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--line)' }} />
              </div>
            )}
            
            {/* Bottom: Real Hardware/Simulation/Internship Captures */}
            {p.gallery && (
              <div style={{ display: 'grid', gridTemplateColumns: p.gallery.length > 1 ? 'repeat(auto-fit, minmax(140px, 1fr))' : '1fr', gap: '16px' }}>
                {p.gallery.map((g) => (
                  <div key={g.src} style={{ position: 'relative' }}>
                    <span className="mono" style={{ position: 'absolute', top: 8, left: 8, background: 'var(--accent)', color: '#fff', padding: '4px 8px', fontSize: '0.62rem', borderRadius: '4px', zIndex: 2 }}>
                      LIVE ARTIFACT
                    </span>
                    <img src={g.src} alt={g.alt} loading="lazy" style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--line)' }} />
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

        {/* TEXT BODY */}
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

          <ul className="card__tech mono" style={{ marginTop: '32px' }}>
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
  const total = flagshipProject.length + experience.length + personalBuilds.length
  
  return (
    <section className="section work" id="work">
      <div className="container">
        <p className="eyebrow mono">// detections in frame: {total}</p>
        <h2 className="section__title">Engineering & Production</h2>

        {/* FLAGSHIP SECTION */}
        <h3 className="work__subhead mono">Flagship Architecture</h3>
        <div className="work__grid" style={{ marginBottom: '56px' }}>
          {flagshipProject.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        {/* EXPERIENCE & INTERNSHIPS SECTION */}
        <h3 className="work__subhead mono">Professional Experience & Internships</h3>
        <div className="work__grid" style={{ marginBottom: '56px' }}>
          {experience.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        {/* CORE BUILDS SECTION */}
        <h3 className="work__subhead mono">Core Embedded Builds</h3>
        <div className="work__grid">
          {personalBuilds.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
        
      </div>
    </section>
  )
}