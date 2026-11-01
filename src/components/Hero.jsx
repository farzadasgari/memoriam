import { FiArrowDown } from 'react-icons/fi'
import { hero, person } from '../data/content'
import PoincareDisk from './PoincareDisk'
import Portrait from './Portrait'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <PoincareDisk
        spin
        className="pointer-events-none absolute -right-40 -top-32 -z-10 w-[44rem] text-accent opacity-[0.16] sm:-right-24 lg:right-[-8rem] lg:w-[56rem]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              {person.name}
            </h1>
            <p lang="fa" dir="rtl" className="mt-3 w-fit text-2xl text-gold sm:text-3xl">
              {person.persianName}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-muted">{hero.role}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">{hero.lead}</p>
          </Reveal>

          <Reveal delay={240}>
            <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-5 font-serif text-lg italic leading-relaxed text-muted">
              {hero.tribute}
            </blockquote>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Explore her life
              <FiArrowDown aria-hidden="true" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Her mathematics
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <Portrait />
        </Reveal>
      </div>
    </section>
  )
}
