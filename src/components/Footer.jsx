import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    const links = [
        { name: 'O Firmie', href: '#about' },
        { name: 'Oferta', href: '#services' },
        { name: 'Technologia', href: '#technology' },
        { name: 'Realizacje', href: '#projects' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <footer
            style={{
                background: 'var(--ks-surface)',
                borderTop: '1px solid var(--ks-border)',
                color: 'var(--ks-muted)',
            }}
        >
            <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <span
                        style={{
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: '1.75rem',
                            letterSpacing: '0.1em',
                            color: 'var(--ks-text)',
                            display: 'block',
                            marginBottom: '1rem',
                        }}
                    >
                        KON-<span style={{ color: 'var(--ks-orange)' }}>SPAW</span>
                    </span>
                    <p className="text-sm leading-relaxed mb-5" style={{ maxWidth: '28ch' }}>
                        Kon-Spaw sp. z o.o. w organizacji sp. komandytowa<br />
                        Profesjonalne konstrukcje stalowe i obróbka metali.
                        Rodzinna tradycja od 1983 roku.
                    </p>
                    <div className="flex gap-3">
                        {[
                            { Icon: Facebook, href: '#' },
                            { Icon: Instagram, href: '#' },
                            { Icon: Linkedin, href: '#' },
                        ].map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                                style={{
                                    background: 'var(--ks-surface2)',
                                    border: '1px solid var(--ks-border)',
                                    color: 'var(--ks-muted)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'var(--ks-orange)';
                                    e.currentTarget.style.color = 'var(--ks-orange)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'var(--ks-border)';
                                    e.currentTarget.style.color = 'var(--ks-muted)';
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Nav links */}
                <div>
                    <h4
                        className="mb-5 text-xs tracking-widest uppercase"
                        style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                    >
                        Nawigacja
                    </h4>
                    <ul className="flex flex-col gap-2">
                        {links.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm transition-colors duration-200"
                                    style={{ color: 'var(--ks-muted)' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--ks-orange)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--ks-muted)'}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4
                        className="mb-5 text-xs tracking-widest uppercase"
                        style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                    >
                        Kontakt
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--ks-orange)' }} />
                            <span>ul. Mikulczycka 103<br />42-674 Świętoszowice</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--ks-orange)' }} />
                            <a href="tel:+48323050179" style={{ color: 'var(--ks-muted)' }}
                                onMouseEnter={e => e.target.style.color = 'var(--ks-text)'}
                                onMouseLeave={e => e.target.style.color = 'var(--ks-muted)'}>
                                +48 32 30 50 179
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--ks-orange)' }} />
                            <a href="mailto:biuro@kon-spaw.com" style={{ color: 'var(--ks-muted)' }}
                                onMouseEnter={e => e.target.style.color = 'var(--ks-text)'}
                                onMouseLeave={e => e.target.style.color = 'var(--ks-muted)'}>
                                biuro@kon-spaw.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--ks-orange)' }} />
                            <a href="mailto:produkcja@kon-spaw.com" style={{ color: 'var(--ks-muted)' }}
                                onMouseEnter={e => e.target.style.color = 'var(--ks-text)'}
                                onMouseLeave={e => e.target.style.color = 'var(--ks-muted)'}>
                                produkcja@kon-spaw.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="border-t"
                style={{ borderColor: 'var(--ks-border)' }}
            >
                <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
                    <span>© {new Date().getFullYear()} Kon-Spaw. Wszelkie prawa zastrzeżone.</span>
                    <span style={{ color: 'var(--ks-border2)' }}>
                        NIP: — · REGON: —
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
