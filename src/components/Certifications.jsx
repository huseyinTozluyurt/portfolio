import { useState } from 'react'

/*
 * ─── Certifications ───────────────────────────────────────────────────
 * Add one entry per certificate below. To show an image of a certificate,
 * save it as src/assets/images/certificates/<image>.jpg (or .png / .webp)
 * and set `image` to that file name without the extension.
 * `group` must be one of the ids in `groups`. The section hides itself
 * while the list is empty.
 *
 * The list is ordered by how much each certificate counts with employers
 * hiring for robotics, AI/ML and embedded roles, most valuable first.
 * The "All" view and every filter keep this order, so the first cards a
 * visitor sees are always the strongest ones. Add new entries in the tier
 * where they belong rather than at the end.
 */
const imageModules = import.meta.glob('../assets/images/certificates/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split('/').pop().replace(/\.(jpe?g|png|webp)$/i, ''),
    url,
  ])
)

export const groups = [
  { id: 'robotics', label: 'Robotics & autonomy' },
  { id: 'ml', label: 'AI & machine learning' },
  { id: 'embedded', label: 'Embedded & networking' },
  { id: 'claude', label: 'Claude & AI fluency' },
  { id: 'programmes', label: 'Programmes & events' },
]

const ANTHROPIC = 'Anthropic Academy'

