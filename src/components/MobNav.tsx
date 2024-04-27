import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/Sheet"
import Link from "next/link"
import Gallery from "./icons/gallery"
import Album from "./icons/album"
import { Heart } from "./icons/heart"
import Menu from "./icons/menu"

export function MobNav() {
    return (
        <div className="-mt-9 -mb-5 block md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost"><Menu /></Button>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Manage</SheetTitle>
                    </SheetHeader>
                    <div className="pt-10 space-y-1">
                        <Button asChild variant="secondary" className="hover:bg-cyan-600 w-full justify-start flex gap-2">
                            <Link href="/gallery"> <Gallery /> Gallery </Link>
                        </Button>

                        <Button asChild variant="ghost" className="hover:bg-cyan-600 w-full justify-start flex gap-2">
                            <Link href="/album"> <Album /> Albums </Link>
                        </Button>

                        <Button asChild variant="ghost" className="hover:bg-cyan-600 w-full justify-start flex gap-2">
                            <Link href="/favorites"> <Heart /> Favorites </Link>
                        </Button>

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}