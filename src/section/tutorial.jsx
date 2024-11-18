import tutor1 from '../../public/img/tutor1.png'
import tutor2 from '../../public/img/tutor2.png'
import tutor3 from '../../public/img/tutor3.png'
import tutor4 from '../../public/img/tutor4.png'
export default function Tutorial(){
    return(
        <section id="tutorial-section" className="mockup-window bg-white border min-h-[100vh]">
        <h1 className="h4 text-center">
          Bagaimana Cara Mendownload Video Tiktok Dengan TikDown???
        </h1>
        
    <div className="container w-[80%] lg:w-[60%] ">
 
<div className="grid m-auto grid-cols-1 lg:grid-cols-2 gap-4 pt-10 max-w-5xl ">
    {/* Kolom 2 */}
    <div className="">
      <h3 className='h3 '>1. Salin Url Dari Tiktok</h3>
      <p className="">
        Biasanya untuk mencopy url dari tiktok adalah dengan cara klik share, lalu klik <b className='font-bold'>"Salin Tautan"</b>
      </p>
    </div>
<div>
      <img src={tutor1} alt="Your Image" />
    </div>
  
</div>
<div className="grid max-w-5xl  grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
    {/* Kolom 2 */}
    <div className="lg:order-1">
      <h3 className='h3'>2. Tempel url</h3>
      <p className="">
        Tempel url ke <a href="https://tik-down-seven.vercel.app">Tik-Down</a> lalu klik tombol <b className='font-bold'>"Search"</b>. jika sudah tunggu loading nya hingga selesai
      </p>
    </div>
<div className=''>
      <img src={tutor2} alt="Your Image" />
    </div>
  
</div>
<div className="grid max-w-5xl  grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
    {/* Kolom 2 */}
    <div className="">
      <h3 className='h3'>3. Hasil </h3>
      <p className="">
        Setelah loading maka akan hasilnya akan seperti ini, jika ingin download video nya, klik tombol <b className='font-bold'>Download</b> lalu anda akan di arahkan ke video nya
      </p>
    </div>
<div className=''>
      <img src={tutor3} alt="Your Image" />
    </div>
 
  
</div>
<div className="grid max-w-5xl  grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
    {/* Kolom 2 */}
    <div className="lg:order-1">
      <h3 className='h3'>4. download video</h3>
      <p className="">
         ketika sudah mengklik tombol download maka anda akan di arahkan ke video nya, seperti gambar ini. klik titik 3 yang ada di pojok kanan, lalu klik <b className='font-bold'>Download</b>
      </p>
    </div>
<div className=''>
      <img src={tutor4} alt="Your Image" />
    </div>
</div>
  
</div>

            
      
      </section>
    )
}