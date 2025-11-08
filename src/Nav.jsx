import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", link: "#Beranda" },
    { name: "Produk", link: "#Produk" },
    { name: "Galeri", link: "#Galeri" },
    { name: "Kontak", link: "#Kontak" },
    { name: "Pesantren", link: "#Pesantren" }
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-white/70 shadow-sm
        border-b border-white/20
      "
    >
      <div className="flex justify-between items-center p-2 px-4 md:px-8">
        {/* Kiri */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-14 h-14 md:w-16 md:h-16 pr-1" />
          <div className="flex flex-col ml-2">
            <a
              href="#"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent"
            >
              PT ADDINIYAH BERKAH HAROMAEN
            </a>
            <a
              href="#"
              className="text-xs md:text-sm italic font-semibold bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent"
            >
              BERKAH, MULIA, BERLIMPAH
            </a>
          </div>
        </div>

        {/* Kanan - Menu Desktop */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          {navItems.map((item, index) => (
            <a key={index} href={item.link} className="bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent hover:text-green-900">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-green-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div
          className="
            absolute top-full right-0 w-[200px] rounded-lg
            backdrop-blur-lg bg-white shadow-md
            flex flex-col items-center space-y-4 py-4
            font-semibold md:hidden z-50
          "
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Nav;
