import React from 'react';
import { motion } from 'framer-motion';
import { FaFortAwesome, FaBiohazard, FaFutbol, FaChild } from 'react-icons/fa6';

const services = [
    {
        title: 'Castillos',
        description: 'Varios tamaños y temas divertidos para niños.',
        icon: <FaFortAwesome />,
        bgColor: 'bg-primary-500',
        textColor: 'text-primary-600',
        label: '¡Súper Fun!'
    },
    {
        title: 'Toboganes',
        description: 'Bajadas rápidas con mucha adrenalina y cuidado.',
        icon: <FaBiohazard />,
        bgColor: 'bg-brand-orange',
        textColor: 'text-orange-600',
        label: '¡Veloz!'
    },
    {
        title: 'Deportivos',
        description: 'Canchas inflables para jugar al máximo nivel.',
        icon: <FaFutbol />,
        bgColor: 'bg-brand-green',
        textColor: 'text-green-600',
        label: '¡Gooool!'
    },
    {
        title: 'Baby Zone',
        description: 'Plazas blandas para los exploradores chiquitos.',
        icon: <FaChild />,
        bgColor: 'bg-brand-pink',
        textColor: 'text-pink-600',
        label: '¡Seguro!'
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-[100px] -mr-32 -mt-32" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border-2 border-slate-100 mb-6"
                    >
                        <span className="text-primary-600 font-bold text-sm uppercase tracking-widest italic">¿Qué estás buscando?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-900"
                    >
                        NUESTRA <span className="text-primary-500 [text-shadow:4px_4px_0_theme(colors.slate.100)]">FLOTA</span> DIVERTIDA
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="group relative"
                        >
                            {/* The Card */}
                            <div className="bg-white rounded-[4rem] p-12 border-b-[12px] border-slate-200 shadow-xl group-hover:border-primary-400 group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">

                                <div className={`w-28 h-28 rounded-full ${service.bgColor} flex items-center justify-center text-5xl text-white mb-8 shadow-inner border-4 border-white transform group-hover:rotate-12 transition-transform`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter text-slate-900 leading-none">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 font-bold leading-tight mb-8">
                                    {service.description}
                                </p>

                                <span className={`text-xs font-black uppercase tracking-widest ${service.textColor} bg-slate-50 px-4 py-2 rounded-full`}>
                                    {service.label}
                                </span>
                            </div>

                            {/* Decorative shadow balloon */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-slate-900/5 blur-xl group-hover:w-[90%] transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
