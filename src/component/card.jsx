import { useState } from "react";

export default function Card({videoData}){
const [isExpand,setIsExpand]=useState(false)


  function toggleReadMore() {
    setIsExpand(!isExpand);
  }
  
    return(
        <div className=" sm:ms-10 md:ms-10 card lg:card-side bg-white shadow-xl ">
        <div className=" w-full relative pb-[50.25%]">
          
          <video
            className="absolute top-0 bottom-5 left-0 w-full h-full"
            controls
          >
            <source src={videoData.videoLink} type="video/mp4" />
            Browser Anda tidak mendukung video tag.
          </video>
        </div>
        <div className="card-body">
          {/* ini adalah gambar like nya */}

          <div className="overflow-x-auto lg:mt-4 shadow-md sm:rounded-lg">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr className="">
                  <th scope="row" className="h4">
                    Judul
                  </th>
                  <td className="h6">
                    {isExpand
                      ? videoData.videoTitle
                      : `${videoData.videoTitle.substring(0, 20)}...`}
                    <button
                      className="btn btn-link"
                      onClick={toggleReadMore}
                    >
                      {isExpand ? "Show Less" : "Read More"}
                    </button>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className="bg-slate-400 h4">
                    Author
                  </th>
                  <td className="h6">
<div class="flex items-center gap-2">
    <img class="w-10 h-10 rounded-full" src={videoData.imageAuthorLink} alt=""/>
    <div class="font-medium dark:text-white">
        <div>{videoData.authorName}</div>
        {/* <div class="text-sm text-gray-500 dark:text-gray-400">@{videoData.author.unique_id}</div> */}
    </div>
</div>
</td>
                {/* </tr>
                <tr>
                  <th scope="row" className="bg-slate-400 h4">
                    Created at
                  </th>
                  <td className="h6">{videoData.created_at}</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-slate-400 h4">
                    Duration
                  </th>
                  <td className="h6">
                    {videoData.video.durationFormatted}
                  </td> */}
                </tr>
              </tbody>
            </table>
{/* stats */}
            {/* <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    class="h-10 w-10"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="30"
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
                </div>
                <div className="stat-title">Views</div>
                <div className="stat-value">
                  {videoData.stats.playCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    fill="#918d8d"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    stroke="#918d8d"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194 s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38 C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64 c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484 c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8 s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8 s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452 c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295 c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64 c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947 c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194 c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631 c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032 c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079 C482.323,308.985,475.927,319.848,465.561,325.727z"></path>{" "}
                        <path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"></path>{" "}
                        <path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"></path>{" "}
                        <path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"></path>{" "}
                        <path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="stat-title">Like</div>
                <div className="stat-value">
                  {videoData.stats.likeCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="-5.12 -5.12 42.24 42.24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="#979191"
                    stroke="#979191"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>comment-3</title>{" "}
                      <desc>Created with Sketch Beta.</desc>{" "}
                      <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke-width="2.368"
                        fill="none"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                      >
                        {" "}
                        <g
                          id="Icon-Set"
                          sketch:type="MSLayerGroup"
                          transform="translate(-204.000000, -255.000000)"
                          fill="#000000"
                        >
                          {" "}
                          <path
                            d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
                            id="comment-3"
                            sketch:type="MSShapeGroup"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="stat-title">Comments</div>
                <div className="stat-value">
                  {videoData.stats.commentCount}
                </div>
              </div>
            </div> */}
          </div>
          <div className="card-actions justify-end">
            <a
              href={videoData.videoLink}
              download="tiktok-video.mp4"
            >
              <button className="btn btn-primary">Download Video</button>
            </a>
          </div>
        </div>
      </div>
    )
}