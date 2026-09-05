import { useEffect, useRef, useState } from 'react'

/**
 * BoundingBox — wraps any content in a detector-style annotation frame:
 * four corner brackets + a floating monospace label, echoing the
 * object-detection overlays (YOLO / OpenCV) this portfolio is about.
 *
 * label:      e.g. "ENGINEER"
 * confidence: e.g. 0.99  -> renders "conf 0.99"
 * accent:     "teal" | "yellow"
 * tag:        optional corner tag position, defaults "top-left"
 */
export default function BoundingBox({
  children,
  label,
  confidence,
  accent = 'teal',
  className = '',
  delay = 0,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`bbox bbox--${accent} ${visible ? 'bbox--visible' : ''} ${className}`}
    >
      <span className="bbox__corner bbox__corner--tl" aria-hidden="true" />
      <span className="bbox__corner bbox__corner--tr" aria-hidden="true" />
      <span className="bbox__corner bbox__corner--bl" aria-hidden="true" />
      <span className="bbox__corner bbox__corner--br" aria-hidden="true" />
      {label && (
        <span className="bbox__tag" aria-hidden="true">
          {label}
          {typeof confidence === 'number' && (
            <span className="bbox__conf"> · conf {confidence.toFixed(2)}</span>
          )}
        </span>
      )}
      <div className="bbox__content">{children}</div>
    </div>
  )
}
