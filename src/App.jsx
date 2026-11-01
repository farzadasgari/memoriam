import About from "./components/About";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Timeline from "./components/Timeline";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Achievements />
        <Research />
        <Timeline />
      </main>
    </>
  );
}
