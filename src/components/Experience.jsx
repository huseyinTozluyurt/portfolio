import BoundingBox from './BoundingBox.jsx'

/*
 * ─── Experience photos ────────────────────────────────────────────────
 * Every image in src/assets/images/experience/ and src/assets/images/ is
 * picked up automatically. A photo slot below names a file (without
 * extension). If the file exists it is shown; if it does not, a
 * placeholder is rendered instead.
 *
 * To add your own photo: save it as
 *   src/assets/images/experience/<file>.jpg   (or .jpeg / .png / .webp)
 * using the exact <file> name of the slot. No code change is needed.
 */
const imageModules = {
  ...import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/images/experience/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
}

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split('/').pop().replace(/\.(jpe?g|png|webp)$/i, ''),
    url,
  ])
)

const experience = [
  {
    id: 'enro',
    org: 'ENRO Team (ITU)',
    role: 'Computer Vision Engineer',
    period: '2026 – Present',
    type: 'Team role',
    summary:
      'Building the perception side of a factory conveyor ("bent") cell: a ROS2 Jazzy and Gazebo Harmonic simulation with an overhead camera, a classical OpenCV pipeline that detects and counts parts on the belt, and coordinate handoff to a robotic arm for pick-and-place.',
    bullets: [
      'Modelled the conveyor, side rails and collection bin in SDF, tuning friction and belt velocity so parts move at a constant speed regardless of size or mass.',
      'Bridged the Gazebo overhead camera into ROS2 (ros_gz_bridge → sensor_msgs/Image) as the input to the vision node.',
      'Wrote a fused detection pipeline on a region of interest: MOG2 background subtraction, adaptive thresholding and Canny edges combined with morphological clean-up, then contour filtering into bounding boxes.',
      'Added centroid-based track matching and a stability check so each part is counted exactly once, only after it has been tracked across several frames.',
      'Handed detected part coordinates to a 7-DOF arm defined in URDF, driven through a self-built joint-space GUI with teach-and-playback motions.',
    ],
    tech: ['ROS2 Jazzy', 'Gazebo Harmonic', 'OpenCV', 'Python', 'SDF / URDF', 'Kinematics'],
    links: [
      { label: 'Factory simulation code', href: 'https://github.com/huseyinTozluyurt/ROS2_Projects' },
    ],
    photos: [
      { file: 'factory-bent-conveyor-v1', caption: 'Conveyor simulation in Gazebo' },
      { file: 'factory-bent-detection-1', caption: 'ROI detection and counting overlay' },
      { file: 'factory-bent-arm-pickplace', caption: '7-DOF arm pick-and-place' },
      { file: 'factory-bent-arm-gui', caption: 'Joint-space control GUI' },
      { file: 'enro-team', caption: 'ENRO team / lab photo' },
    ],
  },
  {
    id: 'flyrank',
    org: 'FlyRank',
    role: 'Machine Learning Intern',
    period: '2026',
    type: 'Internship',
    summary:
      'Applied search-intelligence track on an anonymized 30,000-page, 32-client slice of real Google Search data. The capstone asked whether a model can build a better 50-page "review first" queue for editors than the existing stale-and-high-traffic rule, on clients it has never seen.',
    bullets: [
      'Audited the 44-column dataset, wrote a data contract and ran feature-leakage probes: every allowed feature scores single-feature AUC 0.51–0.59, while the forbidden label-derived field scores 1.0.',
      'Benchmarked missing-data strategies; median imputation plus missing-value indicators matched complete-case accuracy while keeping every row.',
      'Compared the hand-written rule with logistic regression and a random forest over 20 repeated client-held-out splits, and showed that random page splits overstate transfer to new clients.',
      'Found that a missing-position flag was a near-mechanical marker of "new" pages; the random forest was the only model that kept its top-50 precision once those pages were removed, so it became the default queue.',
      'Delivered a client-held-out review queue with plain-language reason codes and a research write-up, framed as decision support for human editors.',
    ],
    metrics: [
      { value: '0.75–0.77', label: 'Precision@50, models' },
      { value: '0.66', label: 'Precision@50, existing rule' },
      { value: '20 / 20', label: 'splits where models beat the rule on AP' },
    ],
    tech: ['Python', 'pandas', 'scikit-learn', 'DuckDB', 'Jupyter / Colab', 'Leakage audits'],
    links: [
      { label: 'Research paper', href: 'https://huseyintozluyurt.github.io/Flyrank-Internship-MachineLearning/' },
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Flyrank-Internship-MachineLearning' },
    ],
    photos: [
      { file: 'flyrank-model-vs-baseline', caption: 'Models vs. existing rule on held-out clients' },
      { file: 'flyrank-feature-signals', caption: 'Which page signals carry the ranking' },
      { file: 'flyrank-photo', caption: 'Internship photo / certificate' },
    ],
  },
  {
    id: 'neural-bridge',
    org: 'Neural Bridge',
    role: 'Computer Vision Intern',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    summary:
      'Six-week computer vision and deep learning programme, ending in an end-to-end logo detection project: a custom-trained 32-class YOLOv7 detector feeding a pipeline that finds, segments, corrects and re-composites mirrored brand logos in images and video.',
    bullets: [
      'Trained and evaluated a 32-class YOLOv7 logo detector on FlickrLogos-32, with leakage-aware train/val/test splits, dataset auditing and preflight validation before every run.',
      'Built the single-image correction pipeline: YOLO plus optional EasyOCR detections, MobileSAM / GrabCut segmentation, PCA symmetry estimation, homography-corrected flipping, and LaMa or OpenCV inpainting before blending the logo back.',
      'Extended it to video with Hungarian track association (CLIP appearance + motion cost), Kalman-filter prediction and MediaPipe hand-occlusion handling that reuses cached results.',
      'Shipped a PyQt5 desktop GUI so non-technical users can run batch image and video detection without the terminal.',
      'Earlier weeks covered edge and corner detection (Canny, Harris, Shi-Tomasi), optical flow, DeepLabV3 segmentation in PyTorch, and custom ROS2 camera nodes.',
    ],
    metrics: [
      { value: '94.75%', label: 'mAP@0.5' },
      { value: '82.04%', label: 'mAP@0.5:0.95' },
      { value: '92.88%', label: 'Recall' },
    ],
    tech: ['Python', 'PyTorch', 'YOLOv7', 'OpenCV', 'MobileSAM', 'CLIP', 'PyQt5'],
    links: [
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Neural-Bridge-Internship-Logo-Detection' },
    ],
    photos: [
      { file: 'neuralbridge-detection', caption: 'Logo detections on video frames' },
      { file: 'neuralbridge-gui', caption: 'PyQt5 detection GUI' },
      { file: 'neuralbridge-training', caption: 'Training loss and mAP over 100 epochs' },
      { file: 'edge_detection', caption: 'Edge detection and thresholding exercises' },
      { file: 'fine_tuning', caption: 'YOLO fine-tuning metrics' },
      { file: 'neuralbridge-photo', caption: 'Internship photo / certificate' },
    ],
  },
  {
    id: 'tutoring',
    org: 'Robotics Tutoring',
    role: 'Robotics & Embedded Systems Tutor',
    period: '2025',
    type: 'Teaching',
    summary:
      'Teaching robotics and embedded programming through hands-on builds, with an ESP32 Mars rover as the main teaching platform and an educational app platform developed to support the lessons.',
    bullets: [
      'Designed an ESP32 Mars rover as a teaching platform: the board hosts its own Wi-Fi server and drives DC motors through an L298N for differential steering.',
      'Built the rover’s web control panel in React (forward, reverse, turning and an emergency stop) so students can drive it from any browser.',
      'Used the rover build to teach motor control, wiring and wireless communication step by step.',
      'Developed an educational app platform to support lessons and student practice.',
    ],
    tech: ['ESP32', 'Arduino C++', 'L298N', 'React', 'Tailwind CSS', 'Teaching'],
    links: [
      { label: 'Mars rover repository', href: 'https://github.com/huseyinTozluyurt/MarsRoverProject-ESP32' },
      { label: 'Rover demo video', href: 'https://www.youtube.com/watch?v=0JyftJ-eNdY' },
    ],
    photos: [
      { file: 'esp32_mars_rover', caption: 'ESP32 Mars rover' },
      { file: 'tutoring-class', caption: 'Teaching session' },
      { file: 'tutoring-app', caption: 'Educational app platform' },
    ],
  },
]

