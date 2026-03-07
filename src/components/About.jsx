import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Weight, Factory, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: '30+', label: 'Lat doświadczenia', sub: 'Od 1983 roku' },
    { value: '12,5', label: 'Ton maks. waga elementu', sub: 'Mg / sztuka' },
    { value: '5', label: 'Sektorów przemysłowych', sub: 'Górn. · Bud. · Mot. · Naft. · Lot.' },
];

const certCards = [
    {
        icon: <ShieldCheck size={22} />,
        title: 'Certyfikowana Jakość',
        desc: 'Norma PN EN ISO 3834-2 — wymagania jakościowe dotyczące spawania metali.',
    },
    {
        icon: <Weight size={22} />,
        title: 'Skala Produkcji',
        desc: 'Elementy od 1 kg do 12,5 Mg z gatunków stali S235N do S690Q.',
    },
    {
        icon: <Factory size={22} />,
        title: 'Profesjonalizm',
        desc: 'Do każdego zlecenia podchodzimy z odpowiednim przygotowaniem i analizą techniczną.',
    },
    {
        icon: <Award size={22} />,
        title: 'Tradycja Rodzinna',
        desc: 'Wielopokoleniowa firma — łączymy świeże podejście z wieloletnim doświadczeniem.',
    },
];

const About = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.about-heading',
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
        );

        gsap.fromTo('.about-stat',
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.about-stats', start: 'top 80%' },
            }
        );

        gsap.fromTo('.about-card',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: '.about-cards', start: 'top 75%' },
            }
        );
    }, { scope: sectionRef });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full py-28 px-6"
            style={{ background: 'var(--ks-black)' }}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="about-heading mb-16 max-w-3xl">
                    <div className="section-label mb-5">O Firmie</div>
                    <h2
                        className="leading-tight mb-6"
                        style={{
                            fontFamily: 'Oswald, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 700,
                            color: 'var(--ks-text)',
                        }}
                    >
                        Solidne konstrukcje<br />
                        z tradycjami od{' '}
                        <span style={{ color: 'var(--ks-orange)' }}>1983 roku</span>
                    </h2>
                    <p style={{ color: 'var(--ks-muted)', lineHeight: 1.8, maxWidth: '55ch' }}>
                        Od lat z powodzeniem łączymy doświadczenie i tradycję z nowoczesnymi
                        technologiami, uzyskując doskonałe rezultaty w postaci zadowolonych klientów.
                        Posiadamy doświadczone ekipy spawalnicze stale doskonalące swoje umiejętności.
                        Dzięki dokładnej analizie projektów wykonujemy bardzo skomplikowane zlecenia,
                        przekraczające możliwości wielu mniejszych zakładów.
                    </p>
                </div>

                <div className="about-stats grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {stats.map((s, i) => (
                        <div key={i} className="about-stat bento-card flex flex-col">
                            <span
                                style={{
                                    fontFamily: 'Bebas Neue, sans-serif',
                                    fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                                    color: 'var(--ks-orange)',
                                    lineHeight: 1,
                                }}
                            >
                                {s.value}
                            </span>
                            <span
                                className="mt-2 font-semibold text-base tracking-wide"
                                style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                            >
                                {s.label}
                            </span>
                            <span className="mt-1 text-xs" style={{ color: 'var(--ks-muted)' }}>
                                {s.sub}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="about-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certCards.map((card, i) => (
                        <div key={i} className="about-card bento-card group">
                            <div
                                className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                    background: 'var(--ks-surface2)',
                                    color: 'var(--ks-orange)',
                                    border: '1px solid var(--ks-border)',
                                }}
                            >
                                {card.icon}
                            </div>
                            <h4
                                className="mb-2 font-semibold text-base"
                                style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                            >
                                {card.title}
                            </h4>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
