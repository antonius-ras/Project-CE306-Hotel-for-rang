import React, { useState } from "react";

type NavLink = { id: string; label: string; href: string };
type NavbarProps = {
    logo?: React.ReactNode;
    links?: NavLink[];
};

export default function Navbar({
    
    links = [
        { id: "home", label: "Home", href: "#" },
        { id: "about", label: "About", href: "#about" },
        { id: "services", label: "Services", href: "#services" },
        { id: "contact", label: "Contact", href: "#contact" },
    ],
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center">
                        <a href="#" className="inline-flex items-center">
                            <img src="logo2.png" alt="menu" className="inline-flex  h-32 h-24" />
                            
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-6 items-center">
                        {links.map((link) => (
                            <a key={link.id} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-150" >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button aria-controls="mobile-menu" onClick={() => setIsOpen((s) => !s)} className="p-2 rounded-md ">
                            <img src="Logo.png" alt="menu" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {links.map((link) => (
                        <a key={link.id} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};