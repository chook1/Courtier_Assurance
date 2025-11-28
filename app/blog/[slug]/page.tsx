import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <article className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">

                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-reflex-blue mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="bg-reflex-green/10 text-reflex-dark px-3 py-1 rounded-full font-medium">Catégorie</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 28 Nov 2025</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Par Sophie Martin</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-reflex-dark mb-8 leading-tight">
                            Titre de l&apos;article : {params.slug}
                        </h1>
                        <div className="w-full h-64 md:h-96 bg-slate-100 rounded-2xl mb-8"></div>
                    </header>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8">
                            Ceci est un exemple de contenu d&apos;article. Dans une version finale, ce contenu serait chargé dynamiquement depuis un fichier Markdown ou un CMS headless.
                        </p>

                        <h2>Pourquoi est-ce important ?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <blockquote>
                            &quot;Une bonne assurance est celle dont on ne se rend compte de la valeur que lorsqu&apos;on en a besoin.&quot;
                        </blockquote>

                        <h2>Les points clés à retenir</h2>
                        <ul>
                            <li>Premier point important</li>
                            <li>Deuxième point crucial</li>
                            <li>Troisième point essentiel</li>
                        </ul>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-slate-500 font-medium">Partager cet article</div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors">
                                <Share2 className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>

                </div>
            </article>

            <Footer />
        </main>
    );
}
