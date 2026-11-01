import { FiAward, FiBookmark, FiHexagon, FiLink, FiRepeat, FiStar } from 'react-icons/fi'
import { achievements } from '../data/content'
import Reveal from './Reveal'
import Section from './Section'
import SourceTags from './SourceTags'

const icons = {
  award: FiAward,
  bookmark: FiBookmark,
  hexagon: FiHexagon,
  link: FiLink,
  repeat: FiRepeat,
  star: FiStar,
}

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="02 · Achievements"
      title="Milestones of a short, luminous career"
      intro="Honours matter less than the ideas behind them, so each card pairs the recognition with what she actually proved."
      tinted
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = icons[item.icon]
          return (
            <Reveal as="li" key={item.title} delay={(index % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                    {Icon && <Icon aria-hidden="true" size={20} />}
                  </span>
                  <span className="font-serif text-lg font-semibold text-gold">{item.year}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                <SourceTags ids={item.sources} className="mt-5 border-t border-line pt-4" />
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
