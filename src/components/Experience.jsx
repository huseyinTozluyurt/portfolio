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
const GALLERY_PREVIEW = 8

const experience = [
  {
    id: 'enro',
    org: 'ENRO Team (ITU)',
    role: 'Computer Vision Engineer',
    period: '2026 – Present',
    type: 'Team role',
    summary:
      'Built the computer vision and pick-and-place side of a factory conveyor ("bent") cell in ROS 2 Jazzy and Gazebo Harmonic. A 7-axis Black Coffee Robotics (BCR) arm watches moving products through three OpenCV cameras, catches each one off a bent and places it on another bent or sorts it into a trash or recycling bin. The project grew from one straight conveyor into ten worlds, a 12-arm pipeline factory and a vision lab for testing detectors.',
    metrics: [
      { value: '3', label: 'OpenCV cameras' },
      { value: '10', label: 'Gazebo worlds' },
      { value: '100+', label: 'product types' },
      { value: '12', label: 'arms in the pipeline factory' },
    ],
    bullets: [
      'Wrote a three-camera vision pipeline: an overhead detector (threshold or filled Canny, contours per belt lane, minAreaRect, pixel to world, arm masked out via TF), a side camera using MOG2 and Canny to confirm the product and measure its height, and a release camera that checks the drop zone is free.',
      'Closed the loop from camera to arm: the overhead tracker predicts when a product reaches the catch station, both cameras must agree, the bent stops, and the arm descends with URDF-based IK (damped least squares) and grips only when forward kinematics puts the tip within 1.5 cm of the product top.',
      'Added sorting into trash and recycling bins with auto-sort by material, six arm movement styles chosen by product height, and a PyQt5 order GUI for products, belt speed, simulation speed and run time.',
      'Generalised the cell to circular and straight bents in every combination, then generated a pipeline factory with 13 conveyors and 12 arms that passes route tests through chains of up to six arms.',
      'Built a vision lab where OpenCV or YOLO detectors plug into the controller, are scored offline without Gazebo, and record auto-labelled YOLO datasets while the arm works.',
    ],
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'OpenCV', 'Python', 'PyQt5', 'URDF / IK', 'YOLO'],
    links: [
      { label: 'Project website', href: 'https://huseyintozluyurt.github.io/Factory-Bent-Simulation-with-BCR-Robot-Arm/' },
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Factory-Bent-Simulation-with-BCR-Robot-Arm' },
    ],
    photos: [
      { file: 'factory-bent-dual-circular', caption: 'Dual circular cell with the BCR arm' },
      { file: 'factory-bent-overhead-detections', caption: 'Overhead detections in world coordinates' },
      { file: 'factory-bent-side-camera', caption: 'Side-camera cross-check at the catch station' },
      { file: 'factory-bent-order-gui', caption: 'PyQt5 order GUI with bin destinations' },
      { file: 'factory-bent-sorting-bins', caption: 'Trash and recycling bins' },
      { file: 'factory-bent-pipeline-factory', caption: 'Pipeline factory: 13 conveyors, 12 arms' },
      { file: 'factory-bent-products', caption: '100 realistic product types' },
      { file: 'factory-bent-vision-lab', fit: 'contain', caption: 'Vision lab: offline detector comparison' },
      { file: 'factory-bent-conveyor-v1', caption: 'March 2026: first straight conveyor' },
      { file: 'factory-bent-detection-1', caption: 'Early ROI detection and counting' },
      { file: 'factory-bent-arm-gui', caption: 'Early joint-space arm GUI' },
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
      'Applied search-intelligence internship on real, anonymized Google Search Console data: a 30,000-page starter CSV and a 78.8M-row warehouse queried with DuckDB. I worked through the full data-science cycle, from exploratory analysis and unsupervised segmentation to supervised models, explainability and a learning-to-rank Content Refresh Recommendation Engine, and wrote it up as a capstone research paper.',
    paper: {
      kicker: 'Capstone research paper',
      title: 'Which content pages should an editor review first?',
      meta: 'Hüseyin Tozluyurt · FlyRank ML Internship · October 2026',
      abstract:
        'A client-held-out comparison of the existing "stale and high-traffic" rule against logistic regression and a random forest on 30,000 anonymized pages. Both models beat the rule (Precision@50 0.77 and 0.75 vs 0.66), and only the random forest held its precision once a near-mechanical missing-data signal was removed.',
      href: 'https://huseyintozluyurt.github.io/Flyrank-Internship-MachineLearning/#/paper',
      siteHref: 'https://huseyintozluyurt.github.io/Flyrank-Internship-MachineLearning/',
      image: 'flyrank-site-paper',
      stats: [
        { value: '41', label: 'analysis pages' },
        { value: '48', label: 'notebooks explained' },
        { value: '104', label: 'figures' },
      ],
      previews: [
        { file: 'flyrank-site-home', caption: 'Project site: one page per notebook' },
        { file: 'flyrank-site-stage2', caption: 'Module page: LambdaRank stage' },
      ],
    },
    metrics: [
      { value: '0.77 vs 0.66', label: 'Precision@50, model vs existing rule' },
      { value: '0.381 vs 0.263', label: 'NDCG@10, LambdaRank vs baseline' },
      { value: '91,716', label: 'pages scored by the final engine' },
    ],
    bullets: [
      'Kept every result honest: leakage probes on each feature, whole clients held out in every evaluation, missing Search Console data kept as missing rather than zero, and negative results reported as such.',
      'Moved heavy aggregation into DuckDB SQL over Parquet on Hugging Face, so only compact per-page tables reach pandas.',
      'Published every notebook as its own explained page, plus the capstone paper, on a React project site.',
    ],
    deepDive: [
      {
        title: 'Data analysis',
        open: true,
        intro: 'Understanding the data before modelling it: distributions, missing values, structure and outliers.',
        items: [
          { name: 'Exploratory data analysis', method: 'pandas · seaborn · correlation', result: '30,000 pages, 54.2% labelled as declining; content age is the strongest single correlate (−0.16).' },
          { name: 'Missing-data strategy study', method: 'SimpleImputer · MICE · KNN', result: 'Weighted F1 stayed at ≈0.84–0.85 under every strategy; on the warehouse, KNN recovered masked values with MAE 220 vs 495 for the median.' },
          { name: 'Full warehouse in DuckDB', method: 'SQL window aggregation over hf://', result: '78.8M daily rows queried in place. A leaky model fell from 0.93 to 0.66 accuracy once features were limited to the window before the label.' },
          { name: 'Content segmentation', method: 'K-Means · Ward clustering · DBSCAN', result: 'Nine segments (silhouette 0.224) whose decline share ranges from 34% to 67%; the label is used only to describe clusters afterwards.' },
          { name: 'Dimensionality reduction', method: 'StandardScaler · PCA', result: '111,247 warehouse pages; two components keep 60.9% of the variance.' },
          { name: 'Anomaly detection', method: 'Isolation Forest · DBSCAN · robust z-scores', result: 'Isolation Forest flagged 2,225 pages (2.0%) with a per-feature explanation; DBSCAN found 4,591 noise pages, split into potential winners and failures.' },
        ],
      },
      {
        title: 'Machine learning algorithms',
        open: true,
        intro: 'Supervised models, each compared with a simple baseline on clients the model never saw.',
        items: [
          { name: 'Rule baseline vs random forest', method: 'GroupShuffleSplit by client · Precision@K', result: 'Precision@50 0.68 for the forest vs 0.64 for the rule on 8 unseen clients.' },
          { name: 'Content status (down / stable / up)', method: 'Logistic regression · RF · XGBoost · LightGBM · CatBoost', result: 'Five class-weighted models compared on balanced accuracy and macro F1; LightGBM chosen (≈0.55 balanced accuracy).' },
          { name: 'Needs-refresh classifier', method: 'XGBoost · threshold analysis', result: 'ROC-AUC 0.81 and PR-AUC 0.78; best F1 0.74 at a 0.40 cutoff.' },
          { name: 'Impressions regression', method: 'XGBoost regressor · RandomizedSearchCV', result: 'R² 0.74 on the CSV, but it lost to a naive "same as last month" baseline on the warehouse (0.40 vs 0.63), reported as a negative result.' },
          { name: 'Explainability', method: 'Native, permutation and SHAP importance · PDPs', result: 'SHAP values from 21 one-hot columns aggregated back to 14 original features; previous impressions dominate.' },
          { name: 'Capstone models', method: 'Logistic regression · random forest · 20 client-held-out splits', result: 'Both beat the existing rule on average precision in 20 of 20 splits.' },
        ],
      },
      {
        title: 'Content Refresh Recommendation Engine',
        intro: 'An end-to-end ranking system on the full warehouse that tells editors which pages to refresh first, built and validated in stages.',
        open: true,
        steps: [
          { name: 'Transparent rules', text: 'Version 1 scores DuckDB-aggregated signals with a weighted rule and explains every recommendation with reason codes. Stage 1 adds key-uniqueness, join (100% match) and score/tier assertions.' },
          { name: 'Learning to rank', text: 'Stage 2 audits 43.1M rows, keeps missing Search Console data missing, grades 78,904 pages 0–4 by decline severity and trains LightGBM LambdaRank on 17 features from days 60–120. Over five client-held-out seeds it reaches NDCG@10 0.381 vs 0.263 for an impressions baseline and beats the rule baseline in 9 of 10 comparisons.' },
          { name: 'Impact tracking', text: 'Stage 3 adds an editor intervention log, 30-day pre/post windows and a matched-control difference-in-differences design. With no refreshes logged yet, the estimate is skipped rather than invented.' },
          { name: 'Production release', text: 'Stage 4 and the final notebook add validation gates on aggregation, evaluation and scoring, a drift reference and hashed model bundles. The final ranker scores 91,716 pages across 40 clients, sends 35 to the HIGH tier and passes 14 of 14 release checks.' },
          { name: 'Output EDA', text: 'A separate notebook audits the exported queue: LambdaRank wins 45, ties 4 and loses 17 paired comparisons against the impressions baseline, and all 7 data-quality checks pass.' },
        ],
        link: { label: 'Engine README', href: 'https://github.com/huseyinTozluyurt/Flyrank-Internship-MachineLearning/tree/main/notebooks/ContentRefreshRecommendationEngine' },
      },
    ],
    tech: ['Python', 'DuckDB', 'pandas', 'scikit-learn', 'LightGBM LambdaRank', 'XGBoost', 'SHAP', 'Hugging Face'],
    links: [
      { label: 'Read the paper', href: 'https://huseyintozluyurt.github.io/Flyrank-Internship-MachineLearning/#/paper' },
      { label: 'Project site', href: 'https://huseyintozluyurt.github.io/Flyrank-Internship-MachineLearning/' },
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Flyrank-Internship-MachineLearning' },
    ],
    photos: [
      { file: 'flyrank-model-vs-baseline', fit: 'contain', caption: 'Capstone: models vs the existing rule on held-out clients' },
      { file: 'flyrank-rec-ndcg-holdouts', fit: 'contain', caption: 'Engine: NDCG across repeated client holdouts' },
      { file: 'flyrank-rec-feature-importance', fit: 'contain', caption: 'Engine: top LambdaRank features' },
      { file: 'flyrank-rec-seed-ndcg', fit: 'contain', caption: 'Engine: mean NDCG@10 by seed and method' },
      { file: 'flyrank-segmentation-kmeans', fit: 'contain', caption: 'K-Means content segments (PCA view)' },
      { file: 'flyrank-shap-aggregated', fit: 'contain', caption: 'SHAP importance aggregated to original features' },
      { file: 'flyrank-needs-refresh', fit: 'contain', caption: 'XGBoost needs-refresh feature importance' },
      { file: 'flyrank-anomaly-dbscan', fit: 'contain', caption: 'DBSCAN clusters and noise pages' },
      { file: 'flyrank-feature-signals', fit: 'contain', caption: 'Capstone: which page signals carry the ranking' },
      { file: 'flyrank-rec-score-by-tier', fit: 'contain', caption: 'Engine: LambdaRank score by priority tier' },
      { file: 'flyrank-rec-rank-vs-score', fit: 'contain', caption: 'Engine: model rank vs score' },
      { file: 'flyrank-rec-spearman', fit: 'contain', caption: 'Engine: feature correlation review' },
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
      { file: 'neuralbridge-ros2-graph', fit: 'contain', caption: 'ROS2 camera perception node graph (early weeks)' },
      { file: 'neuralbridge-gui', caption: 'PyQt5 batch detection app' },
      { file: 'neuralbridge-paulaner-toast', caption: 'Several Paulaner logos detected on moving glasses' },
      { file: 'neuralbridge-cocacola', caption: 'Coca-Cola logos detected across a video scene' },
      { file: 'neuralbridge-pepsi', caption: 'Pepsi detected at 0.95 confidence' },
      { file: 'neuralbridge-open-set', caption: 'Generic logo detector on brands outside the 32 classes' },
      { file: 'neuralbridge-esso', caption: 'Esso logo on an industrial tank' },
      { file: 'neuralbridge-erdinger', caption: 'Erdinger logos on bottles and glass' },
      { file: 'neuralbridge-pepsi-ad', caption: 'Small Pepsi can detected in an animated ad (0.66)' },
      { file: 'neuralbridge-paulaner', caption: 'Paulaner logo in a brand video' },
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

function PaperCard({ paper }) {
  const src = images[paper.image]
  return (
    <section className="xp-paper" aria-label={paper.kicker}>
      <div className="xp-paper__media">
        <a className="xp-paper__shot" href={paper.href} target="_blank" rel="noreferrer">
          {src && <img src={src} alt={`Screenshot of the paper: ${paper.title}`} loading="lazy" />}
          <span className="xp-paper__badge mono">Open paper ↗</span>
        </a>
        {paper.previews && (
          <div className="xp-paper__previews">
            {paper.previews.map((p) => (
              <Photo key={p.file} {...p} />
            ))}
          </div>
        )}
      </div>
      <div className="xp-paper__body">
        <p className="xp-paper__kicker mono">{paper.kicker}</p>
        <h4 className="xp-paper__title">{paper.title}</h4>
        <p className="xp-paper__meta mono">{paper.meta}</p>
        <p className="xp-paper__abstract">{paper.abstract}</p>
        <dl className="xp-paper__stats">
          {paper.stats.map((st) => (
            <div key={st.label}>
              <dd>{st.value}</dd>
              <dt className="mono">{st.label}</dt>
            </div>
          ))}
        </dl>
        <div className="xp-paper__actions">
          <a href={paper.href} target="_blank" rel="noreferrer" className="btn btn--primary">Read the paper →</a>
          <a href={paper.siteHref} target="_blank" rel="noreferrer" className="btn btn--ghost">Explore the project site</a>
        </div>
      </div>
    </section>
  )
}

function DeepDive({ sections }) {
  return (
    <div className="xp-deep">
      {sections.map((sec) => (
        <details className="xp-deep__section" key={sec.title} open={sec.open}>
          <summary>
            <span className="xp-deep__title">{sec.title}</span>
            <span className="xp-deep__count mono">
              {sec.items ? `${sec.items.length} studies` : `${sec.steps.length} stages`}
            </span>
          </summary>
          <p className="xp-deep__intro">{sec.intro}</p>
          {sec.items && (
            <div className="xp-deep__grid">
              {sec.items.map((it) => (
                <div className="xp-deep__item" key={it.name}>
                  <p className="xp-deep__name">{it.name}</p>
                  <p className="xp-deep__method mono">{it.method}</p>
                  <p className="xp-deep__result">{it.result}</p>
                </div>
              ))}
            </div>
          )}
          {sec.steps && (
            <ol className="xp-steps">
              {sec.steps.map((st) => (
                <li key={st.name}>
                  <p className="xp-steps__name">{st.name}</p>
                  <p className="xp-steps__text">{st.text}</p>
                </li>
              ))}
            </ol>
          )}
          {sec.link && (
            <a href={sec.link.href} target="_blank" rel="noreferrer" className="card__repo mono xp-deep__link">
              {sec.link.label} →
            </a>
          )}
        </details>
      ))}
    </div>
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

          {item.paper && <PaperCard paper={item.paper} />}

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

          {item.deepDive && <DeepDive sections={item.deepDive} />}

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
