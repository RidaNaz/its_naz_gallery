import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex ml-6 mr-7 justify-between">
            <div className="flex h-16 items-center px-4 container mx-auto gap-2">
                <Image
                    src="/icon.png"
                    width="50"
                    height="50"
                    alt="icon of this photo album app"
                />
                <Link href="/">
                    <span className="text-xl font-bold">Photos App</span>
                </Link>
            </div>

            <div className=" mt-3">
                <Image src="/Ridalogo.svg" alt="my logo" width={45} height={45} />
            </div>
            </div>
        </div>
    )
}