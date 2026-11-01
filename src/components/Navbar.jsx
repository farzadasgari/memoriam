import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, person } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const sectionIds = navLinks.map((link) => link.id);

const linkBase =
  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-accent";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#top" className="font-serif text-lg font-semibold tracking-tight text-ink hover:text-accent">
                { person.name }
            </a>

            <div className="flex items-center gap-2">
              <ul className="hidden items-center gap-1 lg:flex">
                { navLinks.map((link) => {
                  const active = activeId === link.id
                  return (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        aria-current={active ? 'true' : undefined}
                        className={`${linkBase} ${active ? 'bg-accent-soft text-accent' : 'text-muted'}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })
                
                }
              </ul>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            </div>
        </nav>
    </header>
  )
}
