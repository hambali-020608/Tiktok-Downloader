import React, { useState } from "react";

export default function Card({ videoData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-xl  mx-auto">
      {/* Video Player */}
      <div className=" w-full flex justify-center items-center"> {/* 16:9 Aspect Ratio */}
        <img
          src={videoData.videoImage}
          className=" w-auto h-auto object-cover justify-center items-center"
        />
         
        
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-white mb-2">
            {isExpanded
              ? videoData.videoTitle
              : `${videoData.videoTitle.substring(0, 60)}${videoData.videoTitle.length > 60 ? "..." : ""}`}
          </h3>
          <button
            onClick={toggleReadMore}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
          </button>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={videoData.imageAuthorLink}
            alt={videoData.authorName}
            className="w-12 h-12 rounded-full border-2 border-gray-600"
          />
          <div>
            <p className="font-medium text-white">{videoData.authorName}</p>
            <p className="text-sm text-gray-400">@{videoData.author?.unique_id || "tiktok"}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Like */}
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-gray-400 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-xs text-gray-400">Suka</span>
            <span className="text-white font-medium">{formatNumber(videoData.stats.statsLike)}</span>
          </div>

          {/* Comment */}
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-gray-400 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8H7c-4.418 0-8-3.582-8-8s3.582-8 8-8h6c4.418 0 8 3.582 8 8z"
              />
            </svg>
            <span className="text-xs text-gray-400">Komentar</span>
            <span className="text-white font-medium">{formatNumber(videoData.stats.statsComment)}</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-gray-400 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span className="text-xs text-gray-400">Bagikan</span>
            <span className="text-white font-medium">{formatNumber(videoData.stats.statsShare)}</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center gap-3">
          <a
            href={videoData.videoLink}
            download="tiktok-video.mp4"
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Unduh Video
          </a>
          <a
            href={videoData.audioLink}
            download="tiktok-Audio.mp3"
            className="px-6 py-3  bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            Unduh Audio
          </a>
        </div>
      </div>
    </div>
  );
}