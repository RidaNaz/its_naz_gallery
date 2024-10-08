import Image from "next/image"

export default function Footer () {
    return (
        <div className=" flex justify-center gap-5 md:gap-10  md:w-[80%] mx-auto text-white -mt-6 pb-3  w-full mr-16 md:ml-20 md:-mr-20">
                <Image
                    src="/Ridalogo.svg"
                    alt="logo"
                    width={25}
                    height={25}
                    className="cursor-pointer hover:animate-slowspin"
                />
                &#169; Naz Gallery 2024 Inc. All rights reserved
            </div>
    )
}