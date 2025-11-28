import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CGUPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-slate-50 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-display font-bold text-reflex-dark mb-2">Conditions Générales d&apos;Utilisation</h1>
                    <p className="text-slate-500">Dernière mise à jour : 28/11/2025</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">

                    <h3>1. Objet</h3>
                    <p>
                        Les présentes Conditions Générales d&apos;Utilisation ont pour objet de définir les modalités de mise à disposition des services du site Reflex Assurances et les conditions d&apos;utilisation du service par l&apos;Utilisateur.
                    </p>

                    <h3>2. Accès au service</h3>
                    <p>
                        Le Service est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à internet. Tous les coûts afférents à l&apos;accès au Service, que ce soient les frais matériels, logiciels ou d&apos;accès à internet sont exclusivement à la charge de l&apos;utilisateur.
                    </p>

                    <h3>3. Responsabilité</h3>
                    <p>
                        Les informations diffusées sur le site Reflex Assurances proviennent de sources réputées fiables. Toutefois, Reflex Assurances ne peut garantir l&apos;exactitude ou la pertinence de ces données. En outre, les informations mises à disposition sur ce site le sont uniquement à titre purement informatif et ne sauraient constituer en aucun cas un conseil ou une recommandation de quelque nature que ce soit.
                    </p>

                    <h3>4. Liens hypertextes</h3>
                    <p>
                        Le site Reflex Assurances peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site Reflex Assurances.
                    </p>

                </div>
            </section>

            <Footer />
        </main>
    );
}
