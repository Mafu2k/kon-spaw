import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Droplets, Hammer, Layers, Settings2, Truck, Paintbrush, ArrowUpRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: '01',
        icon: <Hammer size={28} />,
        title: 'Konstrukcje Stalowe',
        desc: 'Spawane konstrukcje z gatunków stali S235N do S690Q. Elementy od 1 kg do 12,5 Mg.',
        span: 'col-span-1 sm:col-span-2',
        tall: false,
        modal: {
            details: [
                'Spawanie automatyczne i ręczne blachownic wielkogabarytowych',
                'Gatunki stali: S235N, S355N, S420N, S460N, S690Q i inne',
                'Elementy od 1 kg do 12,5 Mg / sztuka',
                'Certyfikat PN EN ISO 3834-2',
                'Hale, wiaty, antresole i konstrukcje przemysłowe',
                'Obsługa branży budowlanej, górniczej, motoryzacyjnej, naftowej i lotniczej',
            ],
        },
    },
    {
        id: '02',
        icon: <Zap size={28} />,
        title: 'Wypalanie — Laser, Plazma, Gaz',
        desc: 'Precyzyjne cięcie termiczne laserem, plazmą i gazem. Dokładna obróbka blach stalowych i nierdzewnych.',
        span: 'col-span-1',
        tall: true,
        modal: {
            details: [
                'Cięcie laserowe — wysoka precyzja, minimalna strefa wpływu ciepła',
                'Cięcie plazmowe — blachy stalowe, grubości do 60 mm',
                'Cięcie gazem — elementy grubościenne',
                'Obróbka stali czarnej, nierdzewnej i aluminium',
                'Tolerancja wykonania ±0,1 mm',
            ],
        },
    },
    {
        id: '03',
        icon: <Droplets size={28} />,
        title: 'Cięcie Strumieniem Wody',
        desc: 'Precyzyjne wycinanie strumieniem wody. Brak odkształceń termicznych — idealne do stali hartowanej.',
        span: 'col-span-1',
        tall: true,
        modal: {
            details: [
                'Brak odkształceń termicznych — brak HAZ (strefy wpływu ciepła)',
                'Cięcie stali hartowanej, stopów tytanu, szkła i composites',
                'Grubości materiałów do 200 mm',
                'Idealne do detali wymagających dalszej obróbki',
                'Wysoka powtarzalność kształtu',
            ],
        },
    },
    {
        id: '04',
        icon: <Layers size={28} />,
        title: 'Gięcie i Prostowanie',
        desc: 'Krawędziarki do blach do 10 mm (L=3,5 m) i do 30 mm. Prasa 3-tłoczkowa do prostowania.',
        span: 'col-span-1',
        tall: false,
        modal: {
            details: [
                'Krawędziarki CNC — blachy do 10 mm, długość do 3,5 m',
                'Gięcie grubościenne — do 30 mm (zależnie od geometrii)',
                'Prasa 3-tłoczkowa do prostowania elementów (szer. do 2,3 m)',
                'Prostowanie blachownic i elementów konstrukcyjnych po spawaniu',
                'Dokładność kąta gięcia ±0,5°',
            ],
        },
    },
    {
        id: '05',
        icon: <Settings2 size={28} />,
        title: 'Piłowanie',
        desc: 'Cięcie pilą materiałów o średnicy do Ø 650 mm. Wysoka wydajność i dokładność.',
        span: 'col-span-1',
        tall: false,
        modal: {
            details: [
                'Piłowanie taśmowe i tarczowe materiałów pełnych',
                'Średnica do Ø 650 mm',
                'Cięcie stali węglowej, stopowej i nierdzewnej',
                'Minimalne odchyłki prostopadłości cięcia',
                'Obsługa serii i produkcji jednostkowej',
            ],
        },
    },
    {
        id: '06',
        icon: <Paintbrush size={28} />,
        title: 'Malowanie Proszkowe i Natryskowe',
        desc: 'Zabezpieczenie antykorozyjne gotowych elementów — malowanie proszkowe i natryskowe.',
        span: 'col-span-1',
        tall: false,
        modal: {
            details: [
                'Malowanie proszkowe — trwałe powłoki na elementach stalowych',
                'Malowanie natryskowe — farby epoksydowe i akrylowe',
                'Przygotowanie powierzchni: piaskowanie, śrutowanie do Sa 2,5',
                'Zabezpieczenie antykorozyjne zgodnie z normami',
                'Szeroka paleta kolorów RAL',
            ],
        },
    },
    {
        id: '07',
        icon: <Truck size={28} />,
        title: 'Transport i Logistyka',
        desc: 'Własny transport i logistyka. Dostawa gotowych elementów na terenie Polski i Europy.',
        span: 'col-span-1 sm:col-span-2',
        tall: false,
        modal: {
            details: [
                'Własna flota transportowa — dostawa na terenie Polski i Europy',
                'Załadunek i rozładunek ciężkich elementów konstrukcyjnych',
                'Logistyka dostosowana do wymagań klienta',
                'Koordynacja dostaw dla dużych projektów',
                'Ubezpieczenie ładunku podczas transportu',
            ],
        },
    },
];

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '580px',
                    maxHeight: '90dvh',
                    overflowY: 'auto',
                    borderRadius: '1rem',
                    padding: 'clamp(1.5rem, 4vw, 2rem)',
                    background: 'var(--ks-surface)',
                    border: '1px solid var(--ks-border)',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,90,9,0.1)',
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--ks-surface2)',
                        color: 'var(--ks-muted)',
                        border: '1px solid var(--ks-border)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ks-orange)'; e.currentTarget.style.color = 'var(--ks-orange)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ks-border)'; e.currentTarget.style.color = 'var(--ks-muted)'; }}
                    aria-label="Zamknij"
                >
                    <X size={14} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div
                        style={{
                            width: '3rem',
                            height: '3rem',
                            borderRadius: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            background: 'var(--ks-surface2)',
                            color: 'var(--ks-orange)',
                            border: '1px solid var(--ks-border)',
                        }}
                    >
                        {service.icon}
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ks-orange)', fontFamily: 'Oswald, sans-serif', marginBottom: '0.25rem' }}>
                            {service.id} / {services.length.toString().padStart(2, '0')}
                        </p>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif', margin: 0 }}>
                            {service.title}
                        </h3>
                    </div>
                </div>

                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--ks-muted)' }}>
                    {service.desc}
                </p>

                <div>
                    {service.modal.details.map((detail, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                paddingBlock: '0.625rem',
                                borderBottom: '1px solid var(--ks-border)',
                            }}
                        >
                            <span style={{ background: 'var(--ks-orange)', width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, marginTop: '6px' }} />
                            <span style={{ fontSize: '0.875rem', color: 'var(--ks-text)' }}>{detail}</span>
                        </div>
                    ))}
                </div>

                <a href="#contact" onClick={onClose} className="btn-cta" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem', display: 'flex' }}>
                    Zapytaj o wycenę
                </a>
            </div>
        </div>
    );
};

