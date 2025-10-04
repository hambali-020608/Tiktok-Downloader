import React, { useRef, useState } from "react";
import logo from "../public/logo.png";
import "./App.css";
import axios from "axios";
import Navbar from "./component/navbar";
import Card from "./component/card";
import Tutorial from "./section/tutorial";
import Footer from "./section/footer";
import ResultLayout from "./layout/ResultLayout";
import Benefit from "./section/benefit";

function App() {
  const [isExpand, setIsExpand] = useState(false);
  const [url, setUrl] = useState("");
  const resultRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Masukkan URL TikTok terlebih dahulu.");
      return;
    }

    resultRef.current?.scrollIntoView({ behavior: "smooth" });
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://profesor-api.vercel.app/api/tiktok/v1/download?url=${encodeURIComponent(url)}`
      );
      setVideoData(response.data.data);
    } catch (err) {
      setError("Gagal mengunduh video. Pastikan URL valid dan berasal dari TikTok.");
      setVideoData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="text-center py-12 md:py-20">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Tik-Down Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 p-2 shadow-lg"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Tik-Down
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Unduh video TikTok tanpa watermark, cepat, gratis, dan tanpa iklan!
          </p>

          {/* Input & Button */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Tempel link video TikTok di sini..."
                className="flex-grow px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all text-white placeholder-gray-400"
              />
              <button
                onClick={handleDownload}
                disabled={loading}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg hover:shadow-cyan-500/30"
                }`}
              >
                {loading ? "Memproses..." : "Unduh"}
              </button>
            </div>

            {error && (
              <p className="mt-4 text-red-400 font-medium animate-pulse">{error}</p>
            )}

            <p className="mt-6 text-gray-400 text-sm">
              Hasil unduhan akan muncul di bawah ini 👇
            </p>
          </div>
        </section>

        {/* Result Section */}
        <div ref={resultRef} className="mt-16">
          <ResultLayout>
            {loading && (
              <div className="flex justify-center my-10">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {!loading && videoData && <Card videoData={videoData} />}
            {!loading && !videoData && !error && (
              <p className="text-center text-gray-500 mt-10">Belum ada hasil. Masukkan URL untuk memulai.</p>
            )}
          </ResultLayout>
        </div>

        {/* Other Sections */}
        <Tutorial />
        <Benefit />
      </main>

      <Footer />
    </div>
  );
}

export default App;