'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
    { name: 'AXA', logo: '/images/partners/axa.png' },
    { name: 'Allianz', logo: '/images/partners/allianz.png' },
    { name: 'Generali', logo: '/images/partners/generali.png' },
    { name: 'MMA', logo: '/images/partners/mma.png' },
    { name: 'MAIF', logo: '/images/partners/maif.png' },
    { name: 'Groupama', logo: '/images/partners/groupama.png' },
];

export default function TrustBar() {
    return (
        <section className="w-full bg-slate-50 border-b border-gray-100 py-6 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Trust Badges */}
                <div className="flex items-center gap-4 shrink-0">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-reflex-green animate-pulse" />
                        <span className="text-xs font-bold text-reflex-dark">
                            ORIAS n°XXXXXXXX
                        </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 hidden md:inline-block">
                        Membre PLANETE CSCA
                    </span>
                </div>

                {/* Separator */}
                <div className="hidden md:block w-px h-8 bg-slate-200" />

                {/* Infinite Carousel */}
                <div className="flex-1 overflow-hidden relative w-full">
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                    <motion.div
                        className="flex items-center gap-16 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <div key={`${partner.name}-${index}`} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                {/* Placeholder for logos until files are added */}
                                <span className="text-xl font-bold text-slate-400 font-display">{partner.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
