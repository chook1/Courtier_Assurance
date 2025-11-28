import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { Building2, Shield, Lock, Laptop } from 'lucide-react';

export default function IARDPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Multirisque Professionnelle (IARD)",
                    description: "Protection complète pour vos locaux, biens et pertes d'exploitation.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Entreprises, Commerçants, PME"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-700/50 rounded-full px-4 py-1.5 mb-6">
                            <Building2 className="w-4 h-4 text-indigo-300" />
                            <span className="text-sm font-medium text-indigo-100">Spécial Entreprise & PME</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Assurez la pérennité<br />
                            <span className="text-reflex-green">de votre activité</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Incendie, vol, dégâts des eaux, mais aussi cyber-attaques et perte d&apos;exploitation. Une protection à 360° pour vos locaux et votre bilan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Multirisque Bureaux & Locaux",
                                "Perte d'Exploitation (Indemnisation marge brute)",
                                "Bris de Machine & Matériel Informatique",
                                "Option Cyber-Risques"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-reflex-green/20 flex items-center justify-center">
                                        <Shield className="w-3 h-3 text-reflex-green" />
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
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Au-delà des murs</h2>
                        <p className="text-slate-600 text-lg">Votre entreprise est plus qu&apos;un bâtiment. C&apos;est un outil de production et des données.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Lock,
                                title: "Arrêt d'Activité",
                                desc: "Un sinistre peut stopper votre production pendant des mois. Comment payer les charges fixes ?",
                                solution: "Garantie Perte d'Exploitation jusqu'à 24 mois."
                            },
                            {
                                icon: Laptop,
                                title: "Cyber Menaces",
                                desc: "Ransomware, vol de données... Les PME sont les premières cibles.",
                                solution: "Assurance Cyber dédiée (Frais de notif + Rançon + Récupération)."
                            },
                            {
                                icon: Shield,
                                title: "Bris de Machine",
                                desc: "Une machine critique en panne ? C'est toute la chaîne qui s'arrête.",
                                solution: "Remplacement à neuf et frais supplémentaires de location."
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

            <Footer />
        </main>
    );
}
