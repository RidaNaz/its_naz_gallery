import Link from "next/link";
import cloudinary from "cloudinary"
import { Button } from "@/components/ui/button";
import { Folder } from "@/app/album/page";
import Album from "@/components/icons/album";
import Gallery from "@/components/icons/gallery";
import { Heart } from "@/components/icons/heart";

export default async function SideMenu() {

    const { folders } = (await cloudinary.v2.api.root_folders()) as {
      folders: Folder[];
    };
  
    return (
      <div className="pb-12 w-1/4 hidden sm:block">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Manage</h2>
  
            <div className="space-y-1">
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
          </div>
        </div>
      </div>
    )
  }