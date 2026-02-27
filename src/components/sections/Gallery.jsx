import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import local images
import img1 from '../../assets/galeria/galeria-1.jpg';
import img2 from '../../assets/galeria/galeria-2.jpg';
import img3 from '../../assets/galeria/galeria-3.jpg';
import img4 from '../../assets/galeria/galeria-4.jpg';

const galleryItems = [
    { src: img1, title: 'Castillo Aventura' },
    { src: img2, title: 'Tobogán Splash' },
    { src: img3, title: 'Cancha Pro' },
    { src: img4, title: 'Plaza Bland' },
    { src: img1, title: 'Torre Saltarina' },
    { src: img3, title: 'Estadio Kids' },
];

const Gallery = () => {
    return (
        <section id="galeria" className="py-32 bg-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-900 leading-none"
                    >
                        GALERÍA DE <span className="text-brand-orange [text-shadow:4px_4px_0_theme(colors.slate.100)]">AVENTURAS</span>
                    </motion.h2>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm mt-4 italic">
                        ¡Elegí el tuyo y empezá a saltar!
                    </p>
                </div>

                <div className="relative pt-10 pb-20">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={true}
                        className="!overflow-visible"
                    >
                        {galleryItems.map((item, index) => (
                            <SwiperSlide key={index} className="!w-[85%] sm:!w-[550px]">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative aspect-[4/5] sm:aspect-[16/10] rounded-[4rem] overflow-hidden bg-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[12px] border-white"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                    />

                                    {/* Glass Overlay Title */}
                                    <div className="absolute inset-x-5 bottom-5">
                                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/50 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter text-center leading-none">
                                                {item.title}
                                            </h4>
                                            <div className="mt-3 flex justify-center">
                                                <div className="h-1.5 w-12 bg-primary-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Badge */}
                                    <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500">
                                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-slate-900 shadow-xl border-4 border-white rotate-12">
                                            <span className="font-black text-xs leading-none text-center">¡LO <br /> QUIERO!</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .swiper-button-next, .swiper-button-prev { 
                    color: #0ea5e9 !important; 
                    background: white; 
                    width: 65px !important; 
                    height: 65px !important; 
                    border-radius: 50%; 
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1); 
                    transition: all 0.3s;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover { 
                    transform: scale(1.1);
                    background: #f8fafc;
                }
                .swiper-button-next:after, .swiper-button-prev:after { font-size: 24px !important; font-weight: 900; }
                .swiper-pagination-bullet { background: #cbd5e1 !important; opacity: 1 !important; width: 12px; height: 12px; }
                .swiper-pagination-bullet-active { background: #fb923c !important; width: 40px !important; border-radius: 10px !important; }
                @media (max-width: 640px) {
                  .swiper-button-next, .swiper-button-prev { display: none !important; }
                }
            `}} />
        </section>
    );
};

export default Gallery;
