import React, { useState } from "react";
import { CiGrid2H,CiSearch } from "react-icons/ci";

type NavLink = {
    id: string
    label: string;
    href: string
};

type NavbarProps = {
    logo?: React.ReactNode;
    links?: NavLink[];
};

export default function Navbar({

    links = [
        { id: "home", label: "Home", href: "/" },
        { id: "about", label: "About", href: "#about" },
        { id: "services", label: "Services", href: "#services" },
        { id: "contact", label: "Contact", href: "#contact" },
    ],
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const SearchBar = () => (
        <div className="relative flex items-center w-full">
            <input 
                className="w-full pl-5 pr-12 py-2 rounded-full shadow-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="ค้นหาโรงแรม..."
            />
            <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 rounded-r-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
                {/* ไอคอนค้นหา (SVG) */}
                <CiSearch />
            </button>
        </div>
    );

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#" className="inline-flex items-center">
                            <img src="logo_color.png" alt="menu" className="inline-flex  h-32 h-24" />
                            
                        </a>
                    </div>
                    
                    {/* 💡 2. สร้าง Container ฝั่งขวา (เมนู + ค้นหา + ปุ่ม Mobile) */}
                    <div className="flex items-center space-x-6">
                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex space-x-6 items-center">
                            {links.map((link) => (
                                <a key={link.id} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-150" >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* 💡 3. Search Bar (แสดงเฉพาะจอ Desktop) */}
                        <div className="hidden md:flex">
                            <SearchBar />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button aria-controls="mobile-menu" onClick={() => setIsOpen((s) => !s)} className="p-2 bg-blue-600 rounded-md ">
                                <CiGrid2H />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div id="mobile-menu" className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {/* Mobile Links */}
                    {links.map((link) => (
                        <a key={link.id} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150">
                            {link.label}
                        </a>
                    ))}
                    {/* 💡 4. Search Bar (แสดงเฉพาะในเมนู Mobile) */}
                    <div className="px-3 pt-3 pb-2">
                        <SearchBar />
                    </div>
                </div>
            </div>
            
            {/* 💡 5. ลบ Search Bar เก่าที่อยู่ท้ายสุดออกไป */}

        </header>
    );
};