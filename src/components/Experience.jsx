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
    id: 'flyrank',
    org: 'FlyRank AI',
    role: 'Machine Learning Intern',
    period: '2026',
    type: 'Internship',
    summary:
      'Applied search-intelligence internship on real, anonymized Google Search Console data: a 30,000-page starter CSV and a 78.8M-row warehouse queried with DuckDB. I worked through the full data-science cycle, from exploratory analysis and unsupervised segmentation to supervised models, explainability and a learning-to-rank Content Refresh Recommendation Engine, and wrote it up as a capstone research paper.',
    paper: {
      kicker: 'Capstone research paper',
      title: 'Which content pages should an editor review first?',
      meta: 'Hüseyin Tozluyurt · FlyRank AI ML Internship · October 2026',
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
    id: 'enro',
    org: 'ENRO Team (ITU)',
    role: 'Computer Vision Engineer',
    period: '2026 – Aug 2026',
    type: 'Team role',
    summary:
      'Built the computer vision and pick-and-place side of a factory conveyor ("bent") cell in ROS 2 Jazzy and Gazebo Harmonic. A 7-axis Black Coffee Robotics (BCR) arm watches moving products through three OpenCV cameras, catches each one off a bent and places it on another bent or sorts it into a trash or recycling bin. Starting in March 2026 from one straight conveyor and a threshold script, the project grew into ten worlds, a 12-arm pipeline factory and a vision lab for testing detectors, documented in a project website and six reports.',
    paper: {
      kicker: 'Project website',
      title: 'Factory Bent Simulation with a BCR Robot Arm',
      meta: 'ENRO Team · ROS 2 Jazzy · Gazebo Harmonic · OpenCV · 2026',
      abstract:
        'Vision-guided pick and place on factory conveyor belts. The site walks through the architecture, every world, the three-camera vision pipeline, the pick cycle, the 100-product generator, the 12-arm pipeline factory and the vision lab, with a dated timeline and six PDF reports on how each part evolved.',
      href: 'https://huseyintozluyurt.github.io/Factory-Bent-Simulation-with-BCR-Robot-Arm/',
      siteHref: 'https://github.com/huseyinTozluyurt/Factory-Bent-Simulation-with-BCR-Robot-Arm',
      primaryLabel: 'Open the project website →',
      secondaryLabel: 'View the repository',
      badge: 'Open website ↗',
      image: 'factory-bent-dual-circular',
      imageAlt: 'Dual circular factory cell with the BCR arm between two conveyor rings',
      stats: [
        { value: '7-axis', label: 'BCR robot arm' },
        { value: '3', label: 'OpenCV cameras' },
        { value: '10', label: 'Gazebo worlds' },
        { value: '100+', label: 'product types' },
        { value: '12', label: 'arms in the pipeline factory' },
        { value: '10', label: 'vision lab experiments' },
      ],
      previews: [
          ],
    },
    bullets: [
      'Wrote a three-camera vision pipeline: an overhead detector (threshold or filled Canny, contours per belt lane, minAreaRect, pixel to world, arm masked out via TF), a side camera using MOG2 and Canny to confirm the product and measure its height, and a release camera that checks the drop zone is free.',
      'Closed the loop from camera to arm: the overhead tracker predicts when a product reaches the catch station, both cameras must agree, the bent stops, and the arm descends with URDF-based IK (damped least squares) and grips only when forward kinematics puts the tip within 1.5 cm of the product top.',
      'Added sorting into trash and recycling bins with auto-sort by material, six arm movement styles chosen by product height, and a PyQt5 order GUI for products, belt speed, simulation speed and run time.',
      'Generalised the cell to circular and straight bents in every combination, then generated a pipeline factory with 13 conveyors and 12 arms that passes route tests through chains of up to six arms.',
      'Built a vision lab where OpenCV or YOLO detectors plug into the controller, are scored offline without Gazebo, and record auto-labelled YOLO datasets while the arm works.',
    ],
    deepDive: [
      {
        title: 'Three-camera vision',
        unit: 'cameras',
        open: true,
        intro: 'Each camera answers one question, and the arm only moves when they agree.',
        items: [
          { name: 'Overhead · 13 m above the cell', method: 'grayscale · blur · threshold or filled Canny · contours per lane · minAreaRect · pixel ray → product plane', result: 'Where is each product, and when will it reach the arm? The arm itself is masked out of the image using TF.' },
          { name: 'Side · at belt height', method: 'MOG2 background subtraction · Canny · contours on the belt', result: 'Is it really standing on the belt, and how tall is it? Must match the overhead track within 0.20 m.' },
          { name: 'Release · above the drop zone', method: 'difference from a learned empty belt · threshold · contours', result: 'Is the drop zone on bent 2 free? Bent 2 stops during the release.' },
        ],
      },
      {
        title: 'The pick cycle',
        unit: 'steps',
        intro: 'One closed loop from detection to placement, run by vision_pick_place and the endpoint attacher.',
        steps: [
          { name: 'Home and predict', text: 'The arm waits at home while the overhead tracker predicts when a product will reach the catch station.' },
          { name: 'Cross-check and hold', text: 'The side camera must see the same product standing on the belt; bent 1 then stops and the product is pinned so the gripper cannot push it.' },
          { name: 'Descend and attach', text: 'Fast to 10 cm above the measured product top, then slowly, with forward kinematics checked every step. The grip happens only when the tip is within 1.5 cm.' },
          { name: 'Lift and swing', text: 'Lift 0.30–0.60 m depending on the movement style chosen from the product height, then one smooth swing to bent 2, the trash bin or the recycling bin.' },
          { name: 'Place or drop', text: 'Wait until the release camera reports the zone empty, place on bent 2 or drop over the bin centre with a simulated free fall, and return home.' },
        ],
      },
      {
        title: 'How the project evolved',
        unit: 'eras',
        intro: 'From a standalone detection script to a research platform, each step driven by what the previous one exposed.',
        steps: [
          { name: 'Simulation scaffold · Mar – Oct 2026', text: 'Worlds, cameras and the arm were built. Detection was a standalone script with no link to ROS coordinates, and the arm was moved by hand.' },
          { name: 'Closing the loop · Oct 29', text: 'In one evening the project went from detection only to a camera-driven arm: picking still objects, then catching moving ones, then the side-camera cross-check and stopping the bent while grasping.' },
          { name: 'Usability · Oct 30', text: 'The order GUI, product pictures, one-command start, speed control, factory decor, and bins as a second kind of destination.' },
          { name: 'Generalisation · Oct 31', text: 'The cell was rebuilt so any bent shape works: six cell worlds from one layout table, then a whole factory of 12 cells.' },
          { name: 'Research platform · Oct 31 – Nov 1', text: 'The fixed detector became a slot: plug in an OpenCV or YOLO detector, score it offline and test multi-arm routes. 100 realistic and user-supplied 3D products.' },
        ],
      },
      {
        title: 'Pipeline factory tests',
        unit: 'tests',
        intro: 'Products routed by vision through chains of arms in the 12-arm factory, each case scored PASS/FAIL per product.',
        items: [
          { name: 'one_hop_A1', method: 'S1 → C1', result: 'PASS (3/3) · 96 s' },
          { name: 'bins_at_A1', method: 'A1 into trash, recycling and C1', result: 'PASS (3/3) · 84 s' },
          { name: 'two_hops_to_S3', method: 'S1 → C1 → S3', result: 'PASS (2/2) · 119 s' },
          { name: 'chain_to_large_dock', method: 'S1 → C1 → S3 → C3 → S7 → dock 3', result: 'PASS (2/2) · 244 s' },
          { name: 'bins_along_the_chain', method: 'A3 recycles pizza boxes, A5 trashes coffee cans', result: 'PASS · 299 s' },
          { name: 'longest_route_to_S9', method: 'S1 → C1 → S3 → C3 → S6 → C4 → S9 → dock 5', result: 'PASS · 307 s' },
        ],
      },
    ],
    tech: ['ROS 2 Jazzy', 'Gazebo Harmonic', 'OpenCV', 'Python', 'PyQt5', 'URDF / IK', 'YOLO'],
    links: [
      { label: 'Project website', href: 'https://huseyintozluyurt.github.io/Factory-Bent-Simulation-with-BCR-Robot-Arm/' },
      { label: 'Repository', href: 'https://github.com/huseyinTozluyurt/Factory-Bent-Simulation-with-BCR-Robot-Arm' },
    ],
    // Shown in full, in build order, as a numbered story.
    photoStory: true,
    photos: [
      { file: 'factory-bent-conveyor-v1', caption: 'March 2026: the first straight conveyor' },
      { file: 'factory-bent-pipeline-factory', caption: 'Scaled up: 13 conveyors and 12 arms' },
      { file: 'factory-bent-products', caption: '100 realistic product types' },
      { file: 'factory-bent-detection-1', caption: 'Early ROI detection and counting' },
      { file: 'factory-bent-dual-ring-detections', fit: 'contain', caption: 'Overhead OpenCV detections on both circular bents' },
      { file: 'factory-bent-ring-tracking', fit: 'contain', caption: 'ROI tracking as the arm catches a product' },
      { file: 'factory-bent-belt-detections', fit: 'contain', caption: 'Detections on a straight bent at the pick station' },
      { file: 'factory-bent-side-camera-pick', fit: 'contain', caption: 'Side camera at the pick station, with Canny edges' },
      { file: 'factory-bent-side-camera', caption: 'Side-camera cross-check at the catch station' },
      { file: 'factory-bent-vision-lab', fit: 'contain', caption: 'Vision lab: offline detector comparison' },
      { file: 'factory-bent-arm-gui', caption: 'Joint-space arm control GUI' },
      { file: 'factory-bent-sorting-bins', caption: 'Sorting into trash and recycling bins' },
    ],
  },
  {
    id: 'neural-bridge',
    org: 'Neural Bridge',
    role: 'Computer Vision Intern',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    summary:
      'Built an end-to-end logo detection system: a custom-trained 32-class YOLOv7 model that finds brand logos in images and video, wrapped in a pipeline that tracks them across frames and can segment, mirror-correct and re-composite reflected logos. The internship started with robot perception: a modular ROS2 camera pipeline, before moving to this project.',
    bullets: [
      'Trained a 32-class YOLOv7 detector on FlickrLogos-32 with leakage-aware train/val/test splits and dataset audits. On 224 held-out test images it found 300 of 323 logos.',
      'Added video tracking (Hungarian matching on CLIP appearance and motion, Kalman prediction) and a correction pipeline using MobileSAM / GrabCut segmentation, homography-aware flipping and inpainting.',
      'Prototyped open-set detection: a generic logo detector proposes regions and CLIP matching labels them as a known brand or "unknown", so brands outside the training set can still be found.',
      'Shipped a PyQt5 desktop app for batch image and video detection with adjustable confidence, IoU and image size.',
      'Robot perception: built a topic-based ROS2 Jazzy perception stack for a USB camera, with separate nodes for capture, image processing, bounding-box visualization and green object detection. Each stage publishes its own topic (raw, processed, debug, mask, detected), so stages can be swapped or inspected independently in rqt.',
    ],
    metrics: [
      { value: '94.75%', label: 'mAP@0.5' },
      { value: '82.04%', label: 'mAP@0.5:0.95' },
      { value: '85.71%', label: 'Precision' },
      { value: '92.88%', label: 'Recall' },
    ],
    tech: ['Python', 'PyTorch', 'YOLOv7', 'OpenCV', 'MobileSAM', 'CLIP', 'PyQt5', 'ROS2 Jazzy', 'cv_bridge'],
    links: [
      { label: 'Logo detection repository', href: 'https://github.com/huseyinTozluyurt/Neural-Bridge-Internship-Logo-Detection' },
      { label: 'ROS2 perception repository', href: 'https://github.com/huseyinTozluyurt/ROS2-Perception-Project' },
    ],
    photos: [
      { file: 'neuralbridge-confusion', fit: 'contain', caption: '32-class confusion matrix' },
      { file: 'neuralbridge-f1-curve', fit: 'contain', caption: 'F1 curve, best 0.93 at confidence 0.774' },
      { file: 'neuralbridge-pr-curve', fit: 'contain', caption: 'Precision–recall curve, 0.948 mAP@0.5' },
      { file: 'neuralbridge-training', fit: 'contain', caption: 'Training loss and mAP over 100 epochs' },
      { file: 'neuralbridge-ros2-graph', fit: 'contain', caption: 'Robot perception: ROS2 camera pipeline node graph' },
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
    id: 'tumer',
    org: 'TUMER Engineering',
    role: 'Embedded Software Development Intern',
    period: '2025',
    type: 'Internship',
    summary:
      'Embedded software and IoT application development: bare-metal STM32 firmware that reads sensors and drives a local display, and a React + Vite web application that shows the microcontroller\'s sensor data to the user.',
    bullets: [
      'Built an environmental telemetry node on an STM32F103C8T6, with a custom one-wire driver that reads a DHT11 temperature sensor using microsecond hardware timing (TIM1 at 1 MHz).',
      'Drove a 128×64 SSD1306 OLED over I2C at 400 kHz as a local Human-Machine Interface, with hardware-debounced GPIO interrupts for changing the setpoint.',
      'Developed an IoT application that streams the microcontroller\'s sensor readings to a React + Vite web interface for live display.',
      'Interfaced HC-SR04 ultrasonic distance sensors with the STM32: a single-sensor proximity node with an LED warning, and a four-sensor (front, left, right, back) node for a mobile robot that streams every distance over UART.',
    ],
    deepDive: [
      {
        title: 'HC-SR04 distance sensing on the STM32',
        open: true,
        unit: 'steps',
        intro:
          'The HC-SR04 measures distance with sound: it sends an ultrasonic burst and holds its ECHO pin high for as long as the echo takes to come back. The STM32 firmware (STM32 HAL, STM32F103C8T6) times that pulse in microseconds and turns it into centimetres.',
        steps: [
          { name: 'Trigger the burst', text: 'The MCU drives TRIG high for 10 µs. TIM2 runs as a 1 µs counter (prescaler 7 on the 8 MHz internal clock) and gives the exact microsecond delay.' },
          { name: 'Time the echo', text: 'The firmware waits for ECHO to go high, resets TIM2 to 0 and counts the microseconds until ECHO falls again. That count is the round-trip time of the sound.' },
          { name: 'Never hang', text: 'Both waits have a 30 ms timeout using HAL_GetTick(). A missing echo or a disconnected sensor returns an error code (999) instead of freezing the MCU.' },
          { name: 'Convert to distance', text: 'distance_cm = pulse_µs / 58. Sound needs about 58 µs to travel one centimetre out and back.' },
          { name: 'Single-sensor proximity node', text: 'ECHO on PA0, TRIG on PA1, LED on PB11. Under the 120 cm threshold the LED blinks fast (100 ms); on a sensor error it blinks slowly (700 ms); with a clear path it stays off.' },
          { name: 'Four-sensor robot node', text: 'Front, left, right and back sensors (TRIG on PB0, PB1, PB10, PB11; ECHO on PA0–PA3) are read in turn every 300 ms against a 20 cm threshold. Two LEDs show the state in binary (clear, front/back obstacle, left/right obstacle, trapped or error), and USART1 at 115200 baud sends each distance with an OK/ERR status to higher-level navigation.' },
        ],
        link: { label: 'HC-SR04 code on GitHub', href: 'https://github.com/huseyinTozluyurt/STM32-Projects-EmbeddedSystems' },
      },
    ],
    tech: ['STM32', 'Embedded C', 'STM32 HAL', 'I2C', 'Hardware Timers', 'HC-SR04', 'UART', 'OLED HMI', 'IoT', 'React + Vite'],
    links: [
      { label: 'STM32 projects repository', href: 'https://github.com/huseyinTozluyurt/STM32-Projects-EmbeddedSystems' },
    ],
    photos: [
      { file: 'thermistor_stm32', caption: 'STM32 telemetry node with I2C OLED display' },
      { file: 'tumer-hcsr04-single', caption: 'STM32 with one HC-SR04 and a warning LED' },
      { file: 'tumer-hcsr04-quad', caption: 'STM32 with four HC-SR04 sensors and status LEDs' },
      { file: 'tumer-iot-dashboard', caption: 'React + Vite sensor dashboard' },
    ],
  },
  {
    id: 'tutoring',
    org: 'Turkish Technology Team Foundation',
    role: 'Robotics & Embedded Systems Tutor',
    period: '2025',
    type: 'Teaching',
    summary:
      'Teaching robotics and embedded programming through hands-on builds, with an ESP32 Mars rover as the main teaching platform and an educational app platform developed to support the lessons.',
    bullets: [
      'Designed an ESP32 Mars rover as a teaching platform: the board hosts its own Wi-Fi server and drives DC motors through an L298N for differential steering.',
      'Built the rover’s web control panel in React (forward, reverse, turning and an emergency stop) so students can drive it from any browser.',
      'Used the rover build to teach motor control, wiring and wireless communication step by step.',
      'Built Space Explorer, a kids learning platform for the lessons: a multiplayer, turn-based board game where players join a room, answer space-themed questions to move across the board and draw prize cards, with an admin panel for rooms and question sets (React + Vite, Spring Boot, MySQL).',
    ],
    tech: ['ESP32', 'Arduino C++', 'L298N', 'React', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'Teaching'],
    links: [
      { label: 'Mars rover repository', href: 'https://github.com/huseyinTozluyurt/MarsRoverProject-ESP32' },
      { label: 'Rover demo video', href: 'https://www.youtube.com/watch?v=0JyftJ-eNdY' },
      { label: 'Learning platform repository', href: 'https://github.com/huseyinTozluyurt/OnlineLearningPlatform' },
    ],
    photos: [
      { file: 'esp32_mars_rover', caption: 'ESP32 Mars rover' },
      { file: 'tutoring-class', caption: 'Teaching session' },
      { file: 'tutoring-app', caption: 'Space Explorer learning game board' },
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
          {src && <img src={src} alt={paper.imageAlt || `Screenshot of the paper: ${paper.title}`} loading="lazy" />}
          <span className="xp-paper__badge mono">{paper.badge || 'Open paper ↗'}</span>
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
          <a href={paper.href} target="_blank" rel="noreferrer" className="btn btn--primary">{paper.primaryLabel || 'Read the paper →'}</a>
          <a href={paper.siteHref} target="_blank" rel="noreferrer" className="btn btn--ghost">{paper.secondaryLabel || 'Explore the project site'}</a>
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
              {sec.items
                ? `${sec.items.length} ${sec.unit || 'studies'}`
                : `${sec.steps.length} ${sec.unit || 'stages'}`}
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
  const preview = item.photoStory ? item.photos.length : GALLERY_PREVIEW
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

          <div className={`xp-gallery ${item.photoStory ? 'xp-gallery--story' : ''}`}>
            {item.photos.slice(0, preview).map((p) => (
              <Photo key={p.file} {...p} />
            ))}
          </div>
          {item.photos.length > preview && (
            <details className="xp-more">
              <summary className="mono">
                Show {item.photos.length - preview} more images
              </summary>
              <div className="xp-gallery">
                {item.photos.slice(preview).map((p) => (
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
        <p className="eyebrow mono"><span className="eyebrow__num">03</span> Experience &amp; internships</p>
        <h2 className="section__title">Where I&apos;ve Worked</h2>
        <p className="section__lede">
          Industry internships, a robotics team role and teaching. Each entry links to the code or
          write-up behind it.
        </p>

        <ol className="xp-index" aria-label="Roles at a glance">
          {experience.map((item) => (
            <li key={item.id}>
              <a href={`#xp-${item.id}`}>
                <span className="xp-index__period">{item.period}</span>
                <span className="xp-index__org">{item.org}</span>
                <span className="xp-index__role">{item.role}</span>
              </a>
            </li>
          ))}
        </ol>

        <ol className="xp-list">
          {experience.map((item, i) => (
            <ExperienceItem item={item} i={i} key={item.id} />
          ))}
        </ol>
      </div>
    </section>
  )
}