function Photo({ file, caption }) {
  const src = images[file]

  if (src) {
    return (
      <figure className="xp-photo">
        <a href={src} target="_blank" rel="noreferrer" title="Open full size">
          <img src={src} alt={caption} loading="lazy" />
        </a>
        <figcaption className="mono">{caption}</figcaption>
      </figure>
    )
  }

  return (
    <figure className="xp-photo xp-photo--empty">
      <div className="xp-photo__placeholder" role="img" aria-label={`${caption} (photo coming soon)`}>
        <span className="xp-photo__icon" aria-hidden="true">+</span>
        <span className="mono">Photo coming soon</span>
        {import.meta.env.DEV && (
          <code className="xp-photo__hint">experience/{file}.jpg</code>
        )}
      </div>
      <figcaption className="mono">{caption}</figcaption>
    </figure>
  )
}

function ExperienceItem({ item, i }) {
  return (
    <li className="xp-item" id={`xp-${item.id}`}>
      <div className="xp-item__rail" aria-hidden="true">
        <span className="xp-item__dot" />
      </div>

      <BoundingBox
        label={item.type.toUpperCase()}
        accent="teal"
        delay={i * 80}
        className="bbox--card"
      >
        <article className="xp-card">
          <header className="xp-card__head">
            <div>
              <p className="xp-card__org mono">{item.org}</p>
              <h3 className="xp-card__role">{item.role}</h3>
            </div>
            <p className="xp-card__period mono">{item.period}</p>
          </header>

          <p className="xp-card__summary">{item.summary}</p>

          {item.metrics && (
            <dl className="xp-metrics">
              {item.metrics.map((m) => (
                <div className="xp-metric" key={m.label}>
                  <dt className="mono">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="xp-card__bullets">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="xp-gallery">
            {item.photos.map((p) => (
              <Photo key={p.file} {...p} />
            ))}
          </div>

          <footer className="xp-card__foot">
            <ul className="card__tech mono">
              {item.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="xp-card__links">
              {item.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="card__repo mono">
                  {l.label} →
                </a>
              ))}
            </div>
          </footer>
        </article>
      </BoundingBox>
    </li>
  )
}

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="eyebrow mono">// experience &amp; internships</p>
        <h2 className="section__title">Where I&apos;ve Worked</h2>
        <p className="section__lede">
          Industry internships, a robotics team role and teaching. Each entry links to the code or
          write-up behind it.
        </p>

        <ol className="xp-list">
          {experience.map((item, i) => (
            <ExperienceItem item={item} i={i} key={item.id} />
          ))}
        </ol>
      </div>
    </section>
  )
}
