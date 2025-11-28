import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-reflex-dark text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contactez-nous</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Une question ? Un projet ? Nos experts sont à votre écoute pour vous accompagner.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-display font-bold text-reflex-dark mb-6">Nos Coordonnées</h2>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-reflex-green/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-reflex-green" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-reflex-dark">Téléphone</h3>
                                    <p className="text-slate-600">01 00 00 00 00</p>
                                    <p className="text-sm text-slate-500">Du lundi au vendredi, 9h-18h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-reflex-blue/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-reflex-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-reflex-dark">Email</h3>
                                    <p className="text-slate-600">contact@reflex-assurances.fr</p>
                                    <p className="text-sm text-slate-500">Réponse sous 24h ouvrées</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-reflex-dark">Adresse</h3>
                                    <p className="text-slate-600">123 Avenue des Champs-Élysées<br />75008 Paris</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-reflex-dark mb-2 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Horaires d&apos;ouverture
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex justify-between"><span>Lundi - Vendredi</span> <span>09:00 - 18:00</span></li>
                                    <li className="flex justify-between"><span>Samedi</span> <span>Sur rendez-vous</span></li>
                                    <li className="flex justify-between"><span>Dimanche</span> <span>Fermé</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-display font-bold text-reflex-dark mb-6">Envoyez-nous un message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                                        <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                                        <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Sujet</label>
                                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none bg-white">
                                        <option>Demande de devis</option>
                                        <option>Suivi de dossier</option>
                                        <option>Partenariat</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-reflex-blue outline-none"></textarea>
                                </div>
                                <Button className="w-full">Envoyer le message</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
