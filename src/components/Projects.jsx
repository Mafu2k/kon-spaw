import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Hala Magazynowa',
        category: 'Konstrukcje Stalowe',
        year: '2024',
        detail: 'Kompletna stalowa konstrukcja hali — fundamenty, słupy, dźwigar dachowy.',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)',
    },
    {
        title: 'Elementy Maszyn',
        category: 'Laser / Plazma',
        year: '2024',
        detail: 'Precyzyjna obróbka detali do linii produkcyjnej dla klienta z branży motoryzacyjnej.',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #0a1a1a 100%)',
    },
    {
        title: 'Przenośniki Taśmowe',
        category: 'Spawanie · Produkcja',
        year: '2023',
        detail: 'Spawane konstrukcje nośne przenośników dla kopalni węgla kamiennego.',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #1a1a0a 100%)',
    },
    {
        title: 'Zbiorniki Przemysłowe',
        category: 'Spawanie TIG',
        year: '2023',
        detail: 'Zbiorniki ze stali nierdzewnej dla przemysłu chemicznego. Certyfikacja UDT.',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a1a 100%)',
    },
];

const Projects = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.proj-header',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
        );

        const cards = gsap.utils.toArray('.proj-card');

        cards.forEach((card, i) => {
            if (i === 0) return;
            gsap.fromTo(card,
                { y: 80 + i * 20, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        cards.forEach((card, i) => {
            if (i >= cards.length - 1) return;
            gsap.to(card, {
                scale: 0.96 - i * 0.01,
                opacity: 0.7,
                scrollTrigger: {
                    trigger: cards[i + 1],
                    start: 'top 60%',
                    end: 'top 30%',
                    scrub: 1,
                },
            });
        });
    }, { scope: sectionRef });

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="w-full py-28 px-6"
            style={{ background: 'var(--ks-dark)' }}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="proj-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="section-label mb-4">Realizacje</div>
                        <h2
                            style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                                fontWeight: 700,
                                color: 'var(--ks-text)',
                                lineHeight: 1.1,
                            }}
                        >
                            Nasze Projekty
                        </h2>
                    </div>
                    <a href="#contact" className="btn-ghost self-start md:self-auto">
                        Zapytaj o realizację
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="flex flex-col gap-4">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="proj-card bento-card group relative overflow-hidden cursor-pointer"
                            style={{ background: p.bg, minHeight: '220px', padding: '2.5rem' }}
                        >
                            <span
                                className="absolute top-4 right-6 pointer-events-none select-none"
                                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '6rem', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 justify-between h-full">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span
                                            className="text-xs tracking-widest uppercase"
                                            style={{ color: 'var(--ks-orange)', fontFamily: 'Oswald, sans-serif' }}
                                        >
                                            {p.category}
                                        </span>
                                        <span className="text-xs" style={{ color: 'var(--ks-muted)' }}>
                                            · {p.year}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-2xl md:text-3xl font-bold mb-3"
                                        style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                                    >
                                        {p.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--ks-muted)' }}>
                                        {p.detail}
                                    </p>
                                </div>

                                <div
                                    className="w-14 h-14 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500"
                                    style={{ borderColor: 'var(--ks-border2)', color: 'var(--ks-muted)' }}
                                >
                                    <ArrowUpRight size={20} className="transition-colors duration-300 group-hover:text-white" />
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                style={{ background: 'var(--ks-orange)' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
