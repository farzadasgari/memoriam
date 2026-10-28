import Section from "./components/Section";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="m-4 rounded-full border border-line bg-surface px-5 py-2 text-ink"
      >
        toggle theme
      </button>
      <Section
        id="demo"
        eyebrow="Demo"
        title="Memoriam Section"
        intro="This is the shared Section Layout."
      >
        <p className="text-muted">Content goes here.</p>
      </Section>
    </>
  );
}
