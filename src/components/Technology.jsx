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

        gsap.fromTo('.mach-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
                scrollTrigger: { trigger: wrapperRef.current, start: 'top 80%' },
            }
        );

        return () => hScroll.scrollTrigger?.kill();
    }, { scope: sectionRef });

    return (
        <section id="technology" ref={sectionRef} style={{ background: 'var(--ks-black)' }}>
            <div className="w-full py-20 px-6">
                <div className="max-w-[1400px] mx-auto tech-header">
                    <div className="section-label mb-5">Park Maszynowy</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2
                            style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                                fontWeight: 700,
                                color: 'var(--ks-text)',
                                lineHeight: 1.1,
                            }}
                        >
                            Technologia<br />Produkcji
                        </h2>
                        <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                            Inwestujemy w nowoczesne urządzenia zapewniające precyzję i terminowość.
                            Przewiń w prawo, aby poznać naszą flotę maszyn.
                        </p>
                    </div>
                    <div className="mt-8 flex items-center gap-3" style={{ color: 'var(--ks-muted)' }}>
                        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            Przesuń →
                        </span>
                        <div className="h-px flex-1 max-w-xs" style={{ background: 'var(--ks-border)' }} />
                    </div>
                </div>
            </div>

            <div ref={wrapperRef} className="overflow-hidden">
                <div ref={trackRef} className="horizontal-track pl-6 pr-24 pb-20">
                    {machines.map(m => (
                        <div
                            key={m.id}
                            className="mach-card flex-shrink-0 bento-card flex flex-col justify-between"
                            style={{ width: 'clamp(300px, 30vw, 420px)', minHeight: '340px', background: 'var(--ks-surface)' }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="px-3 py-1 text-xs font-bold tracking-widest rounded"
                                        style={{
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
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}>
                                    {m.name}
                                </h3>
                                <p className="text-xs font-mono mb-4" style={{ color: 'var(--ks-orange)' }}>
                                    {m.spec}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                                    {m.desc}
                                </p>
                            </div>

                            <div className="mt-8 pt-5 border-t" style={{ borderColor: 'var(--ks-border)' }}>
                                <div className="flex justify-between text-xs" style={{ color: 'var(--ks-muted)' }}>
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
