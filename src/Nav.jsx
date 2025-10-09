import { useState } from "react";
import logo from "../src/assets/logo.png";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", link: "#" },
    { name: "Tentang", link: "#" },
    { name: "Layanan", link: "#" },
    { name: "Produk", link: "#" },
    { name: "Galeri", link: "#" },
    { name: "Kontak", link: "#" },
  ];

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Kiri */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="flex flex-col ml-2">
          <a
            href="#"
            className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent"
          >
            PT ADHIN BERKAH HAROMAEN
          </a>
          <a
            href="#"
            className="text-sm italic font-semibold bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent"
          >
            BERKAH, MULIA, BERLIMPAH
          </a>
        </div>
      </div>

      {/* Kanan - Menu desktop */}
      <div className="hidden md:flex space-x-6 font-semibold bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className="hover:text-green-950">
            {item.name}
          </a>
        ))}
      </div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4 font-semibold">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-800 hover:text-green-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nav;
