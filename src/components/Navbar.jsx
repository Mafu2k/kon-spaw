import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { name: 'O Firmie', href: '#about' },
    { name: 'Oferta', href: '#services' },
    { name: 'Technologia', href: '#technology' },
    { name: 'Realizacje', href: '#projects' },
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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-1">
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', letterSpacing: '0.12em', color: 'white' }}>
                        KON-<span style={{ color: 'var(--ks-orange)' }}>SPAW</span>
                    </span>
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
                    style={{ background: 'var(--ks-surface)', color: 'var(--ks-text)' }}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Otwórz menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden border-t" style={{ background: 'rgba(10,10,10,0.97)', borderColor: 'var(--ks-border)' }}>
                    <div className="px-6 py-4 flex flex-col gap-1">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 tracking-widest uppercase text-sm border-b"
                                style={{ color: 'var(--ks-muted)', borderColor: 'var(--ks-border)', fontFamily: 'Oswald, sans-serif' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href={PHONE.href} className="btn-cta mt-4 text-sm justify-center">
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
