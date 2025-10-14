import React, { useState } from "react";
import images from "./assets/galeri"; // ambil dari index.js

function Galeri() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 9);

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-green-50 text-center" id="Galeri">
      {/* Judul dan Deskripsi */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Galeri Perjalanan Umroh
        </h2>
        <p className="text-yellow-800 text-lg max-w-2xl mx-auto">
          Dokumentasi momen berharga jamaah bersama PT Adhin Berkah Haromaen dalam perjalanan penuh makna menuju Tanah Suci.
        </p>
      </div>

      {/* Grid Foto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img}
              alt={`Galeri ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya */}
      <div className="mb-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-green-800 via-yellow-700 to-green-700 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
        >
          {showAll ? "Tutup Galeri" : "Lihat Selengkapnya"}
        </button>
      </div>

      {/* Video YouTube */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/your_video_id"
            title="Video Umroh PT Adhin Berkah Haromaen"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Galeri;
