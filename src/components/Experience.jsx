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

// Photos shown before the "Show more" toggle.
const GALLERY_PREVIEW = 6

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
      { file: 'flyrank-model-vs-baseline', fit: 'contain', caption: 'Models vs. existing rule on held-out clients' },
      { file: 'flyrank-feature-signals', fit: 'contain', caption: 'Which page signals carry the ranking' },
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
      'Built an end-to-end logo detection system: a custom-trained 32-class YOLOv7 model that finds brand logos in images and video, wrapped in a pipeline that tracks them across frames and can segment, mirror-correct and re-composite reflected logos. The internship started with core computer vision and ROS2 camera work before moving to this project.',
    bullets: [
      'Trained a 32-class YOLOv7 detector on FlickrLogos-32 with leakage-aware train/val/test splits and dataset audits. On 224 held-out test images it found 300 of 323 logos.',
      'Added video tracking (Hungarian matching on CLIP appearance and motion, Kalman prediction) and a correction pipeline using MobileSAM / GrabCut segmentation, homography-aware flipping and inpainting.',
      'Prototyped open-set detection: a generic logo detector proposes regions and CLIP matching labels them as a known brand or "unknown", so brands outside the training set can still be found.',
      'Shipped a PyQt5 desktop app for batch image and video detection with adjustable confidence, IoU and image size.',
    ],
    metrics: [
      { value: '94.75%', label: 'mAP@0.5' },
      { value: '82.04%', label: 'mAP@0.5:0.95' },
      { value: '85.71%', label: 'Precision' },
      { value: '92.88%', label: 'Recall' },
    ],
    tech: ['Python', 'PyTorch', 'YOLOv7', 'OpenCV', 'MobileSAM', 'CLIP', 'PyQt5', 'ROS2'],
    links: [
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Neural-Bridge-Internship-Logo-Detection' },
    ],
    photos: [
      { file: 'neuralbridge-confusion', fit: 'contain', caption: '32-class confusion matrix' },
      { file: 'neuralbridge-f1-curve', fit: 'contain', caption: 'F1 curve, best 0.93 at confidence 0.774' },
      { file: 'neuralbridge-pr-curve', fit: 'contain', caption: 'Precision–recall curve, 0.948 mAP@0.5' },
      { file: 'neuralbridge-training', fit: 'contain', caption: 'Training loss and mAP over 100 epochs' },
      { file: 'neuralbridge-gui', caption: 'PyQt5 batch detection app' },
      { file: 'neuralbridge-paulaner-toast', caption: 'Several Paulaner logos detected on moving glasses' },
      { file: 'neuralbridge-cocacola', caption: 'Coca-Cola logos detected across a video scene' },
      { file: 'neuralbridge-pepsi', caption: 'Pepsi detected at 0.95 confidence' },
      { file: 'neuralbridge-open-set', caption: 'Generic logo detector on brands outside the 32 classes' },
      { file: 'neuralbridge-esso', caption: 'Esso logo on an industrial tank' },
      { file: 'neuralbridge-erdinger', caption: 'Erdinger logos on bottles and glass' },
      { file: 'neuralbridge-pepsi-ad', caption: 'Small Pepsi can detected in an animated ad (0.66)' },
      { file: 'neuralbridge-paulaner', caption: 'Paulaner logo in a brand video' },
      { file: 'neuralbridge-ros2-graph', fit: 'contain', caption: 'ROS2 camera perception node graph (early weeks)' },
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

function Photo({ file, caption, fit }) {
  const src = images[file]

  if (src) {
    return (
      <figure className={`xp-photo ${fit === 'contain' ? 'xp-photo--chart' : ''}`}>
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
            {item.photos.slice(0, GALLERY_PREVIEW).map((p) => (
              <Photo key={p.file} {...p} />
            ))}
          </div>
          {item.photos.length > GALLERY_PREVIEW && (
            <details className="xp-more">
              <summary className="mono">
                Show {item.photos.length - GALLERY_PREVIEW} more images
              </summary>
              <div className="xp-gallery">
                {item.photos.slice(GALLERY_PREVIEW).map((p) => (
                  <Photo key={p.file} {...p} />
                ))}
              </div>
            </details>
          )}

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
