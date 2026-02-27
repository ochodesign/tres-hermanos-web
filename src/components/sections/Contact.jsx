import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa6';
import { sendContactForm } from '../../services/api';
import config from '../../config/config';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });
        try {
            await sendContactForm(formData);
            setStatus({ loading: false, success: '¡Mensaje enviado!', error: null });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ loading: false, success: null, error: 'Reintenta o escribinos por WhatsApp.' });
        }
    };

    return (
        <section id="contacto" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="section-title mb-4"
                        >
                            ¡RESERVÁ <span className="text-brand-green">AHORA!</span>
                        </motion.h2>
                        <p className="text-xl text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            No te quedes sin tu inflable para <br /> tu fecha especial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 p-10 md:p-16 rounded-[4rem] border-b-8 border-slate-200">
                        {/* WhatsApp CTA */}
                        <div className="flex flex-col justify-center text-center lg:text-left">
                            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic italic">
                                ¿Tenés <br /> dudas?
                            </h3>
                            <p className="text-slate-500 font-bold mb-10 leading-relaxed uppercase tracking-tighter">
                                Mandanos un WhatsApp y te respondemos en el acto.
                            </p>
                            <a
                                href={`https://wa.me/${config.whatsappNumber}`}
                                className="btn-wa shadow-2xl"
                            >
                                <FaWhatsapp className="text-3xl" />
                                ESCRIBINOS
                            </a>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text" name="name" required placeholder="Tu Nombre"
                                value={formData.name} onChange={handleChange}
                                className="w-full bg-white border-4 border-slate-100 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary-400 font-bold text-lg transition-all"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="tel" name="phone" required placeholder="WhatsApp"
                                    value={formData.phone} onChange={handleChange}
                                    className="w-full bg-white border-4 border-slate-100 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary-400 font-bold text-lg transition-all"
                                />
                                <input
                                    type="email" name="email" required placeholder="Email"
                                    value={formData.email} onChange={handleChange}
                                    className="w-full bg-white border-4 border-slate-100 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary-400 font-bold text-lg transition-all"
                                />
                            </div>
                            <textarea
                                name="message" required rows="3" placeholder="¿Qué día es la fiesta?"
                                value={formData.message} onChange={handleChange}
                                className="w-full bg-white border-4 border-slate-100 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary-400 font-bold text-lg transition-all resize-none"
                            />

                            <button
                                type="submit"
                                disabled={status.loading}
                                className="w-full h-16 bg-primary-500 text-white font-black rounded-full border-b-4 border-primary-700 shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                            >
                                {status.loading ? '...' : (
                                    <>
                                        ENVIAR <FaPaperPlane />
                                    </>
                                )}
                            </button>
                            {status.success && <p className="text-green-600 font-black text-center">{status.success}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
