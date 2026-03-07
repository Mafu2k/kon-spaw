import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
    { name: 'FAMUR', abbr: 'FAM' },
    { name: 'COMAU', abbr: 'COM' },
    { name: 'KOPEX GROUP', abbr: 'KPX' },
    { name: 'Zamet Industry', abbr: 'ZAM' },
    { name: 'Zamet Budowa Maszyn', abbr: 'ZBM' },
];

const Clients = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.client-item',
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
            }
        );
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 px-6"
            style={{
                background: 'var(--ks-surface)',
                borderTop: '1px solid var(--ks-border)',
                borderBottom: '1px solid var(--ks-border)',
            }}
        >
            <div className="max-w-[1400px] mx-auto">
                <p
                    className="text-center text-xs tracking-[0.25em] uppercase mb-10"
                    style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}
                >
                    Zaufali nam
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="client-item bento-card flex items-center gap-4 px-6 py-4"
                            style={{
                                minWidth: '180px',
                                justifyContent: 'center',
                                border: '1px solid var(--ks-border)',
                                borderRadius: '0.75rem',
                                padding: '1rem 1.5rem',
                            }}
                        >
                            {/* Logo placeholder with abbr */}
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                                style={{
                                    background: 'var(--ks-surface2)',
                                    color: 'var(--ks-orange)',
                                    fontFamily: 'Oswald, sans-serif',
                                    border: '1px solid var(--ks-border)',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {client.abbr}
                            </div>
                            <span
                                className="font-heading font-semibold text-sm tracking-wide"
                                style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                            >
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
