import { timeline } from '../data/content'
import Reveal from './Reveal'
import Section from './Section'
import SourceTags from './SourceTags'

export default function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="04 · Timeline"
      title="A life in milestones"
      intro="Key moments from 1977 to the initiatives created in her memory."
      tinted
    >
      <ol className="relative mx-auto max-w-3xl border-l border-line pl-8 sm:pl-10">
        {timeline.map((event) => (
          <Reveal as="li" key={`${event.year}-${event.title}`} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute left-[-2.45rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper sm:left-[-3.2rem] sm:h-4 sm:w-4"
            />
            <p className="font-serif text-2xl font-semibold text-gold">{event.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{event.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{event.text}</p>
            <SourceTags ids={event.sources} className="mt-3" />
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
