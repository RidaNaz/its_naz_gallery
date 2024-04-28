"use client"

import Footer from "@/components/Footer"
import Menu from "@/components/icons/menu"
import Spline from "@splinetool/react-spline"
import Link from "next/link"

export default function Home() {
  return (

    <main className="mt-36 sm:mt-0 flex flex-col" >
     <Link className="block sm:hidden -mt-12" href="/gallery"><Menu /></Link>

      <div className="flex flex-col -mt-32 sm:-mt-0 sm:pt-32 md:flex-row md:pr-4 mx-4 sm:pr-4 lg:pr-2 sm:-mx-24 md:-mx-28 lg:mx-0 w-full h-screen items-center justify-center relative overflow-x-hidden pb-12">
        <div className=" w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start">

          <div className="flex flex-col ml-4 gap-2 -mb-36 sm:-mb-0">
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
