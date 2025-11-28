import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Image src="/logo.png" alt="Reflex Assurances" width={150} height={40} className="h-10 w-auto object-contain" />
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Le bon Reflex pour votre Assurance !<br />
                            Courtier spécialisé pour les professionnels, nous simplifions votre gestion des risques.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-reflex-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-reflex-blue transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-reflex-blue transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="font-display font-bold text-reflex-dark mb-6">Solutions</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/assurance-flotte-automobile" className="hover:text-reflex-green transition-colors">Flotte Automobile</Link></li>
                            <li><Link href="/assurance-transport-marchandises" className="hover:text-reflex-green transition-colors">Transport Marchandises</Link></li>
                            <li><Link href="/assurance-btp-decennale" className="hover:text-reflex-green transition-colors">BTP & Décennale</Link></li>
                            <li><Link href="/assurance-iard-entreprise" className="hover:text-reflex-green transition-colors">IARD Entreprise</Link></li>
                            <li><Link href="/assurance-rc-pro" className="hover:text-reflex-green transition-colors">RC Professionnelle</Link></li>
                            <li><Link href="/assurance-dommages" className="hover:text-reflex-green transition-colors">Dommages</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-display font-bold text-reflex-dark mb-6">Ressources</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/blog" className="hover:text-reflex-green transition-colors">Blog Expert</Link></li>
                            <li><Link href="/guides" className="hover:text-reflex-green transition-colors">Guides PDF</Link></li>
                            <li><Link href="/faq" className="hover:text-reflex-green transition-colors">FAQ</Link></li>
                            <li><Link href="/glossaire" className="hover:text-reflex-green transition-colors">Glossaire Assurance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-bold text-reflex-dark mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="font-semibold text-reflex-blue">01 00 00 00 00</li>
                            <li>contact@reflex-assurances.fr</li>
                            <li>123 Avenue des Champs-Élysées<br />75008 Paris</li>
                            <li className="pt-4 text-xs text-slate-400">
                                ORIAS n°XXXXXXXX<br />
                                Sous le contrôle de l&apos;ACPR
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© 2025 Reflex Assurances. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-reflex-dark">Mentions Légales</Link>
                        <Link href="/cgu" className="hover:text-reflex-dark">CGU</Link>
                        <Link href="/confidentialite" className="hover:text-reflex-dark">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
