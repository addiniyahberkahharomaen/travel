import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Kontak() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phone = "6283162360600";
  const pesanWA = encodeURIComponent(
    "Assalamualaikum wr wb, saya ingin menanyakan informasi mengenai paket umroh di PT Adhin Berkah Haromaen."
  );
  const linkWA = `https://wa.me/${phone}?text=${pesanWA}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
    }
  };

  return (
    <section
      id="Kontak"
      className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-green-50"
    >
      {/* Judul */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Hubungi Kami
        </h2>
        <p className="text-yellow-800 text-lg max-w-2xl mx-auto">
          Kami siap membantu Anda untuk informasi dan pendaftaran umroh.
        </p>
      </div>

      {/* Grid Dua Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Informasi Kontak */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Informasi Kantor
          </h3>
          <div className="space-y-4 text-yellow-800">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-800" />
              <span>
                Kp. Mande Kulon 04/05, Mekarmukti, Kec. Cihampelas, Kabupaten
                Bandung Barat, Jawa Barat 40767
              </span>
            </p>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-800" />
              <span>+62 831 6236 0600</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-green-800" />
              <span>addiniyahberkahharomaen@gmail.com</span>
            </p>
          </div>

          {/* Tombol WhatsApp */}
          <a
            href={linkWA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Hubungi via WhatsApp
          </a>

          {/* Lokasi Google Maps */}
          <div className="mt-8">
            <h4 className="text-lg font-bold text-green-900 mb-2">
              Lokasi Kami
            </h4>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-green-200">
              <iframe
                title="Lokasi PT Adhin Berkah Haromaen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.306447855697!2d107.45943172055063!3d-6.931021943810931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68faa118af43b9%3A0x766efb00b3ea610d!2sPondok%20Pesantren%20Addiniyyatul%20Amriyah%20Bandung%20Barat!5e0!3m2!1sid!2sid!4v1762585572339!5m2!1sid!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Kirim Pesan
          </h3>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/addiniyahberkahharomaen@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                required
                className="w-full border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <input
                type="tel"
                name="nomor_ponsel"
                placeholder="Nomor Ponsel Aktif"
                required
                className="w-full border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <textarea
                name="pesan"
                rows="5"
                placeholder="Tulis pesan Anda..."
                required
                className="w-full border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-800 via-yellow-700 to-green-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                Kirim Pesan
              </button>
            </form>
          ) : (
            <div className="text-center text-green-900 font-semibold bg-green-50 border border-green-300 rounded-lg p-6">
              <p className="text-lg">✅ Terimakasih sudah mendaftar!</p>
              <p className="text-sm mt-2 text-yellow-800">
                Jika tim kami tidak menghubungi dalam 24 jam,
                silahkan hubungi langsung melalui{" "}
                <a
                  href={linkWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-bold hover:underline"
                >
                  WhatsApp
                </a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Kontak;
