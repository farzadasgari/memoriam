import { about } from '../data/content'
import Reveal from './Reveal'
import Section from './Section'
import SourceTags from './SourceTags'

export default function About() {
    return (
        <Section id="about"
            eyebrow="01 • Her Story"
            title="From Tehran to frontier of geometry"
            intro="An account of her life and academic journey"
        >
            <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
                <div className='space-y-8 lg:col-span-7'>
                    {about.paragraphs.map((paragraph, index) => (
                        <Reveal
                            key={index} delay={index * 60}
                        >
                            <p className='text-lg leading-8 text-ink'>{paragraph.text}</p>
                            <SourceTags ids={paragraph.sources} className='mt-2' />
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    )
}