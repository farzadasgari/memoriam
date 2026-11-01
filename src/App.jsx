import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
      </main>
    </>
  );
}
