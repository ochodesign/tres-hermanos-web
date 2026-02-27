import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../../config/config';
import logoImg from '../../assets/logo-3-hermanos.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4">
                <nav className={`flex justify-between items-center transition-all duration-300 rounded-full px-6 py-2 ${scrolled ? 'bg-white shadow-xl border-2 border-slate-50' : 'bg-white/80 backdrop-blur-md'}`}>
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110">
                            <img src={logoImg} alt="3 Hermanos Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-slate-900 leading-none">
                                3 HERMANOS
                            </span>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-500">
                                INFLABLES Y DIVERSIÓN
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-primary-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`https://wa.me/${config.whatsappNumber}`}
                            className="bg-brand-yellow text-slate-900 px-7 py-3 rounded-full font-black shadow-sm transition-all hover:scale-105 active:scale-95 border-b-4 border-yellow-600 uppercase text-sm"
                        >
                            RESERVAR
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-3 bg-slate-100 rounded-full text-slate-900"
                        onClick={() => setIsOpen(true)}
                    >
                        <HiMenuAlt3 className="text-2xl" />
                    </button>
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <img src={logoImg} alt="Logo" className="h-16 object-contain" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 bg-slate-100 rounded-full"
                                >
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 mb-auto">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/${config.whatsappNumber}`}
                                className="w-full btn-wa mt-8 uppercase tracking-widest text-lg"
                            >
                                WhatsApp
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
