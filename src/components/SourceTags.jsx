import { referenceGroups } from "../data/content"

const referenceById = Object.fromEntries(
    referenceGroups.flatMap((group) => group.items).map((item) => [item.id, item]),
)

export default function SourceTags({ ids = [], className = '' }) {
    const items = ids.map((id) => referenceById[id]).filter(Boolean)
    if (items.length === 0) return null
}