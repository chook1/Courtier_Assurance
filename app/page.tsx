import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/TrustBar';
import { Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero />

      <TrustBar />

      {/* WHY US SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Expertise Sectorielle", desc: "Courtiers spécialisés par métier (BTP, Transport...) avec une parfaite connaissance réglementaire." },
              { icon: Clock, title: "Réactivité Digitale", desc: "Devis qualifié sous 4h, souscription simplifiée et espace client disponible 24/7." },
              { icon: Users, title: "Accompagnement Humain", desc: "Un interlocuteur dédié gère votre dossier et vous accompagne en cas de sinistre." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-reflex-blue to-reflex-green rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-reflex-dark mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section className="py-16 bg-gradient-to-r from-reflex-blue to-reflex-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              { number: "1500+", label: "Professionnels Assurés" },
              { number: "98%", label: "Satisfaction Client" },
              { number: "< 4h", label: "Temps de Réponse" },
              { number: "20+", label: "Compagnies Partenaires" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl font-bold mb-2 font-display">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-reflex-dark mb-4">Nos Solutions par Métier</h2>
            <p className="text-slate-600 text-lg">Une protection adaptée à chaque secteur d&apos;activité.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Flotte Automobile", features: ["Gestion centralisée", "Tarifs dégressifs", "Audit gratuit"], link: "/assurance-flotte-automobile" },
              { title: "Transport Marchandises", features: ["Ad Valorem", "RC Transporteur", "Attestations 1h"], link: "/assurance-transport-marchandises" },
              { title: "BTP & Décennale", features: ["Conformité Spinetta", "Tous corps d'état", "Traitement prioritaire"], link: "/assurance-btp-decennale" },
              { title: "IARD Entreprise", features: ["Multirisque sur-mesure", "Perte d'exploitation", "Cyber-risques"], link: "/assurance-iard-entreprise" },
              { title: "RC Professionnelle", features: ["Erreurs & Omissions", "Protection juridique", "Tous secteurs"], link: "/assurance-rc-pro" },
              { title: "Dommages", features: ["Bris de machine", "Dégâts des eaux", "Événements climatiques"], link: "/assurance-dommages" },
            ].map((card, i) => (
              <Link key={i} href={card.link} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-reflex-blue/30">
                <h3 className="text-xl font-bold text-reflex-dark mb-4 group-hover:text-reflex-blue transition-colors">{card.title}</h3>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-reflex-green" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-reflex-blue font-semibold group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-reflex-dark z-0" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-0" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Prêt à Protéger Votre Activité ?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Rejoignez les 1500+ professionnels qui font confiance à Reflex Assurances pour sécuriser leur avenir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-reflex-dark font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
              Demander un devis gratuit
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Télécharger nos guides
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
