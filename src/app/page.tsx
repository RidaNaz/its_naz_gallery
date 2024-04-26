"use client"

import Spline from "@splinetool/react-spline"

export default function Home() {
  return (

    <main className="flex flex-col-reverse pt-32 md:flex-row w-full h-screen p-4 items-center justify-center relative overflow-x-hidden ">

      <div className=" w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start">

        <div className="flex flex-col ml-4 gap-2">
          <h1 className="text-4xl font-black md:text-6xl text-cyan-500 ">Naz Gallery</h1>
          <h2 className="text-md md:text-base lg:text-[20px]">Welcome to my World!</h2>
        </div>

      </div>

      <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center realtive -z-10">
        <Spline className="w-full flex scale-[.25] sm:scale-[.20] lg:scale-[.30] items-center justify-center md:justify-start" scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode" />
      </div>

    </main>

  )
}
