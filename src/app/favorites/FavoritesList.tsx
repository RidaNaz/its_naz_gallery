"use client";

import { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { ImageGrid } from "@/components/ImageGrid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <div className='w-full pb-16'>
      <ImageGrid
        images={resources}
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              imageData={imageData}
              width="400"
              height="300"
              alt="an image of something"
              onUnheart={(unheartedResource) => {
                setResources((currentResources) =>
                  currentResources.filter(
                    (resource) =>
                      resource.public_id !== unheartedResource.public_id
                  )
                );
              }}
            />
          );
        }}
      />
    </div>
  );
}