'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Truck, Car, HardHat, Building2, Briefcase, Home, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/Button';
import { clsx } from 'clsx';

// --- Validation Schemas ---
const contactSchema = z.object({
    firstName: z.string().min(2, 'Prénom requis'),
    lastName: z.string().min(2, 'Nom requis'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(10, 'Numéro invalide'),
    consent: z.literal(true, { errorMap: () => ({ message: 'Consentement requis' }) }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// --- Steps Data ---
const ACTIVITIES = [
    { id: 'transport', label: 'Transport', icon: Truck },
    { id: 'flotte', label: 'Flotte Auto', icon: Car },
    { id: 'btp', label: 'BTP & Construction', icon: HardHat },
    { id: 'entreprise', label: 'Entreprise / PME', icon: Building2 },
    { id: 'rc-pro', label: 'RC Pro / Libéral', icon: Briefcase },
    { id: 'dommages', label: 'Immobilier', icon: Home },
];

export default function QuoteWizard() {
    const [step, setStep] = useState(1);
    const [activity, setActivity] = useState<string | null>(null);
    const [sliderValue, setSliderValue] = useState(10);

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const onSubmit = (data: ContactFormData) => {
        console.log('Form Data:', { activity, sliderValue, ...data });
        nextStep(); // Go to success step
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-2xl mx-auto">

            {/* Progress Bar */}
            <div className="h-2 bg-gray-100 w-full">
                <motion.div
                    className="h-full bg-gradient-to-r from-reflex-blue to-reflex-green"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                />
            </div>

            <div className="p-8">
                <AnimatePresence mode="wait">

                    {/* STEP 1: Activity Selection */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="text-2xl font-display font-bold text-reflex-dark mb-6 text-center">Quelle est votre activité ?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {ACTIVITIES.map((act) => (
                                    <button
                                        key={act.id}
                                        onClick={() => { setActivity(act.id); nextStep(); }}
                                        className={clsx(
                                            "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all hover:scale-105",
                                            activity === act.id
                                                ? "border-reflex-green bg-green-50 text-reflex-dark"
                                                : "border-gray-100 hover:border-reflex-blue text-slate-600"
                                        )}
                                    >
                                        <act.icon className={clsx("w-8 h-8 mb-3", activity === act.id ? "text-reflex-green" : "text-reflex-blue")} />
                                        <span className="font-medium">{act.label}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: Sizing (Dynamic based on activity) */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-display font-bold text-reflex-dark mb-2">
                                {activity === 'flotte' ? 'Combien de véhicules ?' : 'Chiffre d\'affaires annuel ?'}
                            </h3>
                            <p className="text-slate-500 mb-12">Une estimation suffit pour commencer.</p>

                            <div className="px-8 mb-12">
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={sliderValue}
                                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-reflex-green"
                                />
                                <div className="mt-4 text-4xl font-bold text-reflex-blue">
                                    {sliderValue} {activity === 'flotte' ? 'Véhicules' : 'k€ / an'}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <Button variant="ghost" onClick={prevStep}>Retour</Button>
                                <Button onClick={nextStep}>Suivant <ChevronRight className="w-4 h-4 ml-2" /></Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Needs (Checkboxes) */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="text-2xl font-display font-bold text-reflex-dark mb-6 text-center">Vos priorités ?</h3>
                            <div className="space-y-3 mb-8">
                                {['Réduire mes coûts', 'Améliorer mes garanties', 'Gestion plus simple', 'Urgence (Attestation)'].map((need) => (
                                    <label key={need} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <input type="checkbox" className="w-5 h-5 text-reflex-green rounded focus:ring-reflex-green" />
                                        <span className="ml-3 font-medium text-slate-700">{need}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <Button variant="ghost" onClick={prevStep}>Retour</Button>
                                <Button onClick={nextStep}>Suivant <ChevronRight className="w-4 h-4 ml-2" /></Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: Contact Form */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="text-2xl font-display font-bold text-reflex-dark mb-6 text-center">Recevez votre étude</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input {...register('firstName')} placeholder="Prénom" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                        {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                                    </div>
                                    <div>
                                        <input {...register('lastName')} placeholder="Nom" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input {...register('email')} placeholder="Email professionnel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input {...register('phone')} placeholder="Téléphone" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                                </div>

                                <label className="flex items-start gap-3 text-sm text-slate-500">
                                    <input type="checkbox" {...register('consent')} className="mt-1 w-4 h-4 text-reflex-green rounded" />
                                    <span>J&apos;accepte d&apos;être recontacté par Reflex Assurances pour mon devis.</span>
                                </label>
                                {errors.consent && <span className="text-red-500 text-xs block">{errors.consent.message}</span>}

                                <div className="flex justify-between pt-4">
                                    <Button type="button" variant="ghost" onClick={prevStep}>Retour</Button>
                                    <Button type="submit" className="w-full ml-4">Voir mon tarif</Button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {/* STEP 5: Success */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-reflex-green" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-reflex-dark mb-4">Demande reçue !</h3>
                            <p className="text-slate-600 mb-8">
                                Un expert spécialisé <strong>{activity?.toUpperCase()}</strong> analyse votre dossier.<br />
                                Vous recevrez votre comparatif sous 4h ouvrées.
                            </p>
                            <Button onClick={() => window.location.reload()} variant="outline">Retour à l&apos;accueil</Button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
