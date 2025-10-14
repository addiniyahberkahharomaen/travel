import React from "react";
import logo from "../src/assets/logo.png";
import paket1 from "../src/assets/paket1.jpg";
import paket2 from "../src/assets/paket2.png";
import paket3 from "../src/assets/paket3.png";
import paket4 from "../src/assets/paket4.png";

function PaketUmroh() {
  // 🔹 Nomor WhatsApp tujuan (tanpa tanda + atau 0 di depan)
  const phoneNumber = "6283829096731";

  // 🔹 Data paket
  const paketData = [
    {
      id: 1,
      title: "Paket Umroh SPESIAL",
      desc: "Dengan Fasilitas Hotel Makkah, Madinah setara 5, dan FREE KOTA THAIF",
      img: paket1,
      price: "28.000.000",
      notprice: "29.500.000",
    },
    {
      id: 2,
      title: "Paket Umroh Bisnis",
      desc: "Dengan Fasilitas Hotel Makkah setara 5 dan Madinah setara bintang 4.",
      img: paket2,
      price: "24.000.000",
      notprice: "25.500.000",
    },
    {
      id: 3,
      title: "Paket Umroh Ekonomi",
      desc: "Dengan Fasilitas Hotel Makkah dan Madinah setara 4",
      img: paket3,
      price: "20.000.000",
      notprice: "21.500.000",
    },
    {
      id: 4,
      title: "Paket Umroh Keluarga",
      desc: "Dengan Fasilitas Hotel Makkah setara 4 dan Madinah setara bintang 3.",
      img: paket4,
      price: "16.000.000",
      notprice: "17.500.000",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-green-50"
      id="Produk"
    >
      {/* Judul */}
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
        {paketData.map((paket) => {
          // 🔹 Buat link WhatsApp untuk tiap paket
          const message = `Assalamualaikum wr wb, apakah ${paket.title.toUpperCase()} masih ada?`;
          const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`;

          return (
            <div
              key={paket.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={paket.img}
                alt={paket.title}
                className="w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    {paket.title}
                  </h3>
                  <p className="text-yellow-800 text-md mb-1">{paket.desc}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-red-800 text-2xl font-semibold">
                      {paket.price}
                    </p>
                    <p className="text-gray-400 line-through text-lg">
                      {paket.notprice}
                    </p>
                  </div>
                </div>

                {/* 🔹 Tombol WhatsApp */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-center bg-gradient-to-r from-green-800 via-yellow-700 to-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PaketUmroh;
