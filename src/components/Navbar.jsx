import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoSrc from '/logo_kon_spaw.png';

const navLinks = [
    { name: 'O Firmie', href: '#about' },
    { name: 'Oferta', href: '#services' },
    { name: 'Technologia', href: '#technology' },
    { name: 'Realizacje', href: '#projects' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
];

const PHONE = { display: '+48 32 30 50 179', href: 'tel:+48323050179' };

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
            role="navigation"
            aria-label="Nawigacja główna"
        >
            <div
                style={{
                    maxWidth: 'var(--ks-container-max)',
                    marginInline: 'auto',
                    paddingInline: 'var(--ks-container-px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <a href="#hero" className="flex items-center" aria-label="Kon-Spaw — strona główna">
                    <img
                        src={logoSrc}
                        alt="Kon-Spaw logo"
                        style={{ height: '2.5rem', width: 'auto', display: 'block' }}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
                            style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}
                            onMouseEnter={e => e.target.style.color = 'var(--ks-text)'}
                            onMouseLeave={e => e.target.style.color = 'var(--ks-muted)'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={PHONE.href} className="btn-cta text-xs py-2.5 px-5">
                        <Phone size={14} />
                        {PHONE.display}
                    </a>
                </div>

                <button
                    className="md:hidden p-2 rounded-lg"
                    style={{ background: 'var(--ks-surface)', color: 'var(--ks-text)', border: '1px solid var(--ks-border)' }}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="md:hidden border-t"
                    style={{
                        background: 'rgba(10,10,10,0.98)',
                        borderColor: 'var(--ks-border)',
                        maxHeight: 'calc(100dvh - 56px)',
                        overflowY: 'auto',
                    }}
                >
                    <div
                        style={{
                            paddingInline: 'var(--ks-container-px)',
                            paddingBlock: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                        }}
                    >
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="block py-3.5 tracking-widest uppercase text-sm border-b"
                                style={{ color: 'var(--ks-muted)', borderColor: 'var(--ks-border)', fontFamily: 'Oswald, sans-serif' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href={PHONE.href} className="btn-cta mt-5 text-sm justify-center" onClick={closeMenu}>
                            <Phone size={14} />
                            {PHONE.display}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
