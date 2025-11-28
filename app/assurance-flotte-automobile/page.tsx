import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { Check, Car, Shield, AlertTriangle } from 'lucide-react';

export default function FlottePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Flotte Automobile Professionnelle",
                    description: "Assurance complète pour parcs automobiles entreprise : tarifs dégressifs, gestion simplifiée.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Gestionnaires de flotte, Chefs d'entreprise"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-flotte.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 mb-6">
                            <Car className="w-4 h-4 text-reflex-blue" />
                            <span className="text-sm font-medium text-blue-100">Spécial Flotte & Parc Auto</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Assurance Flotte Automobile<br />
                            <span className="text-reflex-green">Professionnelle</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Gérez votre parc en toute sérénité. Tarifs négociés, gestion simplifiée et audit gratuit de vos contrats actuels.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Tarifs dégressifs dès 5 véhicules",
                                "Gestion centralisée (Cartes vertes, Sinistres)",
                                "Véhicules de remplacement inclus",
                                "Assistance 0km 24/7"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-reflex-green/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-reflex-green" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <QuoteWizard />
                    </div>
                </div>
            </section>

            {/* PAIN POINTS & SOLUTIONS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Optimisez la gestion de votre parc</h2>
                        <p className="text-slate-600 text-lg">Une flotte mal assurée coûte cher. Passez à la vitesse supérieure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AlertTriangle,
                                title: "Coûts Incontrôlés",
                                desc: "Les primes augmentent chaque année sans justification claire ?",
                                solution: "Audit gratuit pour réduire vos coûts jusqu'à -20%."
                            },
                            {
                                icon: Shield,
                                title: "Gestion Chronophage",
                                desc: "Trop de temps perdu à gérer les cartes vertes et les sinistres ?",
                                solution: "Espace client digital pour tout gérer en 1 clic."
                            },
                            {
                                icon: Car,
                                title: "Immobilisation",
                                desc: "Un véhicule à l'arrêt, c'est du chiffre d'affaires en moins.",
                                solution: "Véhicule de remplacement immédiat garanti."
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-reflex-blue/30 transition-colors">
                                <card.icon className="w-12 h-12 text-reflex-blue mb-6" />
                                <h3 className="text-xl font-bold text-reflex-dark mb-3">{card.title}</h3>
                                <p className="text-slate-600 mb-4 text-sm">{card.desc}</p>
                                <div className="pt-4 border-t border-slate-200">
                                    <p className="text-sm font-semibold text-reflex-green">Solution Reflex : {card.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARATOR TABLE */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                    <h2 className="text-3xl font-display font-bold text-center text-reflex-dark mb-12">Pourquoi choisir Reflex Assurances ?</h2>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-reflex-dark text-white">
                                    <th className="p-6 font-semibold">Services</th>
                                    <th className="p-6 font-semibold bg-reflex-dark/90">Assurance Classique</th>
                                    <th className="p-6 font-semibold bg-reflex-green text-reflex-dark">Reflex Assurances</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { label: "Audit de parc", classic: "Payant ou inexistant", reflex: "Gratuit & Illimité" },
                                    { label: "Gestion sinistres", classic: "Plateforme téléphonique", reflex: "Interlocuteur dédié" },
                                    { label: "Délai carte verte", classic: "3 à 5 jours", reflex: "Immédiat (Digital)" },
                                    { label: "Négociation tarifaire", classic: "Annuelle", reflex: "Permanente" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50">
                                        <td className="p-6 font-medium text-slate-700">{row.label}</td>
                                        <td className="p-6 text-slate-500">{row.classic}</td>
                                        <td className="p-6 font-bold text-reflex-dark">{row.reflex}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
