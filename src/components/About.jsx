const skillGroups = [
  {
    label: 'Vision & AI',
    items: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch', 'scikit-learn'],
  },
  {
    label: 'Robotics & OS',
    items: ['ROS2', 'Gazebo', 'Ubuntu Linux', 'Network Security'],
  },
  {
    label: 'Embedded & Core',
    items: ['C++', 'Python', 'STM32', 'ESP32', 'Arduino'],
  },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="eyebrow mono">// who&apos;s behind the camera</p>
          <h2 className="section__title">Bridging Hardware and Intelligence</h2>
          <p className="about__body">
            My engineering journey lives at the intersection where code meets the physical world. I design robust environments to solve complex problems, seamlessly moving from algorithmic C++ problem-solving to configuring secure, optimized Ubuntu Linux workspaces for deep learning. Whether it is tracking objects on a factory conveyor belt or building search intelligence models, my approach is rigorously validating data, optimizing core logic, and ensuring the system performs flawlessly in the real world.
          </p>
        </div>

        <div className="about__skills">
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