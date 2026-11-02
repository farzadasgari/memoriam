import { FiInfo } from 'react-icons/fi'
import { legacy, research } from '../data/content'
import Reveal from './Reveal'
import Section from './Section'
import SourceTags from './SourceTags'

function Formula({ formula }) {
  return (
    <figure className="mt-6 rounded-xl border border-line bg-paper p-5">
      <p
        role="img"
        aria-label={formula.label}
        className="font-serif text-2xl italic text-ink sm:text-3xl"
      >
        {formula.before}
        <sup className="text-[0.65em]">{formula.sup}</sup>
      </p>
      <figcaption className="mt-3 text-sm text-muted">{formula.caption}</figcaption>
    </figure>
  )
}

function Topic({ topic, index }) {
  return (
    <Reveal as="article" className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <p className="font-serif text-5xl font-semibold text-line" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </p>
        <p className="eyebrow mt-3">{topic.kicker}</p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          {topic.title}
        </h3>
      </div>

      <div className="lg:col-span-8">
        <div className="space-y-5 text-lg leading-8 text-ink">
          {topic.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {topic.formula && <Formula formula={topic.formula} />}

        <aside className="mt-6 flex gap-3 rounded-xl bg-accent-soft p-5">
          <FiInfo aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-[0.95rem] leading-relaxed text-ink">
            <strong className="font-semibold text-accent">
              Intuition (not a formal statement):{' '}
            </strong>
            {topic.intuition}
          </p>
        </aside>

        <SourceTags ids={topic.sources} className="mt-5" />
      </div>
    </Reveal>
  )
}

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="03 · Research & legacy"
      title="Geometry, moduli spaces and motion"
      intro={research.intro}
    >
      <div className="space-y-20 sm:space-y-24">
        {research.topics.map((topic, index) => (
          <Topic key={topic.id} topic={topic} index={index} />
        ))}
      </div>

      <div className="mt-24 border-t border-line pt-16 sm:mt-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Legacy</p>
          <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {legacy.title}
          </h3>
          <p className="mt-4 text-lg text-muted">{legacy.intro}</p>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {legacy.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 2) * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7">
                <h4 className="font-serif text-xl font-semibold text-ink">{item.title}</h4>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                <SourceTags ids={item.sources} className="mt-4" />
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <blockquote className="border-l-2 border-gold pl-5">
            <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-ink">
              {legacy.note.text}
            </p>
            <SourceTags ids={legacy.note.sources} className="mt-3" />
          </blockquote>
        </Reveal>
      </div>
    </Section>
  )
}
