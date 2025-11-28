'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const SOLUTIONS = [
    { name: 'Flotte Automobile', href: '/assurance-flotte-automobile' },
    { name: 'Transport Marchandises', href: '/assurance-transport-marchandises' },
    { name: 'BTP & Décennale', href: '/assurance-btp-decennale' },
    { name: 'IARD Entreprise', href: '/assurance-iard-entreprise' },
    { name: 'RC Professionnelle', href: '/assurance-rc-pro' },
    { name: 'Dommages', href: '/assurance-dommages' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Reflex Assurances" width={180} height={50} className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-reflex-dark font-medium hover:text-reflex-blue transition-colors py-4"
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            Solutions <ChevronDown className="w-4 h-4" />
                        </button>

                        {/* Mega Menu */}
                        <AnimatePresence>
                            {isSolutionsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 p-2 overflow-hidden"
                                    onMouseEnter={() => setIsSolutionsOpen(true)}
                                    onMouseLeave={() => setIsSolutionsOpen(false)}
                                >
                                    {SOLUTIONS.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-reflex-blue rounded-lg transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/a-propos" className="text-reflex-dark font-medium hover:text-reflex-blue transition-colors">Qui sommes-nous</Link>
                    <Link href="/blog" className="text-reflex-dark font-medium hover:text-reflex-blue transition-colors">Blog</Link>
                    <Link href="/contact" className="text-reflex-dark font-medium hover:text-reflex-blue transition-colors">Contact</Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="tel:0100000000" className="flex items-center gap-2 text-reflex-dark font-semibold hover:text-reflex-blue">
                        <Phone className="w-5 h-5" />
                        <span>01 00 00 00 00</span>
                    </a>
                    <Button size="sm">Espace Client</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-reflex-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Nos Solutions</p>
                                {SOLUTIONS.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-2 text-lg text-reflex-dark font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <hr className="border-gray-100" />
                            <Link href="/a-propos" className="block py-2 text-lg text-reflex-dark font-medium">Qui sommes-nous</Link>
                            <Link href="/blog" className="block py-2 text-lg text-reflex-dark font-medium">Blog</Link>
                            <Link href="/contact" className="block py-2 text-lg text-reflex-dark font-medium">Contact</Link>
                            <div className="pt-4">
                                <Button className="w-full justify-center">Demander un devis</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
