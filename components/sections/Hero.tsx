'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Car, HardHat, Building2, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';
import QuoteWizard from '../QuoteWizard';

const PERSONAS = [
    {
        id: 'transport',
        label: 'Transport',
        icon: Truck,
        title: "Protégez vos chargements, Sécurisez votre responsabilité",
        subtitle: "Assurance Ad Valorem et RC Transporteur pour les professionnels de la route.",
        bg: "bg-blue-900"
    },
    {
        id: 'flotte',
        label: 'Flotte Auto',
        icon: Car,
        title: "Gérez votre parc automobile en toute sérénité",
        subtitle: "Tarifs dégressifs dès 5 véhicules. Gestion centralisée et assistance 24/7.",
        bg: "bg-slate-800"
    },
    {
        id: 'btp',
        label: 'BTP',
        icon: HardHat,
        title: "Construisez l'esprit tranquille",
        subtitle: "Décennale et RC Pro pour artisans et entreprises du bâtiment. Attestation immédiate.",
        bg: "bg-orange-900"
    },
    {
        id: 'entreprise',
        label: 'Entreprise',
        icon: Building2,
        title: "Assurez la pérennité de votre activité",
        subtitle: "Multirisque professionnelle, Perte d'exploitation et Cyber-risques.",
        bg: "bg-indigo-900"
    },
    {
        id: 'artisan',
        label: 'Artisan',
        icon: Briefcase,
        title: "L'assurance sur-mesure des indépendants",
        subtitle: "RC Pro, Protection juridique et Santé pour les pros.",
        bg: "bg-emerald-900"
    },
];

export default function Hero() {
    const [activePersona, setActivePersona] = useState(PERSONAS[0]);

    return (
        <section className="relative min-h-[700px] flex items-center overflow-hidden bg-reflex-dark text-white pt-12">

            {/* Background with Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePersona.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${activePersona.bg} opacity-50 z-0`}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-reflex-dark via-reflex-dark/90 to-transparent z-0" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8">

                    {/* Persona Selector */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {PERSONAS.map((persona) => (
                            <button
                                key={persona.id}
                                onClick={() => setActivePersona(persona)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activePersona.id === persona.id
                                    ? 'bg-reflex-green border-reflex-green text-reflex-dark font-bold'
                                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                                    }`}
                            >
                                <persona.icon className="w-4 h-4" />
                                <span className="text-sm">{persona.label}</span>
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activePersona.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                            {activePersona.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            {activePersona.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="shadow-lg shadow-reflex-green/20">
                                Obtenir mon tarif
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-reflex-dark">
                                Parler à un expert
                            </Button>
                        </div>
                    </motion.div>

                    <div className="flex items-center gap-8 pt-8 border-t border-white/10 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            Devis en 3 min
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            Expertise Courtier
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            Partenaires de confiance
                        </div>
                    </div>

                </div>

                {/* Right Content (Wizard Preview or Image) */}
                <div className="hidden lg:block relative">
                    {/* We can put the Wizard here directly or a visual representation */}
                    <div className="relative z-10 transform translate-y-8">
                        <QuoteWizard />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-reflex-blue rounded-full filter blur-[100px] opacity-20 animate-pulse" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-reflex-green rounded-full filter blur-[100px] opacity-20 animate-pulse" />
                </div>

            </div>
        </section>
    );
}
