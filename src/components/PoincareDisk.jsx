import { useMemo } from 'react'

function geodesicPath(a, b) {
  const r = Math.tan((b - a) / 2)
  const point = (t) => `${Math.cos(t).toFixed(4)} ${Math.sin(t).toFixed(4)}`
  return `M${point(a)}A${r.toFixed(4)} ${r.toFixed(4)} 0 0 0 ${point(b)}`
}

function buildPaths(corners, steps) {
  const paths = []
  steps.forEach((step, layer) => {
    for (let i = 0; i < corners; i += 1) {
      const a = (2 * Math.PI * i) / corners
      const b = a + (2 * Math.PI * step) / corners
      paths.push({ d: geodesicPath(a, b), layer })
    }
  })
  return paths
}

const LAYER_OPACITY = [0.9, 0.55, 0.38, 0.26]

export default function PoincareDisk({ className = '', spin = false }) {
  const paths = useMemo(() => buildPaths(14, [1, 2, 3, 4]), [])

  return (
    <svg
      viewBox="-1.04 -1.04 2.08 2.08"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <circle r="1" strokeWidth="1.4" vectorEffect="non-scaling-stroke" opacity="0.8" />
      <g className={spin ? 'disk-spin' : undefined}>
        {paths.map((p, index) => (
          <path
            key={index}
            d={p.d}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity={LAYER_OPACITY[p.layer]}
          />
        ))}
      </g>
    </svg>
  )
}
