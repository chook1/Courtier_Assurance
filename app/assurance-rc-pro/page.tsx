import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { Briefcase, Shield, Scale, Users } from 'lucide-react';

export default function RCProPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Responsabilité Civile Professionnelle (RC Pro)",
                    description: "Couverture des erreurs, fautes et omissions pour les professions réglementées et libérales.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Professions Libérales, Consultants, Indépendants"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/20"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-700/50 rounded-full px-4 py-1.5 mb-6">
                            <Briefcase className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-100">Spécial Professions Libérales & Conseil</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            L&apos;assurance sur-mesure<br />
                            <span className="text-reflex-green">des indépendants</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Erreur de conseil, omission, retard... Votre responsabilité peut être engagée à tout moment. Protégez votre réputation et votre patrimoine.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "RC Exploitation & RC Professionnelle",
                                "Protection Juridique Étendue",
                                "Frais de retrait de la vie des affaires",
                                "E-réputation"
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
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Votre expertise est votre risque</h2>
                        <p className="text-slate-600 text-lg">Plus votre conseil a de la valeur, plus les conséquences d&apos;une erreur peuvent être lourdes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Scale,
                                title: "Mise en cause",
                                desc: "Un client insatisfait vous réclame des dommages et intérêts pour un retard ou un défaut de conseil.",
                                solution: "Prise en charge des frais de défense et des indemnisations."
                            },
                            {
                                icon: Users,
                                title: "Faute d'un collaborateur",
                                desc: "Vous êtes responsable des actes de vos salariés ou sous-traitants.",
                                solution: "Couverture étendue à l'ensemble de vos préposés."
                            },
                            {
                                icon: Shield,
                                title: "Protection Juridique",
                                desc: "Un litige commercial ou prud'homal ? Les frais d'avocat s'envolent vite.",
                                solution: "Accompagnement juridique et prise en charge des honoraires."
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
