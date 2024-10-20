import React, { useState } from "react";

import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";

function App() {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://api.tiklydown.eu.org/api/download?url=${url}`
      );
      console.log(response.data);
      setVideoData(response.data);
      setError("");
    } catch (err) {
      setError("Gagal mendownload video, pastikan URL valid.");
      setVideoData(null);
    }
  };

  return (
    <div>
      <Navbar />

      <div className=" back d-flex justify-content-center  ">
        <div className="">
          <div className="mb-4 text-white">
            <h1 className="h1 text-center">TikTok Video Downloader</h1>
            <p align="center">
              Pendownload Video atau Audio tiktok tanpa Watermark
            </p>
          </div>
          <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div class="relative w-full">
              <input
                class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Masukan Url...."
                type="text"
                value={url}
            onChange={(e) => setUrl(e.target.value)}
                id="url"
              />
            </div>
            <div>
              <button
              onClick={handleDownload}
                type="submit"
                class="bg-blue-900 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-blue-300 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Search
              </button>
            </div>
          </div>
        <p className="text-center text-white">Hasil Download nya ada di bawah 👇👇👇</p>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <section class=" break-words flex justify-center align-items-center content-center align-content-center  py-8 antialiased  md:py-12 w-full max-w-full">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-4 w-full">
          <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div className="">
              <h2 class="mt-3 text-xl font-semibold text-black sm:text-2xl">
                Hasil Download:
              </h2>
            </div>
          </div>
          {videoData && (
           
           <div className="grid grid-cols-1 justify-center align-items-center content-center">
           <div
             class="mb-4 grid  sm:grid-cols-1 md:mb-8 lg:grid-cols-3 xl:grid-cols-1"
             style={{ width: "100%" }}
           >
             <div class="rounded-lg border grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-1 gap-0 border-gray-200  bg-white p-6 p- shadow-sm dark:border-gray-700 dark:bg-gray-800">
               <div class="h-56 w-full">
                 {/* <video controls style={{maxWidth:"300px",width: "600%", height: "250px" }}> */}
                 {/* <source src={videoData.video.noWatermark} type="video/mp4" /> */}
                 Browser Anda tidak mendukung video tag.
                 {/* </video> */}
               </div>
               <div class="pt-6">
                 <div class="mb-4 flex items-center justify-between gap-4">
                   <div class="flex  justify-end gap-1">
                     <button
                       type="button"
                       data-tooltip-target="tooltip-quick-look"
                       class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                     >
                       <span class="sr-only"> Quick look </span>
                       <svg
                         class="h-5 w-5"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         fill="none"
                         viewBox="0 0 24 24"
                       >
                         <path
                           stroke="currentColor"
                           stroke-width="2"
                           d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                         />
                         <path
                           stroke="currentColor"
                           stroke-width="2"
                           d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                         />
                       </svg>
                       {/* {videoData.stats.playCount} */}
                     </button>
                     <div
                       id="tooltip-quick-look"
                       role="tooltip"
                       class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                       data-popper-placement="top"
                     >
                       Quick look
                       <div class="tooltip-arrow" data-popper-arrow=""></div>
                     </div>
           
                     <button
                       type="button"
                       data-tooltip-target="tooltip-add-to-favorites"
                       class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                     >
                       <span class="sr-only"> Add to Favorites </span>
                       <svg
                         class="h-5 w-5"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                       >
                         <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                         />
                       </svg>
                       {/* {videoData.stats.likeCount} */}
                     </button>
                     <div
                       id="tooltip-add-to-favorites"
                       role="tooltip"
                       class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                       data-popper-placement="top"
                     >
                       <div class="tooltip-arrow" data-popper-arrow=""></div>
                     </div>
                   </div>
                 </div>
           
                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                   <table class=" text-sm min-w-[20px] -left rtl:text-right break-words text-gray-500 dark:text-gray-400 p-0 table-fixed">
                     <thead class="text-xs text-gray-700 uppercase dark:text-gray-400"></thead>
                     <tbody>
                       <tr class="border-b border-gray-200 dark:border-gray-700">
                         <th
                           scope="row"
                           class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                         >
                           Judul:
                         </th>
                         <td class="overflow-hidden break-words px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap truncate max-w-xs">
                           {/* {videoData.title}dafsdfsfsfsfsfsf */}
                         </td>
                       </tr>
           
                       <tr>
                         <th
                           scope="row"
                           class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                         >
                           Author
                         </th>
           
                         <td class="px-6 py-4 truncate max-w-xs">
                           {/* {videoData.author.name} */}
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
           
                 <div class="mt-2 flex items-center gap-2">
                   <div class="flex items-center">
                     <svg
                       class="h-4 w-4 text-yellow-400"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                     </svg>
           
                     <svg
                       class="h-4 w-4 text-yellow-400"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                     </svg>
           
                     <svg
                       class="h-4 w-4 text-yellow-400"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                     </svg>
           
                     <svg
                       class="h-4 w-4 text-yellow-400"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                     </svg>
           
                     <svg
                       class="h-4 w-4 text-yellow-400"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                     </svg>
                   </div>
           
                   <p class="text-sm font-medium text-gray-900 dark:text-white">
                     5.0
                   </p>
                   <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                     (455)
                   </p>
                 </div>
           
                 <div class="mt-4 ms-1 gap-4 me-10">
                   Download Video 🎥🎥
                   <button
                     type="button"
                     class="inline-flex items-center rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3"
                   >
                     <svg
                       class="-ms-2 me-2 h-5 w-5"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       fill="none"
                       viewBox="0 0 24 24"
                     >
                       <path
                         stroke="currentColor"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                       />
                     </svg>
                     <a download="tiktok-video.mp4">Start</a>
                   </button>
                 </div>
               </div>
             </div>
           </div>
           </div>
          )}
        </div>
      </section>
           
    </div>
  );
}

export default App;
