const skillGroups = [
  {
    label: 'Vision & AI',
    items: ['OpenCV', 'YOLO', 'PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'DuckDB'],
  },
  {
    label: 'Robotics & OS',
    items: ['ROS2', 'Gazebo', 'URDF / SDF', 'Ubuntu Linux', 'Network Security'],
  },
  {
    label: 'Embedded & Core',
    items: ['C++', 'Python', 'STM32', 'ESP32', 'Arduino'],
  },
  {
    label: 'Software & Tools',
    items: ['React', 'Spring Boot', 'PyQt5', 'Git', 'Jupyter'],
  },
]

const focus = [
  { k: 'SEE', v: 'Detection, tracking and marker-based localization with OpenCV and YOLO.' },
  { k: 'DECIDE', v: 'SLAM, path planning and ML models validated on held-out data.' },
  { k: 'MOVE', v: 'ROS 2 control, STM32 / ESP32 firmware, motors and sensors.' },
]

const portrait = `${import.meta.env.BASE_URL}huseyin.png`

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="eyebrow mono"><span className="eyebrow__num">02</span> About</p>
          <h2 className="section__title">Bridging Hardware and Intelligence</h2>

          <div className="about__lead">
            <figure className="about__portrait">
              <img src={portrait} alt="Edge-detected portrait of Huseyin Tozluyurt" loading="lazy" />
              <figcaption>cv2.Canny()</figcaption>
            </figure>
            <p>Computer engineer working where code meets the physical world.</p>
          </div>

          <p className="about__body">
            My engineering journey lives at the intersection where code meets the physical world. I design robust environments to solve complex problems, seamlessly moving from algorithmic C++ problem-solving to configuring secure, optimized Ubuntu Linux workspaces for deep learning. Whether it is tracking parts on a factory conveyor, ranking pages for a search-intelligence team, or teaching students to wire their first rover, my approach is rigorously validating data, optimizing core logic, and ensuring the system performs flawlessly in the real world.
          </p>

          <div className="about__focus">
            {focus.map((f) => (
              <div className="focus" key={f.k}>
                <span className="focus__k">{f.k}</span>
                <p className="focus__v">{f.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__skills" aria-label="Skills">
          {skillGroups.map((g) => (
            <div className="skillgroup" key={g.label}>
              <p className="skillgroup__label mono">{g.label}</p>
              <div className="skillgroup__tags">
                {g.items.map((item) => (
                  <span className="tag mono" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
