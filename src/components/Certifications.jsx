/*
 * ─── Certifications ───────────────────────────────────────────────────
 * Add one entry per certificate below. To show an image of a certificate,
 * save it as src/assets/images/certificates/<image>.jpg (or .png / .webp)
 * and set `image` to that file name without the extension.
 * The section hides itself while the list is empty.
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

export const certifications = [
  // {
  //   title: 'Certificate name',
  //   issuer: 'Issuing organization',
  //   date: 'Mon YYYY',
  //   area: 'Computer Vision',          // short skill tag
  //   credentialId: 'ABC123',           // optional
  //   href: 'https://verify-link',      // optional
  //   image: 'file-name-without-ext',   // optional
  // },
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
          <span>{c.date}</span>
          {c.href ? (
            <a href={c.href} target="_blank" rel="noreferrer" className="card__repo">
              Verify ↗
            </a>
          ) : (
            c.credentialId && <span title="Credential ID">ID {c.credentialId}</span>
          )}
        </div>
      </div>
    </li>
  )
}

export default function Certifications() {
  if (certifications.length === 0) return null
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <p className="eyebrow mono"><span className="eyebrow__num">04</span> Certifications</p>
        <h2 className="section__title">Certificates &amp; Courses</h2>
        <p className="section__lede">
          Courses and certificates behind the skills used in the work above.
        </p>
        <ul className="certs">
          {certifications.map((c) => (
            <CertCard c={c} key={`${c.issuer}-${c.title}`} />
          ))}
        </ul>
      </div>
    </section>
  )
}
