import { useState, useEffect } from "react";
import slide1 from "../src/assets/slide1.jpg";
import slide2 from "../src/assets/slide2.jpg";
import slide3 from "../src/assets/slide3.jpg";
import slide4 from "../src/assets/slide4.jpg";

function Hero() {
  const images = [slide1, slide2, slide3, slide4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Ganti setiap 4 detik
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden pt-[80px]">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay teks */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Selamat Datang di PT Adhin Berkah Haromaen
        </h1>
        <p className="text-lg md:text-2xl mt-4 italic drop-shadow-md">
          Berkah, Mulia, Berlimpah
        </p>
      </div>
    </div>
  );
}

export default Hero;
