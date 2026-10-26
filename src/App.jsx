import { useTheme } from "./hooks/useTheme"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-8">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-line bg-surface px-5 py-2 text-ink"
      >
        theme: {theme}
      </button>
      <h1 className="mt-6 font-serif text-4xl text-accent">Memoriam</h1>
    </div>
  )
}
