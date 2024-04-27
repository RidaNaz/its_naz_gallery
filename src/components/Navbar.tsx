import Image from "next/image";
import Link from "next/link";
import { MobNav } from "./MobNav";


export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex mr-7 justify-between items-center">
                <MobNav />

                <div className="flex h-16 items-center container mx-auto">
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

                <div>
                    <Image src="/Ridalogo.svg" alt="my logo" width={45} height={45} />
                </div>
            </div>
        </div>
    )
}