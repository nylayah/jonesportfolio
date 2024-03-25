import Image from "next/image";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      {/* add  for bg image */}
      <div className='flex items-center w-full h-full bg-cover bg-center' 
           style={{backgroundImage:"url(/main-bg.webp)"}}>
            <div className = 'pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
              <h1 className='text-[50px] text-white font-semibold'>
                Welcome throw new Error("")
                <span className = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '>
                  my portfolio
                </span>
                <p>
                  pls put something here.....
                </p>
              </h1>
            </div>

      </div>
    </main>
  );
}