export const certifications = [
  // ── Tier 1: real work and flagship university / industry courses ──
  {
    group: 'ml', area: 'Internship · Machine learning',
    title: 'Machine Learning Internship Program',
    issuer: 'FlyRank AI', date: 'Oct 2026',
    credentialId: 'FR-D11-B9F0E-5FBD5',
    href: 'https://internship.flyrank.ai/verify',
    image: 'flyrank-machine-learning',
  },
  {
    group: 'robotics', area: 'Autonomous systems',
    title: 'AI for Autonomous Vehicles and Robotics',
    issuer: 'University of Michigan · Coursera', date: 'Feb 2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/GOBY3F1LNSEO',
    image: 'michigan-ai-autonomous-vehicles',
  },
  {
    group: 'ml', area: 'Machine learning',
    title: 'Machine Learning with Python',
    issuer: 'IBM · Coursera', date: 'Sep 2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/NQ5AAL3AVAD9',
    image: 'ibm-ml-python',
  },
  {
    group: 'robotics', area: 'Autonomous driving',
    title: 'Introduction to Self-Driving Cars',
    issuer: 'University of Toronto · Coursera', date: 'Nov 2025',
    href: 'https://www.coursera.org/account/accomplishments/verify/34Q7OAO1C721',
    image: 'toronto-self-driving-cars',
  },

  // ── Tier 2: core robotics, ML and embedded stack ──
  {
    group: 'robotics', area: 'ROS 2 · Navigation',
    title: 'ROS 2 Nav2 [Navigation 2 Stack] with SLAM and Navigation',
    issuer: 'Udemy · Edouard Renard', date: 'Sep 2026',
    href: 'https://www.udemy.com/certificate/UC-a85d5fa3-f76e-4a65-8860-e8778d5de0de/',
    image: 'udemy-ros2-nav2',
  },
  {
    group: 'ml', area: 'Big data',
    title: 'Machine Learning With Big Data',
    issuer: 'UC San Diego · Coursera', date: 'Dec 2025',
    href: 'https://www.coursera.org/account/accomplishments/verify/ZU1S0BTNPVQW',
    image: 'ucsd-ml-big-data',
  },
  {
    group: 'embedded', area: 'Embedded systems',
    title: 'ARM Cortex (STM32) Deep Dive: Mastering Embedded Systems',
    issuer: 'EDUCBA · Coursera', date: 'Oct 2025',
    href: 'https://www.coursera.org/account/accomplishments/verify/K6IM4PJLWCCV',
    image: 'educba-arm-cortex-stm32',
  },
  {
    group: 'robotics', area: 'Robotics',
    title: 'Basics of Robotics',
    issuer: 'Siemens · Coursera', date: 'May 2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/VMYDBQMGTQ3F',
    image: 'siemens-basics-of-robotics',
  },
  {
    group: 'embedded', area: 'Networking',
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy', date: 'Jul 2024',
    image: 'cisco-ccna-intro-networks',
  },
  {
    group: 'ml', area: 'Computer vision',
    title: 'Python for Computer Vision with OpenCV and Deep Learning',
    issuer: 'Udemy · Jose Portilla', date: 'May 2026',
    href: 'https://www.udemy.com/certificate/UC-870185d5-7be4-4f47-ac01-341257cb8eca/',
    image: 'udemy-python-cv-opencv-dl',
  },
  {
    group: 'robotics', area: 'ROS 2',
    title: 'ROS 2 for Beginners (ROS Jazzy)',
    issuer: 'Udemy · Edouard Renard', date: 'Sep 2026',
    href: 'https://www.udemy.com/certificate/UC-60788114-b12a-42d4-8291-d35f31be7472/',
    image: 'udemy-ros2-beginners',
  },

  // ── Tier 3: applied AI engineering (agents, MCP, Claude tooling) ──
  {
    group: 'ml', area: 'Internship · AI fluency',
    title: 'AI Fluency Internship Program',
    issuer: 'FlyRank AI', date: 'Nov 2026',
    credentialId: 'FR-D11-47DE4-79F3D',
    href: 'https://internship.flyrank.ai/verify',
    image: 'flyrank-ai-fluency',
  },
  { group: 'claude', area: 'Claude Code', title: 'Claude Code in Action', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/c3zfbib8cgh3', image: 'anthropic-claude-code-in-action' },
  { group: 'claude', area: 'Claude Code', title: 'Claude Code 101', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/h6qe6j57beox', image: 'anthropic-claude-code-101' },
  { group: 'claude', area: 'MCP', title: 'Model Context Protocol: Advanced Topics', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/viupdxtr6b3x', image: 'anthropic-mcp-advanced' },
  { group: 'claude', area: 'MCP', title: 'Introduction to Model Context Protocol', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/boixsopg38wv', image: 'anthropic-intro-mcp' },
  { group: 'claude', area: 'Agents', title: 'Introduction to Agent Skills', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/achqxedoh7qb', image: 'anthropic-agent-skills' },
  { group: 'claude', area: 'Agents', title: 'Introduction to Subagents', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/zxewv7b5mgvm', image: 'anthropic-subagents' },
  { group: 'claude', area: 'Claude API', title: 'Claude Platform 101', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/cjg2q6cjahzo', image: 'anthropic-claude-platform-101' },

  // ── Tier 4: foundations and short courses ──
  {
    group: 'embedded', area: 'C++',
    title: 'Introduction to Object-Oriented Programming in C++',
    issuer: 'University of London · Coursera', date: 'Oct 2025',
    href: 'https://www.coursera.org/account/accomplishments/verify/DUK1CNWHYZ6C',
    image: 'london-oop-cpp',
  },
  {
    group: 'ml', area: 'AI fundamentals',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy', date: 'Jul 2025',
    href: 'https://www.credly.com/badges/d13f26f5-9244-4217-9d4f-6601962b7dd7/linked_in_profile',
    image: 'cisco-intro-modern-ai',
  },
  {
    group: 'robotics', area: 'UAV · 20 hours',
    title: 'Unmanned Aerial Vehicle Training (İnsansız Hava Aracı Eğitimi)',
    issuer: 'T3 Foundation · Türkiye Teknoloji Takımı', date: 'Aug 2026',
    image: 't3-uav-training',
  },
  {
    group: 'embedded', area: 'Networking',
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy', date: 'Jun 2025',
    href: 'https://www.credly.com/badges/0bf4580c-d0e3-4a92-b824-803b5267cb9d/linked_in_profile',
    image: 'cisco-packet-tracer',
  },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency: Framework & Foundations', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/h5do5ethfvo6', image: 'anthropic-ai-fluency-framework' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency: AI Capabilities & Limitations', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/nr9gmqusukge', image: 'anthropic-ai-capabilities-limitations' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency for Builders', issuer: 'Anthropic Academy · CodePath',
    href: 'https://verify.skilljar.com/c/bz8jyv84rztm', image: 'anthropic-ai-fluency-builders' },
  { group: 'claude', area: 'Claude', title: 'Claude 101', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/byprkwy4mpj2', image: 'anthropic-claude-101' },
  { group: 'claude', area: 'Claude', title: 'Introduction to Claude Cowork', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/rxninww9suzr', image: 'anthropic-claude-cowork' },

  // ── Tier 5: audience-specific AI fluency and events ──
  { group: 'claude', area: 'AI fluency', title: 'Teaching the AI Fluency Framework', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/fwi3euyayab6', image: 'anthropic-teaching-ai-fluency' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency for Educators', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/czaryh8irsiz', image: 'anthropic-ai-fluency-educators' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency for Students', issuer: ANTHROPIC,
    href: 'https://verify.skilljar.com/c/yzvnzuqko6pj', image: 'anthropic-ai-fluency-students' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency for Nonprofits', issuer: 'Anthropic Academy · GivingTuesday',
    href: 'https://verify.skilljar.com/c/gfyhb88qq6st', image: 'anthropic-ai-fluency-nonprofits' },
  { group: 'claude', area: 'AI fluency', title: 'AI Fluency for Small Businesses', issuer: 'Anthropic Academy · PayPal',
    href: 'https://verify.skilljar.com/c/rz4mpna22rd8', image: 'anthropic-ai-fluency-small-businesses' },
  {
    group: 'programmes', area: 'Career programme',
    title: 'Career & Competency Meetings 2 (Kariyer ve Yetkinlik Buluşmaları)',
    issuer: 'Defence Industry Academy · SSB', date: 'May 2025',
    image: 'ssb-kariyer-yetkinlik',
  },
]

// "Kadir Has University" -> "KH": seal shown when a certificate has no image.
function initials(name) {
  const words = name.split(/\s+/).filter((w) => /^[A-Z0-9]/.test(w))
  const pick = words.length >= 2 ? words[0][0] + words[1][0] : name.slice(0, 2)
  return pick.toUpperCase()
}

function CertCard({ c }) {
  const src = c.image && images[c.image]
  return (
    <li className="cert">
      {src ? (
        <a className="cert__media" href={src} target="_blank" rel="noreferrer" title="Open full size">
          <img src={src} alt={`${c.title} certificate`} loading="lazy" />
        </a>
      ) : (
        <div className="cert__media cert__media--seal" aria-hidden="true">
          <span>{initials(c.issuer)}</span>
        </div>
      )}
      <div className="cert__body">
        {c.area && <p className="cert__area mono">{c.area}</p>}
        <h3 className="cert__title">{c.title}</h3>
        <p className="cert__issuer">{c.issuer}</p>
        <div className="cert__foot mono">
          <span>
            {c.date}
            {c.date && c.credentialId && ' · '}
            {c.credentialId && <span title="Credential ID">ID {c.credentialId}</span>}
          </span>
          {c.href && (
            <a href={c.href} target="_blank" rel="noreferrer" className="card__repo">
              Verify ↗
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

const PREVIEW = 6

export default function Certifications() {
  const [active, setActive] = useState('all')
  const [expanded, setExpanded] = useState(false)
  if (certifications.length === 0) return null

  const tabs = [{ id: 'all', label: 'All' }, ...groups]
    .map((g) => ({
      ...g,
      count: g.id === 'all'
        ? certifications.length
        : certifications.filter((c) => c.group === g.id).length,
    }))
    .filter((g) => g.count > 0)

  const list = active === 'all' ? certifications : certifications.filter((c) => c.group === active)
  const visible = expanded ? list : list.slice(0, PREVIEW)
  const hidden = list.length - visible.length

  const select = (id) => {
    setActive(id)
    setExpanded(false)
  }

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <p className="eyebrow mono"><span className="eyebrow__num">04</span> Certifications</p>
        <h2 className="section__title">Certificates &amp; Courses</h2>
        <p className="section__lede">
          Courses and certificates behind the skills used in the work above, from ROS 2 navigation
          and autonomous driving to embedded systems, machine learning and building with Claude.
        </p>

        <div className="cert-filter" role="group" aria-label="Filter certificates">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className="cert-filter__btn mono"
              aria-pressed={active === t.id}
              onClick={() => select(t.id)}
            >
              {t.label}
              <span className="cert-filter__count">{t.count}</span>
            </button>
          ))}
        </div>

        <ul className="certs">
          {visible.map((c) => (
            <CertCard c={c} key={`${c.issuer}-${c.title}`} />
          ))}
        </ul>

        {list.length > PREVIEW && (
          <div className="cert-more">
            <button type="button" className="btn btn--ghost" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Show fewer' : `Show all ${list.length} certificates (+${hidden})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
