import React from "react";
import tutor1 from "../../public/img/tutor1.png";
import tutor2 from "../../public/img/tutor2.png";
import tutor3 from "../../public/img/tutor3.png";
import tutor4 from "../../public/img/tutor4.png";

const steps = [
  {
    title: "Salin URL dari TikTok",
    description:
      "Klik tombol 'Bagikan', lalu pilih <strong>Salin Tautan</strong> untuk menyalin link video.",
    image: tutor1,
    imageFirst: false,
  },
  {
    title: "Tempel URL ke Tik-Down",
    description:
      "Tempel URL yang telah disalin ke kolom input di <a href='https://tik-down-seven.vercel.app' className='text-cyan-400 hover:underline'>Tik-Down</a>, lalu klik tombol <strong>Unduh</strong>.",
    image: tutor2,
    imageFirst: true,
  },
  {
    title: "Lihat Hasil Unduhan",
    description:
      "Tunggu proses selesai. Hasil akan muncul di bawah berupa pratinjau video dan tombol <strong>Download</strong>.",
    image: tutor3,
    imageFirst: false,
  },
  {
    title: "Unduh Video",
    description:
      "Klik tombol <strong>Download</strong>, lalu pada halaman video, tekan ikon titik tiga (⋯) di pojok kanan dan pilih <strong>Simpan</strong>.",
    image: tutor4,
    imageFirst: true,
  },
];

export default function Tutorial() {
  return (
    <section id="tutorial-section" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Cara Mengunduh Video TikTok
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Ikuti langkah-langkah sederhana berikut untuk mengunduh video TikTok tanpa watermark.
        </p>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                step.imageFirst ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="lg:pr-8 lg:pl-0">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 w-full max-w-md">
                  <img
                    src={step.image}
                    alt={`Langkah ${index + 1}`}
                    className="w-full h-auto object-contain p-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}