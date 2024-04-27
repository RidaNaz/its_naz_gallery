"use client"

import Footer from "@/components/Footer"
import Spline from "@splinetool/react-spline"

export default function Home() {
  return (

    <main className="flex flex-col" >
      <div className="flex flex-col sm:pt-32 md:flex-row md:pr-4 mx-10 sm:pr-4 lg:pr-2 sm:-mx-24 md:-mx-28 lg:mx-0 w-full h-screen items-center justify-center relative overflow-x-hidden pb-12">
        <div className=" w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start">

          <div className="flex flex-col ml-4 gap-2">
            <h1 className="text-4xl font-black md:text-6xl text-cyan-500 ">Naz Gallery</h1>
            <h2 className="text-md md:text-base lg:text-[20px]">Welcome to my World!</h2>
          </div>

        </div>

        <div className="hidden sm:block w-full h-2/4 md:h-full md:w-3/5 realtive -z-10">
          <Spline className="w-full flex scale-[.20] sm:scale-[.20] lg:scale-[.25] items-center justify-center md:justify-start" scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode" />
        </div>

      </div>
      <Footer />
    </main>

  )
}
