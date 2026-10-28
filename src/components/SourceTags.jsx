import { referenceGroups } from "../data/content"

const referenceById = Object.fromEntries(
    referenceGroups.flatMap((group) => group.items).map((item) => [item.id, item]),
)

