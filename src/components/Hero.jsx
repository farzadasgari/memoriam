import { FiArrowDown } from "react-icons/fi";
import { person, hero } from "../data/content";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
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
                </div>
            </div>
        </section>
    )
}