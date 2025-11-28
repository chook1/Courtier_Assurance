import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-slate-50 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-display font-bold text-reflex-dark mb-2">Mentions Légales</h1>
                    <p className="text-slate-500">Dernière mise à jour : 28/11/2025</p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">

                    <h3>1. Éditeur du site</h3>
                    <p>
                        Le site Reflex Assurances est édité par la société REFLEX COURTAGE, SAS au capital de 10 000 €.<br />
                        Siège social : 123 Avenue des Champs-Élysées, 75008 Paris.<br />
                        RCS Paris B 000 000 000.<br />
                        Numéro de TVA Intracommunautaire : FR 00 000 000 000.
                    </p>

                    <h3>2. Inscription ORIAS</h3>
                    <p>
                        Reflex Assurances est immatriculé au registre unique des intermédiaires en assurance, banque et finance (ORIAS) sous le numéro XXXXXXXX (consultable sur www.orias.fr) en qualité de Courtier en assurance.
                    </p>
                    <p>
                        Sous le contrôle de l&apos;Autorité de Contrôle Prudentiel et de Résolution (ACPR) : 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.
                    </p>

                    <h3>3. Hébergement</h3>
                    <p>
                        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                    </p>

                    <h3>4. Propriété Intellectuelle</h3>
                    <p>
                        L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>

                    <h3>5. Protection des données personnelles</h3>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à : dpo@reflex-assurances.fr.
                    </p>

                </div>
            </section>

            <Footer />
        </main>
    );
}
