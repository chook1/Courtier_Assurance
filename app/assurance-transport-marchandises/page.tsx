import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteWizard from '@/components/QuoteWizard';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { Truck, Shield, AlertTriangle, FileCheck } from 'lucide-react';

export default function TransportPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <SchemaOrg
                type="FinancialProduct"
                data={{
                    name: "Assurance Transport de Marchandises",
                    description: "Assurance Ad Valorem et RC Transporteur pour les professionnels du transport.",
                    brand: {
                        "@type": "Brand",
                        name: "Reflex Assurances"
                    },
                    audience: {
                        "@type": "BusinessAudience",
                        audienceType: "Transporteurs, Logisticiens"
                    }
                }}
            />

            {/* HERO VERTICAL */}
            <section className="bg-reflex-dark text-white pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 mb-6">
                            <Truck className="w-4 h-4 text-reflex-blue" />
                            <span className="text-sm font-medium text-blue-100">Spécial Transporteurs & Logisticiens</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Protégez vos chargements,<br />
                            <span className="text-reflex-green">Sécurisez votre responsabilité</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg">
                            Vol, avarie, retard... Ne laissez pas un incident de transport mettre en péril votre entreprise. Certificats d&apos;assurance délivrés instantanément.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Responsabilité Civile Contractuelle",
                                "Assurance Ad Valorem (Tous risques)",
                                "Cabotage inclus",
                                "Gestion des sinistres dédiée"
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
                        <h2 className="text-3xl font-display font-bold text-reflex-dark mb-4">Les défis du transport moderne</h2>
                        <p className="text-slate-600 text-lg">Le secteur du transport est exposé à des risques croissants. Une couverture standard ne suffit plus.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AlertTriangle,
                                title: "Vols de Marchandises",
                                desc: "Les vols de fret ont augmenté de 15% en 2024. Votre RC classique plafonne souvent les indemnisations.",
                                solution: "Notre garantie Ad Valorem couvre la valeur réelle de la marchandise."
                            },
                            {
                                icon: FileCheck,
                                title: "Exigences Chargeurs",
                                desc: "Vos clients exigent des plafonds de garantie de plus en plus élevés pour vous confier leurs lots.",
                                solution: "Attestations personnalisables jusqu'à 5M€ en quelques clics."
                            },
                            {
                                icon: Shield,
                                title: "Responsabilité Étendue",
                                desc: "La faute inexcusable peut faire sauter les limitations de responsabilité légales.",
                                solution: "Protection juridique et défense recours incluses."
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
                    <h2 className="text-3xl font-display font-bold text-center text-reflex-dark mb-12">RC Transporteur vs Ad Valorem</h2>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-reflex-dark text-white">
                                    <th className="p-6 font-semibold">Critères</th>
                                    <th className="p-6 font-semibold bg-reflex-dark/90">RC Transporteur (Base)</th>
                                    <th className="p-6 font-semibold bg-reflex-green text-reflex-dark">Ad Valorem (Recommandé)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { label: "Base d'indemnisation", rc: "Poids (Limites légales)", ad: "Valeur réelle déclarée" },
                                    { label: "Cas de force majeure", rc: "Non couvert", ad: "Couvert" },
                                    { label: "Plafond par défaut", rc: "33€ / kg (Loti)", ad: "Valeur de la facture" },
                                    { label: "Gestion sinistre", rc: "Longue (Preuve de faute)", ad: "Rapide (Sans recherche de responsabilité)" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50">
                                        <td className="p-6 font-medium text-slate-700">{row.label}</td>
                                        <td className="p-6 text-slate-500">{row.rc}</td>
                                        <td className="p-6 font-bold text-reflex-dark">{row.ad}</td>
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
