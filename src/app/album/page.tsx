import cloudinary from "cloudinary";
import { AlbumCard } from "./AlbumCard";
import { MobNav } from "@/components/MobNav";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section className="pt-28  h-screen">
      <MobNav/>
      <div className="flex flex-col pt-10 gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-cyan-500">Albums</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}