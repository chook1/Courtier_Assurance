import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { Home, Shield, CloudRain, Zap } from 'lucide-react';

export default function DommagesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Dommages aux Biens",
                    description: "Couverture incendie, dégâts des eaux et événements climatiques pour les professionnels.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Propriétaires, Locataires professionnels"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800/50"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-slate-700/50 border border-slate-600/50 rounded-full px-4 py-1.5 mb-6">
                            <Home className="w-4 h-4 text-slate-300" />
                            <span className="text-sm font-medium text-slate-200">Spécial Immobilier & Biens</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Protégez votre patrimoine<br />
                            <span className="text-reflex-green">immobilier & mobilier</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Incendie, tempête, inondation... Des garanties solides pour reconstruire à l&apos;identique et redémarrer sans attendre.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Incendie & Risques Annexes",
                                "Dégâts des Eaux & Gel",
                                "Événements Climatiques (Tempête, Grêle)",
                                "Catastrophes Naturelles"
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
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Les aléas climatiques s&apos;intensifient</h2>
                        <p className="text-slate-600 text-lg">Votre local est votre outil de travail. Sa protection est vitale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: CloudRain,
                                title: "Inondations",
                                desc: "Les épisodes cévenols et crues soudaines sont de plus en plus fréquents.",
                                solution: "Garantie inondation incluse avec franchise adaptée."
                            },
                            {
                                icon: Zap,
                                title: "Incendie",
                                desc: "Un court-circuit peut tout détruire en quelques minutes.",
                                solution: "Reconstruction à neuf (valeur à neuf) pour le bâtiment et le contenu."
                            },
                            {
                                icon: Shield,
                                title: "Vandalisme",
                                desc: "Bris de glace, tags, détériorations volontaires...",
                                solution: "Prise en charge des réparations et de la sécurisation provisoire."
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
