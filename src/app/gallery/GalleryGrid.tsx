"use client";

import { SearchResult } from "./page";
import { ImageGrid } from "@/components/ImageGrid";
import { CloudinaryImage } from "../../components/ui/CloudinaryImage";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
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