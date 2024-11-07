import yt from '../../public/yt.png'
export default function Tutorial(){
    return(
        <section id="tutorial-section" className="mockup-window bg-white border min-h-[100vh]">
        <h1 className="h4 text-center">
          Bagaimana Cara Mendownload Video Tiktok Dengan TikDown???
        </h1>
        
          <div className="ps-56 m-auto">
<div className="grid grid-cols-6 grid-rows-6 gap-4 pt-10">
        <div className="col-span-3 row-span-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, commodi impedit, perspiciatis perferendis nesciunt esse obcaecati delectus ut atque explicabo, officiis provident cum rerum laudantium excepturi? Modi labore est doloremque!
          </p>
        </div>
    <div className="col-span-2 row-span-5 col-start-4">
      <img src={yt} alt="" />
    </div>
    </div>
</div>

          <div className="ps-56 m-auto">
<div className="grid grid-cols-6 grid-rows-6 gap-4 pt-10">
        <div className="col-span-3 row-span-6">
        <img src={yt} alt="" />
        </div>
    <div className="col-span-2 row-span-5 col-start-4">
    <p className="max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, commodi impedit, perspiciatis perferendis nesciunt esse obcaecati delectus ut atque explicabo, officiis provident cum rerum laudantium excepturi? Modi labore est doloremque!
          </p>
    </div>
    </div>
</div>
    
            
      
      </section>
    )
}