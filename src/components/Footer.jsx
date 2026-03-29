import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import logoSrc from '/logo_kon_spaw.png';

const Footer = () => {
    const links = [
        { name: 'O Firmie', href: '#about' },
        { name: 'Oferta', href: '#services' },
        { name: 'Technologia', href: '#technology' },
        { name: 'Realizacje', href: '#projects' },
        { name: 'Galeria', href: '#gallery' },
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
            <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto', paddingInline: 'var(--ks-container-px)', paddingBlock: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2.5rem' }}>

                <div>
                    <img
                        src={logoSrc}
                        alt="Kon-Spaw logo"
                        style={{ height: '3rem', width: 'auto', display: 'block', marginBottom: '1rem' }}
                    />
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
                            <span>ul. Mikulczycka 103<br />42-675 Świętoszowice</span>
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

            <div
                className="border-t"
                style={{ borderColor: 'var(--ks-border)' }}
            >
                <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto', paddingInline: 'var(--ks-container-px)', paddingBlock: '1.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem' }}>
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
