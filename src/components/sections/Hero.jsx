import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCalendarDays } from 'react-icons/hi2';
import { FaShieldHeart, FaSprayCanSparkles } from 'react-icons/fa6';
import config from '../../config/config';
import heroImg from '../../assets/hero-inflable.png';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-100 via-white to-brand-yellow/30">
            {/* Background High-Impact Decor */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-400/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px] -z-10" />

            <div className="absolute top-40 left-10 w-4 h-4 rounded-full bg-brand-red animate-ping" />
            <div className="absolute bottom-40 right-1/4 w-6 h-6 rounded-full bg-primary-500 animate-bounce" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Clean Left Side */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 bg-primary-50 rounded-full border border-primary-100 mb-8"
                        >
                            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em]">Los más divertidos de Bs.As.</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-7xl lg:text-[7rem] font-normal leading-[0.9] text-slate-900 mb-8"
                        >
                            Alquiler de<br />
                            <span className="text-primary-600 uppercase font-black underline decoration-brand-yellow decoration-8 underline-offset-8">Inflables</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-3xl text-brand-orange font-bold mb-10 leading-snug"
                        >
                            ¡Diversión asegurada para tu fiesta!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                        >
                            <a href="#servicios" className="btn-cta group h-20 px-12 shadow-2xl">
                                <span>VER JUEGOS</span>
                                <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>

                        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center lg:justify-start gap-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                                    <FaShieldHeart className="text-2xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-black text-slate-900 leading-none lowercase" style={{ fontFamily: 'var(--font-sans)' }}>100%</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seguro</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green">
                                    <FaSprayCanSparkles className="text-2xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-black text-slate-900 leading-none">Limpios</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Limpios</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Simple & Bold Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Inflable Pro"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Minimalist Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-2xl z-20 hidden sm:flex items-center gap-4 border border-slate-50">
                            <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-slate-900 shadow-inner">
                                <HiCalendarDays className="text-3xl" />
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-900 text-sm leading-none uppercase">Reserva Hoy</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sin demoras</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
