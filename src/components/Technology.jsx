import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const machines = [
    {
        id: '01',
        name: 'Wypalarka Laserowa',
        spec: 'Stół 3000×1500 mm · Moc 4 kW',
        desc: 'Wysoka precyzja cięcia stali czarnej do grubości 20 mm. Minimalna tolerancja wykonania ±0,1 mm.',
        tag: 'LASER',
    },
    {
        id: '02',
        name: 'Cięcie Strumieniem Wody',
        spec: 'Stół 4000×2000 mm',
        desc: 'Cięcie materiałów o grubości do 200 mm bez odkształceń termicznych. Idealne do stali hartowanej i aluminium.',
        tag: 'WODA',
    },
    {
        id: '03',
        name: 'Prasa Krawędziowa CNC',
        spec: 'Nacisk 200 Ton · Dł. 3,5 m',
        desc: 'Precyzyjne gięcie blach z systemem kompensacji strzałki ugięcia. Obsługa blach do grubości 30 mm.',
        tag: 'CNC',
    },
    {
        id: '04',
        name: 'Robot Spawalniczy',
        spec: '6 Osi · Zasięg 2,5 m',
        desc: 'Powtarzalność i najwyższa jakość spoin dla serii produkcyjnych. Spawanie MIG/MAG i TIG.',
        tag: 'ROBOT',
    },
];

const Technology = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.tech-header',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
        );

        gsap.fromTo('.mach-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
                scrollTrigger: { trigger: wrapperRef.current, start: 'top 80%' },
            }
        );

        if (!trackRef.current || !wrapperRef.current) return;
        if (window.innerWidth < 768) return;

        const totalWidth = trackRef.current.scrollWidth - window.innerWidth + 120;
        const hScroll = gsap.to(trackRef.current, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top top',
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => hScroll.scrollTrigger?.kill();
    }, { scope: sectionRef });

    return (
        <section id="technology" ref={sectionRef} style={{ background: 'var(--ks-black)' }}>
            <div style={{ paddingBlock: 'var(--ks-section-py)', paddingInline: 'var(--ks-container-px)', paddingBottom: 0 }}>
                <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto' }} className="tech-header">
                    <div className="section-label mb-5">Park Maszynowy</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2
                            style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                                fontWeight: 700,
                                color: 'var(--ks-text)',
                                lineHeight: 1.1,
                                margin: 0,
                            }}
                        >
                            Technologia<br />Produkcji
                        </h2>
                        <p style={{ maxWidth: '32ch', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ks-muted)' }}>
                            Inwestujemy w nowoczesne urządzenia zapewniające precyzję i terminowość.
                            <span className="hidden md:inline"> Przewiń w prawo, aby poznać naszą flotę maszyn.</span>
                        </p>
                    </div>
                    <div className="hidden md:flex mt-8 items-center gap-3" style={{ color: 'var(--ks-muted)' }}>
                        <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif' }}>
                            Przesuń →
                        </span>
                        <div style={{ height: '1px', flex: 1, maxWidth: '16rem', background: 'var(--ks-border)' }} />
                    </div>
                </div>
            </div>

            <div ref={wrapperRef} style={{ overflow: 'hidden' }}>
                <div
                    ref={trackRef}
                    className="horizontal-track"
                    style={{ paddingLeft: 'var(--ks-container-px)', paddingRight: '6rem', paddingBottom: '5rem' }}
                >
                    {machines.map(m => (
                        <div
                            key={m.id}
                            className="mach-card bento-card flex flex-col justify-between"
                            style={{
                                width: 'clamp(260px, 30vw, 420px)',
                                minHeight: '300px',
                                background: 'var(--ks-surface)',
                                flexShrink: 0,
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <span
                                        style={{
                                            padding: '0.25rem 0.75rem',
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            borderRadius: '0.25rem',
                                            background: 'var(--ks-surface2)',
                                            color: 'var(--ks-orange)',
                                            fontFamily: 'Oswald, sans-serif',
                                            border: '1px solid var(--ks-border)',
                                        }}
                                    >
                                        {m.tag}
                                    </span>
                                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}>
                                        {m.id}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}>
                                    {m.name}
                                </h3>
                                <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '1rem', color: 'var(--ks-orange)' }}>
                                    {m.spec}
                                </p>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ks-muted)' }}>
                                    {m.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--ks-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--ks-muted)' }}>
                                    <span style={{ fontFamily: 'Oswald, sans-serif' }}>PARAMETRY TECHNICZNE</span>
                                    <span style={{ color: 'var(--ks-orange)' }}>▸</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;
