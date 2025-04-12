import React, { useRef, useState } from "react";
import yt from '../public/yt.png'

import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";
import Card from "./component/card";
import Tutorial from "./section/tutorial";
import Footer from "./section/footer";
import ResultLayout from "./layout/ResultLayout";
import logo from '../public/logo.png'
import Benefit from "./section/benefit";

function App() {
  const [isExpand, setIsExpand] = useState(false);
  const [url, setUrl] = useState("");
  const resultRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian hasil

    setLoading(true);
    try {
      const response = await axios.get(
        `https://profesor-api.vercel.app/api/tik-down/v1?url=${url}`
      );
      console.log(response.data);
      setVideoData(response.data.data);
      setError("");
    } catch (err) {
      setError("Gagal mendownload video, pastikan URL valid.");
      setVideoData(null);
    } finally {
      setLoading(false);
    }
  };

  function toggleReadMore() {
    setIsExpand(!isExpand);
  }

  return (
    <div>
      <Navbar />
<main>
      <section id="hero" className=" back flex justify-content-center  ">
        <div className="">
          <div className="mb-4 text-white">
            <h1 align="center" className="pt-[50px] flex h4  lg:text-[2.5rem]   font-extrabold text-center items-center -mb-5 lg:-mb-7"><img className=" bg-transparent w-36 lg:w-48 " src={logo} alt="" />Video Downloader</h1>
            <p align="center">
             Tik-Down Pendownload Video tiktok tanpa Watermark, cepat dan tanpa iklan
            </p>
            
          </div>
          <div class="container w-full mb-3 ">
            <div class="lg:flex items-center border-2 border-gray-300 rounded-lg p-2  mx-auto">
              <input
                required
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                class="rounded-lg bg-white me-10 h:96 w-full text-black flex-grow border-none outline-none px-2 py-1"
                placeholder="input url..."
              />
              <div className="mt-2 lg:mt-0">
              <button
                className="md:-mt-2 bg-dark w-full lg:w-28  text-white px-4 py-1  rounded-lg "
                onClick={handleDownload}
                type="submit"
              >
                Search
              </button>
              </div>
            </div>
          </div>

          <p className="text-center text-white">
            Hasil Download nya ada di bawah 👇👇👇
          </p>
          {error && (
            <p className="text-center mt-3" style={{ color: "red " }}>
              {error}
            </p>
          )}
        </div>
      </section>
<div ref={resultRef}></div>
    <ResultLayout >
          {loading && <span className="loading loading-dots loading-lg"></span>}
          {!loading && videoData && (
          <Card videoData={videoData}/>
          )}
    </ResultLayout>

<Tutorial/>

<Benefit/>


</main>
  
<Footer/>

    </div>
  );
}

export default App;
