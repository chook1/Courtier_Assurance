import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* HERO */}
            <section className="bg-reflex-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Notre Mission</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Simplifier l&apos;assurance pour les entrepreneurs et les protéger durablement,
                        afin qu&apos;ils puissent se concentrer sur ce qui compte vraiment : leur activité.
                    </p>
                </div>
            </section>

            {/* STORY */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-6">Plus qu&apos;un courtier, un partenaire</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                Fondé en 2020, Reflex Assurances est né d&apos;un constat simple : l&apos;assurance professionnelle est souvent trop complexe, trop lente et mal adaptée aux réalités des PME.
                            </p>
                            <p>
                                Nous avons décidé de changer la donne en alliant l&apos;expertise du courtage traditionnel à la fluidité du digital. Notre objectif ? Offrir à chaque professionnel, du chauffeur livreur au chef d&apos;entreprise du BTP, une couverture sur-mesure en quelques clics, sans jamais sacrifier le conseil humain.
                            </p>
                            <p>
                                Aujourd&apos;hui, nous sommes fiers d&apos;accompagner plus de 1500 professionnels partout en France.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                        {/* Placeholder for team/office image */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                            <Users className="w-16 h-16 opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Nos Valeurs</h2>
                        <p className="text-slate-600">Ce qui nous guide au quotidien pour vous servir.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Expertise",
                                desc: "Nous ne sommes pas des généralistes. Chaque conseiller est expert dans son domaine (Transport, BTP, IARD) pour vous apporter la réponse technique juste."
                            },
                            {
                                icon: Target,
                                title: "Transparence",
                                desc: "Pas de jargon, pas de petites lignes cachées. Nous vous expliquons clairement ce qui est couvert et ce qui ne l'est pas."
                            },
                            {
                                icon: Award,
                                title: "Réactivité",
                                desc: "Le temps des entrepreneurs est précieux. Nous nous engageons à répondre à toutes les demandes sous 4h ouvrées."
                            }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 mx-auto bg-reflex-green/10 rounded-full flex items-center justify-center mb-6">
                                    <val.icon className="w-8 h-8 text-reflex-green" />
                                </div>
                                <h3 className="text-xl font-bold text-reflex-dark mb-4">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY FIGURES */}
            <section className="py-20 bg-reflex-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "1500+", label: "Clients satisfaits" },
                            { number: "20+", label: "Partenaires assureurs" },
                            { number: "15", label: "Experts dédiés" },
                            { number: "4.9/5", label: "Note moyenne" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-bold font-display text-reflex-green mb-2">{stat.number}</div>
                                <div className="text-slate-300 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
