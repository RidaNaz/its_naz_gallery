import cloudinary from "cloudinary";
import GalleryGrid from "./GalleryGrid";
import UploadButton from "./UploadButton";
import { SearchForm } from "./SearchForm";

export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function GalleryPage({
    searchParams: { search },
}: {
    searchParams: {
        search: string;
    };
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };

    return (

        <div className="pt-28 pb-20 flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold text-cyan-500">Gallery</h1>

                {/* <div className="hidden md:block" ><SearchForm initialSearch={search} /></div> */}

                <UploadButton />

            </div>

            <div>
                <SearchForm initialSearch={search} />
            </div>

            <GalleryGrid images={results.resources} />
        </div>

    );
}