import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const badgesRef = useRef(null);
    const scrollRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            tl.fromTo(gridRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2, ease: 'power2.out' }
            )
                .fromTo(titleRef.current,
                    { y: 80, opacity: 0, skewY: 3 },
                    { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'expo.out' },
                    '-=1.5'
                )
                .fromTo(subRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo(badgesRef.current.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out' },
                    '-=0.4'
                )
                .fromTo(scrollRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6 },
                    '-=0.2'
                );

            const handleMouse = ({ clientX, clientY }) => {
                gsap.to(gridRef.current, {
                    x: (clientX / window.innerWidth - 0.5) * 20,
                    y: (clientY / window.innerHeight - 0.5) * 10,
                    duration: 1.5,
                    ease: 'power1.out',
                });
            };

            window.addEventListener('mousemove', handleMouse);
            return () => window.removeEventListener('mousemove', handleMouse);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const badges = ['ISO 3834-2', 'od 1 kg do 12,5 Mg', '30+ lat doświadczenia', 'Polska i Europa'];

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--ks-black)' }}
        >
            <div
                ref={gridRef}
                className="absolute inset-0 pointer-events-none opacity-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,90,9,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,90,9,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,90,9,0.07) 0%, transparent 70%)' }}
            />

            <div className="absolute top-20 left-8 w-16 h-16 pointer-events-none" style={{ borderTop: '1px solid var(--ks-orange)', borderLeft: '1px solid var(--ks-orange)', opacity: 0.4 }} />
            <div className="absolute bottom-24 right-8 w-16 h-16 pointer-events-none" style={{ borderBottom: '1px solid var(--ks-orange)', borderRight: '1px solid var(--ks-orange)', opacity: 0.4 }} />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
                <div className="section-label mb-8">Śląsk · Polska · Europa</div>

                <h1
                    ref={titleRef}
                    className="relative select-none leading-none tracking-tight"
                    style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(5rem, 18vw, 18rem)',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(240,240,240,0.15)',
                        lineHeight: 0.88,
                    }}
                >
                    <span
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'var(--ks-text)', WebkitTextStroke: 'unset' }}
                        aria-hidden="true"
                    >
                        KON-<span style={{ color: 'var(--ks-orange)' }}>SPAW</span>
                    </span>
                    KON-SPAW
                </h1>

                <p
                    ref={subRef}
                    className="mt-8 tracking-[0.3em] text-sm md:text-base uppercase"
                    style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif', fontWeight: 400 }}
                >
                    Konstrukcje Stalowe&nbsp;&nbsp;|&nbsp;&nbsp;Laser&nbsp;&nbsp;|&nbsp;&nbsp;Plazma&nbsp;&nbsp;|&nbsp;&nbsp;Gięcie&nbsp;&nbsp;|&nbsp;&nbsp;Cięcie Wodą
                </p>

                <div ref={badgesRef} className="mt-10 flex flex-wrap gap-3 justify-center">
                    {badges.map(badge => (
                        <span
                            key={badge}
                            className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
                            style={{
                                background: 'var(--ks-surface)',
                                border: '1px solid var(--ks-border)',
                                color: 'var(--ks-muted)',
                                fontFamily: 'Oswald, sans-serif',
                            }}
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <a href="#contact" className="btn-cta">
                        Zapytaj o wycenę
                        <ChevronDown size={16} />
                    </a>
                    <a href="#services" className="btn-ghost">
                        Nasza oferta
                    </a>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                style={{ color: 'var(--ks-muted)' }}
            >
                <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Przewiń
                </span>
                <div
                    className="relative w-5 h-8 border rounded-full flex justify-center items-start pt-1.5"
                    style={{ borderColor: 'var(--ks-border2)' }}
                >
                    <div
                        className="w-1 h-2 rounded-full"
                        style={{ background: 'var(--ks-orange)', animation: 'scrollDot 2s ease-in-out infinite' }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes scrollDot {
                    0%   { transform: translateY(0); opacity: 1; }
                    80%  { transform: translateY(12px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
