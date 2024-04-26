import cloudinary from "cloudinary"
import FavoritesList from "./FavoritesList"
import { ForceRefresh } from "@/components/ui/forceRefresh"

export type SearchResult = {
    public_id: string
    tags: string[]
}

export default async function FavoritesPage() {

    const results = await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute() as { resources: SearchResult[] }

    return (
        <section className="pt-28">

            <ForceRefresh />
            
            <div className='flex flex-col gap-8' >
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-bold text-cyan-500">Favorite Images</h1>
                </div>

                <FavoritesList initialResources={results.resources} />

            </div>

        </section>
    )
}
