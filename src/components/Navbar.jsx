import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, person } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sectionIds = navLinks.map((link) => link.id)

const linkBase =
  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-accent'

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-ink hover:text-accent"
        >
          {person.name}
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
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
            })}
          </ul>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {menuOpen ? (
              <FiX aria-hidden="true" size={20} />
            ) : (
              <FiMenu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => {
              const active = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={active ? 'true' : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent-soft hover:text-accent ${
                      active ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
