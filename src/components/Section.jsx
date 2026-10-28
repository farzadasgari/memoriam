import Reveal from "./Reveal"

export default function Section({ id, eyebrow, title, intro, tinted=false, children }){
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className={`py-20 sm:py-28 ${tinted ? 'border-y border-line bg-surface/60' : ''}`}
        >
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                <Reveal className="max-w-3xl">
                    <p className="eyebrow">{eyebrow}</p>
                    <h2
                        id={`${id}-title`}
                        className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl"
                    >
                        {title}
                    </h2>
                    {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
                </Reveal>
                <div className="mt-12 sm:mt-16">{children}</div>
            </div>
        </section>
    )
}