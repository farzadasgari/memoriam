import { FiArrowUp, FiExternalLink } from 'react-icons/fi'
import { memorial, person, referenceGroups } from '../data/content'
import PoincareDisk from './PoincareDisk'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="remembrance" aria-labelledby="remembrance-title" className="relative isolate overflow-hidden border-t border-line bg-surface/60">
      <PoincareDisk className="pointer-events-none absolute -bottom-40 -left-32 -z-10 w-[34rem] text-accent opacity-[0.12]" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{memorial.heading}</p>
          <h2 id="remembrance-title" className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {person.name}
          </h2>
          <p className="mt-2 text-muted">
            {person.born} – {person.died}
          </p>
          <div className="mt-8 space-y-4 font-serif text-xl italic leading-relaxed text-ink">
            {memorial.message.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <h3 className="font-serif text-2xl font-semibold text-ink">References and further reading</h3>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {referenceGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold">{group.title}</h4>
                <ul className="mt-4 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.id} id={`ref-${item.id}`} className="text-sm leading-relaxed">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 font-medium text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        <span>{item.title}</span>
                        <FiExternalLink aria-hidden="true" size={14} className="mt-1 shrink-0" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      <p className="mt-1 text-muted">{item.by}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl space-y-3 text-xs leading-relaxed text-muted">
            <p>{memorial.disclaimer}</p>
            <p>
              Built with React, Vite, Tailwind CSS and React Icons. Content is original text written for this
              page; no external images or scripts are loaded.
            </p>
          </div>
          <a
            href="#top"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FiArrowUp aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
