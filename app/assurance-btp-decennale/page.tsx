import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { HardHat, Shield, Clock, FileText } from 'lucide-react';

export default function BTPPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Décennale et BTP",
                    description: "Garantie Décennale et RC Pro pour artisans et entreprises du bâtiment.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Artisans, Entreprises BTP"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-900/20"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-orange-900/50 border border-orange-700/50 rounded-full px-4 py-1.5 mb-6">
                            <HardHat className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-medium text-orange-100">Spécial BTP & Construction</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Construisez l&apos;esprit tranquille,<br />
                            <span className="text-reflex-green">Assurez votre avenir</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Décennale, RC Pro, Dommages Ouvrage... Obtenez votre attestation en 24h pour ouvrir vos chantiers sans attendre.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Garantie Décennale (10 ans)",
                                "Responsabilité Civile Professionnelle",
                                "Protection Juridique incluse",
                                "Tous corps d'état couverts"
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
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Les impératifs du BTP</h2>
                        <p className="text-slate-600 text-lg">Sur un chantier, pas de place pour l&apos;improvisation. Votre assurance doit suivre le rythme.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "Attestation Urgente",
                                desc: "Un maître d'ouvrage vous réclame une attestation avant de signer le devis ?",
                                solution: "Attestation provisoire délivrée dans l'heure."
                            },
                            {
                                icon: Shield,
                                title: "Conformité Spinetta",
                                desc: "La loi est stricte. Une mauvaise couverture peut engager votre responsabilité personnelle.",
                                solution: "Garanties 100% conformes aux obligations légales."
                            },
                            {
                                icon: Clock,
                                title: "Sinistres Longs",
                                desc: "Les expertises construction peuvent durer des années.",
                                solution: "Défense recours et avance de frais pour ne pas bloquer votre trésorerie."
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
