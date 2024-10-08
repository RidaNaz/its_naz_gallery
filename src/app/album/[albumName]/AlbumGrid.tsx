"use client";

import { ImageGrid } from "@/components/ImageGrid";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}