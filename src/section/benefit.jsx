import React from "react";
import AddFree from "../../public/img/addfree.svg";
import Easy from "../../public/img/easy.svg";

const benefits = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-cyan-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.992 1.25005L18.1257 1.25011L18.6709 1.25011C19.4245 1.25008 20.064 1.25005 20.5742 1.31835C21.1169 1.39101 21.6242 1.55306 22.0343 1.96148C22.4449 2.37034 22.6082 2.87675 22.6814 3.41869C22.7501 3.92731 22.75 4.56474 22.75 5.31465L22.75 5.85813L22.7501 5.99204C22.7506 6.89302 22.7511 7.55278 22.4995 8.15745C22.2482 8.76181 21.7798 9.22757 21.1396 9.86427L21.0445 9.95889L18.7785 12.2153L18.8178 12.2759C19.1587 12.8017 19.4379 13.2324 19.64 13.6048C19.8504 13.9925 20.0034 14.3624 20.0648 14.7749C20.1625 15.4309 20.0741 16.1046 19.8157 16.7229C19.7171 16.9587 19.549 17.2011 19.3822 17.4159C19.2064 17.6424 18.9922 17.8881 18.7635 18.1371C18.3085 18.6321 17.7629 19.1755 17.2803 19.6561L17.2733 19.6631L17.2001 19.7359C16.5258 20.4074 15.356 20.1913 14.9951 19.2872C14.7962 18.7889 14.7185 18.5976 14.6218 18.4215C14.5313 18.2568 14.4276 18.0997 14.3115 17.9518C14.1891 17.7958 14.0459 17.6509 13.6778 17.2843L13.2548 16.9139C13.1838 16.9215 13.1119 16.9253 13.0389 16.9253C12.46 16.9253 11.9864 16.6831 11.5504 16.3519C11.1409 16.0408 10.6885 15.5903 10.1559 15.0598L8.88948 13.7987C8.35683 13.2684 7.90436 12.8178 7.5919 12.4101C7.25931 11.976 7.01482 11.5028 7.01482 10.9234C7.01482 10.836 7.02042 10.7502 7.03134 10.6659L6.34386 9.98128C6.30157 9.93917 6.28523 9.92292 6.26917 9.90735C5.95301 9.60096 5.58096 9.35721 5.17285 9.18927C5.15212 9.18073 5.13067 9.17223 5.07507 9.15023L4.74565 9.01985C3.79897 8.64519 3.54286 7.42334 4.26681 6.70246L4.27379 6.6955C4.75643 6.2149 5.30208 5.67157 5.79928 5.21855C6.04927 4.99077 6.29596 4.77757 6.52336 4.60252C6.73915 4.43639 6.98217 4.26928 7.21827 4.17144C7.83797 3.91463 8.51283 3.8269 9.1698 3.92387C9.5826 3.9848 9.95325 4.13671 10.3423 4.34611C10.7162 4.54732 11.1486 4.8253 11.6768 5.16484L11.7425 5.20708L14.012 2.94712L14.1066 2.85293C14.7465 2.21486 15.2139 1.74886 15.8199 1.49889C16.4256 1.24906 17.0864 1.24948 17.992 1.25005Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Lebih Cepat",
    description: "Teknologi canggih memungkinkan proses unduh dalam hitungan detik tanpa buffering.",
  },
  {
    icon: <img src={AddFree} alt="Tanpa Iklan" className="w-12 h-12" />,
    title: "Tanpa Iklan",
    description: "Nikmati pengalaman bebas iklan — aman dari virus, popup, dan gangguan lainnya.",
  },
  {
    icon: <img src={Easy} alt="Mudah Digunakan" className="w-12 h-12" />,
    title: "Mudah Digunakan",
    description: "Cukup salin URL TikTok, tempel di sini, dan unduh — tanpa registrasi atau instalasi.",
  },
];

export default function Benefit() {
  return (
    <section className="bg-gray-900 py-16 md:py-24" id="benefit-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kenapa Harus Menggunakan Tik-Down?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Solusi terbaik untuk mengunduh video TikTok tanpa watermark, cepat, dan 100% gratis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-gray-800 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}