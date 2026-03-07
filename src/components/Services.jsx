import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Droplets, Hammer, Layers, Settings2, Truck, ArrowUpRight, X } from 'lucide-react';

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
        icon: <Truck size={28} />,
        title: 'Transport i Ochrona Antykorozyjna',
        desc: 'Własny transport i logistyka. Zabezpieczenie antykorozyjne gotowych elementów.',
        span: 'col-span-1 sm:col-span-2',
        tall: false,
        modal: {
            details: [
                'Własna flota transportowa — dostawa na terenie Polski i Europy',
                'Załadunek i rozładunek ciężkich elementów konstrukcyjnych',
                'Zabezpieczenie antykorozyjne: malowanie, cynkowanie, powłoki epoksydowe',
                'Przygotowanie powierzchni: piaskowanie, śrutowanie do Sa 2,5',
                'Logistyka dostosowana do wymagań klienta',
            ],
        },
    },
];

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-xl rounded-2xl p-8"
                style={{
                    background: 'var(--ks-surface)',
                    border: '1px solid var(--ks-border)',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,90,9,0.1)',
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: 'var(--ks-surface2)', color: 'var(--ks-muted)', border: '1px solid var(--ks-border)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ks-orange)'; e.currentTarget.style.color = 'var(--ks-orange)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ks-border)'; e.currentTarget.style.color = 'var(--ks-muted)'; }}
                >
                    <X size={14} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--ks-surface2)', color: 'var(--ks-orange)', border: '1px solid var(--ks-border)' }}
                    >
                        {service.icon}
                    </div>
                    <div>
                        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--ks-orange)', fontFamily: 'Oswald, sans-serif' }}>
                            {service.id} / {services.length}
                        </p>
                        <h3 className="text-xl font-semibold" style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}>
                            {service.title}
                        </h3>
                    </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ks-muted)' }}>
                    {service.desc}
                </p>

                <div className="space-y-2">
                    {service.modal.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3 py-2.5 border-b" style={{ borderColor: 'var(--ks-border)' }}>
                            <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--ks-orange)', marginTop: '6px' }} />
                            <span className="text-sm" style={{ color: 'var(--ks-text)' }}>{detail}</span>
                        </div>
                    ))}
                </div>

                <a href="#contact" onClick={onClose} className="btn-cta w-full justify-center mt-8">
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
                className="w-full py-28 px-6"
                style={{ background: 'var(--ks-dark)' }}
            >
                <div className="max-w-[1400px] mx-auto">
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
                            >
                                <div className="flex items-start justify-between">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: 'var(--ks-surface2)',
                                            color: 'var(--ks-orange)',
                                            border: '1px solid var(--ks-border)',
                                        }}
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

                                <div className="mt-auto pt-6">
                                    <h3
                                        className="mb-2 font-semibold text-lg transition-colors duration-300"
                                        style={{
                                            color: 'var(--ks-text)',
                                            fontFamily: 'Oswald, sans-serif',
                                        }}
                                    >
                                        {svc.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ks-muted)' }}>
                                        {svc.desc}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ color: 'var(--ks-orange)', fontFamily: 'Oswald, sans-serif' }}
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
