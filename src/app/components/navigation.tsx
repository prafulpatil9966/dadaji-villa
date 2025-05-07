'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/abou' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Restaurant', href: '/restaurant' },
    { label: 'Contact', href: '/contact' },
];


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/img/logo-light.png" alt="Logo" width={120} height={40} />
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Main Menu */}
                <ul className={`lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`font-medium ${pathname === href ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
