"use client"

import { Heart } from "@/components/icons/heart"
import { CldImage, CldImageProps } from "next-cloudinary"
import { setAsFavorite } from "../../app/gallery/Actions"
import { useState, useTransition } from "react"
import { SearchResult } from "../../app/gallery/page"
import { FullHeart } from "@/components/icons/FullHeart"
import { ImageMenu } from "./ImageMenu"

export function CloudinaryImage(
    props:
        {
            imageData: SearchResult;
            onUnheart?: (unheartedResource: SearchResult) => void
            [ket: string]: any
        } & Omit<CldImageProps, "src">) {

    const [transition, startTransition] = useTransition()
    const { imageData, onUnheart } = props

    const [isFavorited, setIsFavorited] = useState(
        imageData.tags.includes("favorite")
    )

    return (
        <div className="relative">
            <CldImage {...props}
                src={imageData.public_id}
                alt="something"
            />

            {isFavorited ? (
                <FullHeart
                    onClick={() => {
                        onUnheart?.(imageData)
                        setIsFavorited(false);
                        startTransition(() => {
                            setAsFavorite(imageData.public_id, false);
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
                />) : (
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => {
                            setAsFavorite(imageData.public_id, true);
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                />)
            }
            <ImageMenu image={imageData} />
        </div>
    )
}