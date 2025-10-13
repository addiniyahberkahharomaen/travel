import React from "react";
import logo from "../src/assets/logo.png";
import paket1 from "../src/assets/paket1.png";
import paket2 from "../src/assets/paket2.png";
import paket3 from "../src/assets/paket3.png";
import paket4 from "../src/assets/paket4.png";

function PaketUmroh() {
  const paketData = [
    {
      id: 1,
      title: "Paket Umroh VIP",
      desc: "Dengan Fasilitas Hotel Makkah dan Madinah setara 5",
      img: paket1,
    },
    {
      id: 2,
      title: "Paket Umroh Bisnis",
      desc: "Dengan Fasilitas Hotel Makkah setara 5 dan Madinah setara bintang 4.",
      img: paket2,
    },
    {
      id: 3,
      title: "Paket Umroh Ekonomi",
      desc: "Dengan Fasilitas Hotel Makkah dan Madinah setara 4",
      img: paket3,
    },
    {
      id: 4,
      title: "Paket Umroh Keluarga",
      desc: "Dengan Fasilitas Hotel Makkah setara 4 dan Madinah setara bintang 3.",
      img: paket4,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-green-50">
      <div className="text-center mb-12">
  <div className="flex justify-center items-center mb-4 space-x-3">
    <img src={logo} alt="logo" className="w-15 h-15 md:w-14 md:h-14" />
    <h2 className="text-4xl md:text-5xl font-bold text-green-900">
      Jenis Paket Umroh
    </h2>
  </div>
  <p className="text-yellow-800 font-medium text-lg">
    Pilih paket terbaik sesuai kebutuhan dan kenyamanan Anda.
  </p>
</div>

      {/* Grid 4 Paket */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {paketData.map((paket) => (
          <div
            key={paket.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={paket.img}
              alt={paket.title}
              className="w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {paket.title}
                </h3>
                <p className="text-yellow-800 text-md">{paket.desc}</p>
              </div>
              <button className="mt-4 bg-gradient-to-r from-green-800 via-yellow-700 to-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PaketUmroh;
