import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function FloatingIcons() {
  return (
    <>
      {/* WhatsApp Icon - kanan bawah */}
      <a
        href="https://wa.me/6283162360600" // ganti dengan nomor WA kamu
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Sosial Media Icons - kiri bawah */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-4 z-50">
        <a
          href="https://www.instagram.com/addhintour_travel/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white p-3 rounded-full shadow-md hover:opacity-90 transition transform hover:scale-110"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@addiniyahberkahharomaen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-3 rounded-full shadow-md hover:opacity-90 transition transform hover:scale-110"
        >
          <FaTiktok size={22} />
        </a>
        <a
          href="https://www.youtube.com/@addiniyahberkahharomaen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-3 rounded-full shadow-md hover:opacity-90 transition transform hover:scale-110"
        >
          <FaYoutube size={22} />
        </a>
      </div>
    </>
  );
}

export default FloatingIcons;
