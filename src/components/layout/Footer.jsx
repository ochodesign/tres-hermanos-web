import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import config from '../../config/config';
import logoImg from '../../assets/logo-3-hermanos.png';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t-8 border-slate-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <img src={logoImg} alt="Logo" className="h-32 object-contain mb-8 animate-float" />

                    <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">
                        ¡GRACIAS POR <span className="text-primary-500">ELEGIRNOS!</span>
                    </h3>

                    <div className="flex gap-6 mb-12">
                        <a href={config.instagramURL} className="w-16 h-16 bg-white border-4 border-slate-100 rounded-3xl flex items-center justify-center text-2xl text-pink-500 shadow-sm hover:scale-110 active:scale-95 transition-all">
                            <FaInstagram />
                        </a>
                        <a href={config.facebookURL} className="w-16 h-16 bg-white border-4 border-slate-100 rounded-3xl flex items-center justify-center text-2xl text-blue-600 shadow-sm hover:scale-110 active:scale-95 transition-all">
                            <FaFacebook />
                        </a>
                        <a href={`https://wa.me/${config.whatsappNumber}`} className="w-16 h-16 bg-white border-4 border-slate-100 rounded-3xl flex items-center justify-center text-2xl text-green-500 shadow-sm hover:scale-110 active:scale-95 transition-all">
                            <FaWhatsapp />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500 font-bold uppercase tracking-widest text-sm mb-12">
                        <div className="flex items-center gap-2 justify-center">
                            <FaEnvelope className="text-primary-500" />
                            <span>{config.email}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-primary-500 font-black">@</span>
                            <span>Seguinos en redes</span>
                        </div>
                    </div>

                    <p className="text-slate-300 font-black uppercase tracking-widest text-[10px]">
                        &copy; {new Date().getFullYear()} 3 HERMANOS - DIVERSION TOTAL
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
