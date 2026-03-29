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

            // Mouse parallax — only on non-touch devices
            const isTouchDevice = window.matchMedia('(hover: none)').matches;
            if (!isTouchDevice) {
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
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const badges = ['ISO 3834-2', 'od 1 kg do 12,5 Mg', '30+ lat doświadczenia', 'Polska i Europa'];

    return (
        <section
            id="hero"
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'var(--ks-black)',
            }}
        >
            {/* Grid background */}
            <div
                ref={gridRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    opacity: 0,
                    backgroundImage: `
                        linear-gradient(rgba(255,90,9,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,90,9,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Radial glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,90,9,0.07) 0%, transparent 70%)',
                }}
            />

            {/* Corner lines */}
            <div style={{ position: 'absolute', top: '5rem', left: 'clamp(1rem,4vw,2rem)', width: '4rem', height: '4rem', pointerEvents: 'none', borderTop: '1px solid var(--ks-orange)', borderLeft: '1px solid var(--ks-orange)', opacity: 0.4 }} />
            <div style={{ position: 'absolute', bottom: '6rem', right: 'clamp(1rem,4vw,2rem)', width: '4rem', height: '4rem', pointerEvents: 'none', borderBottom: '1px solid var(--ks-orange)', borderRight: '1px solid var(--ks-orange)', opacity: 0.4 }} />

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: 'var(--ks-container-max)',
                    marginInline: 'auto',
                    paddingInline: 'var(--ks-container-px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <div className="section-label" style={{ marginBottom: '2rem' }}>Śląsk · Polska · Europa</div>

                <h1
                    ref={titleRef}
                    style={{
                        position: 'relative',
                        userSelect: 'none',
                        lineHeight: 0.88,
                        letterSpacing: '-0.02em',
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(4.5rem, 18vw, 18rem)',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(240,240,240,0.15)',
                        margin: 0,
                    }}
                >
                    <span
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Bebas Neue, sans-serif',
                            color: 'var(--ks-text)',
                            WebkitTextStroke: 'unset',
                        }}
                        aria-hidden="true"
                    >
                        KON-<span style={{ color: 'var(--ks-orange)' }}>SPAW</span>
                    </span>
                    KON-SPAW
                </h1>

                <p
                    ref={subRef}
                    style={{
                        marginTop: '2rem',
                        letterSpacing: '0.3em',
                        fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                        color: 'var(--ks-muted)',
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        lineHeight: 1.8,
                    }}
                >
                    Konstrukcje Stalowe&nbsp;&nbsp;|&nbsp;&nbsp;Laser&nbsp;&nbsp;|&nbsp;&nbsp;Plazma&nbsp;&nbsp;|&nbsp;&nbsp;Gięcie&nbsp;&nbsp;|&nbsp;&nbsp;Cięcie Wodą
                </p>

                <div
                    ref={badgesRef}
                    style={{
                        marginTop: '2.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        justifyContent: 'center',
                    }}
                >
                    {badges.map(badge => (
                        <span
                            key={badge}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '9999px',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                background: 'var(--ks-surface)',
                                border: '1px solid var(--ks-border)',
                                color: 'var(--ks-muted)',
                                fontFamily: 'Oswald, sans-serif',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: '3rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    <a href="#contact" className="btn-cta">
                        Zapytaj o wycenę
                        <ChevronDown size={16} />
                    </a>
                    <a href="#services" className="btn-ghost">
                        Nasza oferta
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef}
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--ks-muted)',
                }}
            >
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif' }}>
                    Przewiń
                </span>
                <div
                    style={{
                        width: '1.25rem',
                        height: '2rem',
                        border: '1px solid var(--ks-border2)',
                        borderRadius: '9999px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '0.375rem',
                    }}
                >
                    <div
                        style={{ width: '0.25rem', height: '0.5rem', borderRadius: '9999px', background: 'var(--ks-orange)', animation: 'scrollDot 2s ease-in-out infinite' }}
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
