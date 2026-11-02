import { referenceGroups } from '../data/content'

const referenceById = Object.fromEntries(
  referenceGroups.flatMap((group) => group.items).map((item) => [item.id, item])
)

export default function SourceTags({ ids = [], className = '' }) {
  const items = ids.map((id) => referenceById[id]).filter(Boolean)
  if (items.length === 0) return null

  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted ${className}`}>
      <span className="font-semibold uppercase tracking-wider">Sources</span>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#ref-${item.id}`}
          aria-label={`Source: ${item.title}`}
          className="rounded px-1.5 py-0.5 text-accent underline decoration-line underline-offset-4 transition-colors hover:bg-accent-soft hover:decoration-accent"
        >
          {item.short}
        </a>
      ))}
    </p>
  )
}
