import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiSearch } from "react-icons/hi";

type NavLink = {
    id: string;
    label: string;
    href: string;
};

type NavbarProps = {
    logo?: React.ReactNode;
    links?: NavLink[];
};

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearchSubmit: (e: React.FormEvent) => void;
};


const SearchBar: React.FC<SearchBarProps> = ({
    searchQuery,
    setSearchQuery,
    handleSearchSubmit
}) => (
    <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
        <input
            className="w-full pl-5 pr-12 py-2 rounded-full shadow-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            type="text"
            placeholder="ค้นหาโรงแรม..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-green-100 text-green-700 hover:bg-green-200 focus:outline-none transition-colors">
            <HiSearch />
        </button>
    </form>
);

export default function Navbar({
    links = [
        { id: "home", label: "Home", href: "/" },
        { id: "services", label: "Services", href: "#services" },
        { id: "contact", label: "Contact", href: "#contact" }, // Contact อยู่ในลิสต์นี้แล้ว
    ],
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery.trim()}`);
            setSearchQuery("");
            setIsOpen(false);
        }
    };

    // ✅ ฟังก์ชันจัดการการคลิกเมนู (รวม Logic เลื่อนหา Footer ไว้ที่นี่)
    const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
        // 1. ถ้าเป็นปุ่ม Contact ให้เลื่อนลงล่างสุด
        if (link.id === 'contact') {
            e.preventDefault();
            // วิธีที่ 1: หา ID (แนะนำถ้า Footer มี id="contact")
            const footer = document.getElementById('contact');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
            } else {
                // วิธีที่ 2: หรือจะเลื่อนไปล่างสุดของจอเลยก็ได้ (Backup plan)
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }
        setIsOpen(false);
    };

    return (
        <header className="bg-white shadow-sm w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="hover:scale-105 transition-transform duration-300 ease-in-out inline-flex items-center">
                            <img src="/logo_color.png" alt="Logo" className="h-28 w-auto object-contain" />
                        </a>
                    </div>

                    {/* Right Side Container */}
                    <div className="flex items-center space-x-6">
                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {links.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)} // ✅ เรียกใช้ฟังก์ชันตรงนี้
                                    className="text-gray-600 hover:text-green-600 font-medium hover:scale-105 transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Search Bar (Desktop) */}
                        <div className="hidden md:flex w-64">
                            <SearchBar
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                handleSearchSubmit={handleSearchSubmit}
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                aria-controls="mobile-menu"
                                onClick={() => setIsOpen((s) => !s)}
                                className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors focus:outline-none"
                            >
                                <HiMenu className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t ${
                    isOpen ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {/* Mobile Links */}
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link)} // ✅ เรียกใช้ฟังก์ชันตรงนี้เช่นกัน
                            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    {/* Search Bar (Mobile) */}
                    <div className="pt-4 px-1">
                        <SearchBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            handleSearchSubmit={handleSearchSubmit}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}