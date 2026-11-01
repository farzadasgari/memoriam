import { about } from '../data/content'
import Reveal from './Reveal'
import Section from './Section'
import SourceTags from './SourceTags'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Her story"
      title="From Tehran to the frontier of geometry"
      intro="A concise account of her life and academic journey, drawn from published biographies and obituaries."
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-7">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 60}>
              <p className="text-lg leading-8 text-ink">{paragraph.text}</p>
              <SourceTags ids={paragraph.sources} className="mt-2" />
            </Reveal>
          ))}
        </div>

        <div className="space-y-10 lg:col-span-5">
          <Reveal>
            <h3 className="font-serif text-xl font-semibold text-ink">Academic journey</h3>
            <ol className="mt-5 space-y-5 border-l border-line pl-6">
              {about.journey.map((step) => (
                <li key={step.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute left-[-1.78rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{step.when}</p>
                  <p className="mt-1 font-medium text-ink">{step.title}</p>
                  <p className="text-sm text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-serif text-xl font-semibold text-ink">At a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[8.5rem_1fr] gap-3">
                    <dt className="font-medium text-muted">{fact.label}</dt>
                    <dd className="text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <SourceTags ids={about.factsSources} className="mt-4" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
