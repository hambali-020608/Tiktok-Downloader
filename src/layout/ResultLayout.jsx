import React from "react";

export default function ResultLayout({ children, ref }) {
  return (
    <section
      id="result"
      ref={ref}
      className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Hasil Unduhan
          </h2>
          <p className="mt-2 text-gray-400">
            Video siap diunduh tanpa watermark
          </p>
        </div>

        {/* Konten */}
        <div className="min-h-[20vh] flex flex-col items-center justify-center">
          {children ? (
            <div className="w-full max-w-3xl">
              {children}
            </div>
          ) : (
            <p className="text-gray-500 text-center italic">
              Tidak ada hasil untuk ditampilkan.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}