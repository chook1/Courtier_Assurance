import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const ARTICLES = [
    {
        slug: 'assurance-flotte-automobile-guide',
        title: "Comment optimiser le coût de votre flotte automobile ?",
        excerpt: "Découvrez nos astuces pour réduire vos primes d'assurance tout en maintenant une couverture optimale pour vos véhicules.",
        category: "Flotte Auto",
        date: "28 Nov 2025",
        author: "Sophie Martin",
        image: "bg-blue-100"
    },
    {
        slug: 'decennale-obligatoire',
        title: "Assurance Décennale : Tout ce qu'il faut savoir",
        excerpt: "Obligations légales, travaux couverts, durée de validité... Le point complet pour les artisans du BTP.",
        category: "BTP",
        date: "25 Nov 2025",
        author: "Marc Dubois",
        image: "bg-orange-100"
    },
    {
        slug: 'cyber-risques-pme',
        title: "Cyber-attaques : Les PME en première ligne",
        excerpt: "Pourquoi et comment vous protéger contre les ransomwares et le vol de données en 2025.",
        category: "Entreprise",
        date: "20 Nov 2025",
        author: "Julie Roux",
        image: "bg-indigo-100"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-reflex-dark mb-6">Le Blog de l&apos;Assurance Pro</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Conseils, décryptages et actualités pour mieux protéger votre activité.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ARTICLES.map((article) => (
                            <article key={article.slug} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className={`h-48 ${article.image} w-full`} />
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="bg-slate-100 px-2 py-1 rounded font-medium text-reflex-blue">{article.category}</span>
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-reflex-dark mb-3 line-clamp-2">
                                        <Link href={`/blog/${article.slug}`} className="hover:text-reflex-blue transition-colors">
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                                                <User className="w-3 h-3" />
                                            </div>
                                            {article.author}
                                        </div>
                                        <Link href={`/blog/${article.slug}`} className="text-reflex-green font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            Lire <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