const Services = () => {
    const sectionRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);

    useGSAP(() => {
        gsap.fromTo('.svc-card',
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1,
                stagger: { amount: 0.6, from: 'start' },
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <>
            <section
                id="services"
                ref={sectionRef}
                style={{
                    width: '100%',
                    paddingBlock: 'var(--ks-section-py)',
                    paddingInline: 'var(--ks-container-px)',
                    background: 'var(--ks-dark)',
                }}
            >
                <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto' }}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="section-label mb-4">Oferta</div>
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
                                Kompleksowa<br />Obróbka Metali
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed md:text-right" style={{ color: 'var(--ks-muted)' }}>
                            Od projektu po gotowy element — obsługujemy cały łańcuch produkcyjny w jednym zakładzie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                        {services.map((svc) => (
                            <div
                                key={svc.id}
                                className={`svc-card bento-card group cursor-pointer flex flex-col justify-between ${svc.span} ${svc.tall ? 'row-span-2' : ''}`}
                                style={{ minHeight: svc.tall ? '320px' : '200px' }}
                                onClick={() => setActiveModal(svc)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Usługa: ${svc.title}`}
                                onKeyDown={e => e.key === 'Enter' && setActiveModal(svc)}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                    <div
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--ks-surface2)',
                                            color: 'var(--ks-orange)',
                                            border: '1px solid var(--ks-border)',
                                            transition: 'transform 0.3s ease',
                                            flexShrink: 0,
                                        }}
                                        className="group-hover:scale-110"
                                    >
                                        {svc.icon}
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: 'Bebas Neue, sans-serif',
                                            fontSize: '3rem',
                                            lineHeight: 1,
                                            color: 'rgba(255,255,255,0.04)',
                                        }}
                                    >
                                        {svc.id}
                                    </span>
                                </div>

                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                                    <h3
                                        style={{
                                            marginBottom: '0.5rem',
                                            fontSize: '1.125rem',
                                            color: 'var(--ks-text)',
                                            fontFamily: 'Oswald, sans-serif',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {svc.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', color: 'var(--ks-muted)' }}>
                                        {svc.desc}
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            color: 'var(--ks-orange)',
                                            fontFamily: 'Oswald, sans-serif',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        }}
                                        className="group-hover:opacity-100"
                                    >
                                        Dowiedz się więcej
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {activeModal && (
                <ServiceModal
                    service={activeModal}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </>
    );
};

export default Services;
