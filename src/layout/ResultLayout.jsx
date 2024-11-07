export default function ResultLayout({children,ref}){
return(
    <section
    ref={ref}
    class=" bg-slate-200 break-words flex justify-center align-items-center content-center align-content-center  py-8 antialiased  md:py-12 w-full max-w-full"
  >
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-4 w-full" style={{minHeight:'100vh'}}>
      <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
        <div className="">
          <h2 class="mt-3 text-xl font-semibold text-black sm:text-2xl">
            Hasil Download:
          </h2>
        </div>
      </div>
     {children}
    </div>
  </section>
)
}