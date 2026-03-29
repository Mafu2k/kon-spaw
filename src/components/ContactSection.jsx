import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';

const contactInfo = [
    {
        icon: <MapPin size={18} />,
        label: 'Adres',
        value: 'ul. Mikulczycka 103\n42-675 Świętoszowice',
        href: 'https://maps.google.com/?q=Mikulczycka+103+Swietoszowice',
    },
    {
        icon: <Phone size={18} />,
        label: 'Telefon',
        value: '+48 32 30 50 179',
        href: 'tel:+48323050179',
    },
    {
        icon: <Mail size={18} />,
        label: 'Email — Biuro',
        value: 'biuro@kon-spaw.com',
        href: 'mailto:biuro@kon-spaw.com',
    },
    {
        icon: <Mail size={18} />,
        label: 'Email — Produkcja',
        value: 'produkcja@kon-spaw.com',
        href: 'mailto:produkcja@kon-spaw.com',
    },
    {
        icon: <Clock size={18} />,
        label: 'Godziny otwarcia',
        value: 'Pon – Pt: 7:00–15:00',
        href: null,
    },
];

const inputStyle = {
    width: '100%',
    background: 'var(--ks-surface)',
    border: '1px solid var(--ks-border)',
    borderRadius: '0.625rem',
    padding: '0.875rem 1rem',
    color: 'var(--ks-text)',
    fontSize: '0.875rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s ease',
};

const ContactSection = () => {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section
            id="contact"
            style={{ width: '100%', paddingBlock: 'var(--ks-section-py)', paddingInline: 'var(--ks-container-px)', background: 'var(--ks-black)', borderTop: '1px solid var(--ks-border)' }}
        >
            <div style={{ maxWidth: 'var(--ks-container-max)', marginInline: 'auto' }}>

                <div className="section-label mb-5">Kontakt</div>
                <h2
                    className="mb-16"
                    style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                        fontWeight: 700,
                        color: 'var(--ks-text)',
                        lineHeight: 1.1,
                    }}
                >
                    Skontaktuj się<br />
                    <span style={{ color: 'var(--ks-orange)' }}>z nami</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-4">
                        {contactInfo.map((info, i) => (
                            <div
                                key={i}
                                className="bento-card flex items-start gap-4"
                                style={{ padding: '1.5rem' }}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                                    style={{
                                        background: 'var(--ks-surface2)',
                                        color: 'var(--ks-orange)',
                                        border: '1px solid var(--ks-border)',
                                    }}
                                >
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs mb-1 tracking-widest uppercase"
                                        style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}>
                                        {info.label}
                                    </p>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-sm font-medium whitespace-pre-line transition-colors duration-200 hover:text-orange-500"
                                            style={{ color: 'var(--ks-text)', lineHeight: 1.6 }}
                                        >
                                            {info.value}
                                            <ChevronRight size={12} className="inline ml-1 opacity-40" />
                                        </a>
                                    ) : (
                                        <p className="text-sm whitespace-pre-line" style={{ color: 'var(--ks-text)', lineHeight: 1.6 }}>
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="bento-card"
                        style={{ padding: '2.5rem' }}
                    >
                        <h3
                            className="text-xl font-heading font-semibold mb-6"
                            style={{ color: 'var(--ks-text)', fontFamily: 'Oswald, sans-serif' }}
                        >
                            Napisz do nas
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs mb-2 tracking-wider uppercase"
                                        style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}>
                                        Imię i Nazwisko
                                    </label>
                                    <input
                                        type="text" name="name" required
                                        placeholder="Jan Kowalski"
                                        value={form.name} onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs mb-2 tracking-wider uppercase"
                                        style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}>
                                        Telefon
                                    </label>
                                    <input
                                        type="tel" name="phone"
                                        placeholder="+48 ..."
                                        value={form.phone} onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs mb-2 tracking-wider uppercase"
                                    style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}>
                                    Email
                                </label>
                                <input
                                    type="email" name="email" required
                                    placeholder="jan@firma.pl"
                                    value={form.email} onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>

                            <div>
                                <label className="block text-xs mb-2 tracking-wider uppercase"
                                    style={{ color: 'var(--ks-muted)', fontFamily: 'Oswald, sans-serif' }}>
                                    Wiadomość
                                </label>
                                <textarea
                                    name="message" required rows={5}
                                    placeholder="Opisz swoje zapytanie lub projekt..."
                                    value={form.message} onChange={handleChange}
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-cta w-full justify-center mt-2"
                                style={{ opacity: sent ? 0.7 : 1 }}
                            >
                                {sent ? '✓ Wiadomość wysłana!' : (
                                    <>
                                        Wyślij Wiadomość
                                        <Send size={15} />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-center" style={{ color: 'var(--ks-muted)' }}>
                                Odpowiadamy w ciągu 24 godzin roboczych.
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
