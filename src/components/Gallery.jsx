import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
];

const categories = ['Wszystkie', ...new Set(galleryImages.map(img => img.category))];

const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
    if (index === null) return null;
    const img = images[index];

    return (
        <div
            className="lightbox-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Podgląd zdjęcia"
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                    background: 'var(--ks-surface)', border: '1px solid var(--ks-border)', color: 'var(--ks-text)',
                    cursor: 'pointer',
                }}
                aria-label="Zamknij"
            >
                <X size={18} />
            </button>

            {images.length > 1 && (
                <button
                    onClick={e => { e.stopPropagation(); onPrev(); }}
                    style={{
                        position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                        width: '3rem', height: '3rem', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                        background: 'var(--ks-surface)', border: '1px solid var(--ks-border)', color: 'var(--ks-text)',
                        cursor: 'pointer',
                    }}
                    aria-label="Poprzednie"
                >
                    <ChevronLeft size={22} />
                </button>
            )}

            <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                <img src={img.src} alt={img.alt} className="lightbox-img" />
                <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    {img.alt}
                    <span style={{ color: 'var(--ks-border2)', marginLeft: '0.75rem' }}>
                        {index + 1} / {images.length}
                    </span>
                </p>
            </div>

            {images.length > 1 && (
                <button
                    onClick={e => { e.stopPropagation(); onNext(); }}
                    style={{
                        position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                        width: '3rem', height: '3rem', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                        background: 'var(--ks-surface)', border: '1px solid var(--ks-border)', color: 'var(--ks-text)',
                        cursor: 'pointer',
                    }}
                    aria-label="Następne"
                >
                    <ChevronRight size={22} />
                </button>
            )}
        </div>
    );
};

const Gallery = () => {
    const sectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('Wszystkie');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered = activeCategory === 'Wszystkie'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
    const nextImage = () => setLightboxIndex(i => (i + 1) % filtered.length);

    useGSAP(() => {
        gsap.fromTo('.gallery-header',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
            }
        );

        gsap.fromTo('.gallery-item',
            { y: 40, opacity: 0, scale: 0.96 },
            {
                y: 0, opacity: 1, scale: 1,
                stagger: { amount: 0.5, from: 'start' },
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
            }
        );
    }, { scope: sectionRef });

    const handleKeyDown = (e) => {
        if (lightboxIndex === null) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    };

    if (galleryImages.length === 0) return null;

    return (
        <section
            id="gallery"
            ref={sectionRef}
            style={{ background: 'var(--ks-surface)', borderTop: '1px solid var(--ks-border)', borderBottom: '1px solid var(--ks-border)' }}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <div style={{ paddingBlock: 'var(--ks-section-py)', paddingInline: 'var(--ks-container-px)' }}>
                <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto' }}>

                    <div className="gallery-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="section-label mb-4">Galeria</div>
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
                                Nasze<br />
                                <span style={{ color: 'var(--ks-orange)' }}>Realizacje</span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                            Zapraszamy do zapoznania się z naszymi realizacjami. W galerii znajdą Państwo zdjęcia konstrukcji, elementów oraz etapów procesu produkcji.
                        </p>
                    </div>

                    {categories.length > 1 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.7rem',
                                        fontFamily: 'Oswald, sans-serif',
                                        fontWeight: 500,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        background: activeCategory === cat ? 'var(--ks-orange)' : 'var(--ks-surface2)',
                                        color: activeCategory === cat ? '#fff' : 'var(--ks-muted)',
                                        border: `1px solid ${activeCategory === cat ? 'var(--ks-orange)' : 'var(--ks-border)'}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    <div
                        className="gallery-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                            gap: '1rem',
                        }}
                    >
                        {filtered.map((img, i) => (
                            <div
                                key={i}
                                className="gallery-item group cursor-pointer"
                                style={{
                                    position: 'relative',
                                    aspectRatio: '4/3',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    background: 'var(--ks-surface2)',
                                    border: '1px solid var(--ks-border)',
                                }}
                                onClick={() => openLightbox(i)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Otwórz zdjęcie: ${img.alt}`}
                                onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                    className="group-hover:opacity-100"
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '1rem',
                                        left: '1rem',
                                        right: '1rem',
                                        opacity: 0,
                                        transform: 'translateY(8px)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    className="group-hover:opacity-100 group-hover:translate-y-0"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
                                            {img.alt}
                                        </span>
                                        <ZoomIn size={18} color="#fff" />
                                    </div>
                                    {img.category && (
                                        <span style={{ color: 'var(--ks-orange)', fontFamily: 'Oswald, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                            {img.category}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={filtered}
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </section>
    );
};

export default Gallery;
