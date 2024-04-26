"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
    searchParams: { publicId },
}: {
    searchParams: {
        publicId: string;
    };
}) {
    const [transformation, setTransformation] = useState<
        | undefined
        | "generative-fill"
        | "blur"
        | "grayscale"
        | "pixelate"
        | "bg-remove"
    >();

    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    return (
        <section className="pt-28 pb-10">
            <div className="flex flex-col gap-8 justify-center">
                <h1 className="text-4xl font-bold text-cyan-500">Editor</h1>

                <div className="flex flex-col gap-8 justify-center">

                    <div className="grid gri-col sm:grid-rows-1 gap-4 justify-center">

                        <div className="flex flex-col md:flex-row gap-4">
                            <Button
                                onClick={() => {
                                    setTransformation("generative-fill");
                                    setPrompt(pendingPrompt);
                                }}
                            >
                                Apply Generative Fill
                            </Button>
                            <Input
                                value={pendingPrompt}
                                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                                placeholder="Prompt"
                                className="bg-transparent"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                            <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
                            <Button onClick={() => setTransformation("grayscale")}>
                                Convert to Gray
                            </Button>
                            <Button onClick={() => setTransformation("pixelate")}>
                                Pixelate
                            </Button>

                            <Button onClick={() => setTransformation("bg-remove")}>
                                Remove Background
                            </Button>
                        </div>
                        <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                            Clear All
                        </Button>
                    </div>

                    <div className="grid grid:row md:grid-cols-2 gap-12 justify-between items-center">
                        <CldImage src={publicId} width="400" height="300" alt="some image" />

                        {transformation === "generative-fill" && (
                            <CldImage
                                src={publicId}
                                width="1400"
                                height="900"
                                alt="some image"
                                crop="pad"
                                fillBackground={{
                                    prompt,
                                }}
                            />
                        )}

                        {transformation === "blur" && (
                            <CldImage
                                src={publicId}
                                width="1200"
                                height="1400"
                                blur="800"
                                alt="some image"
                            />
                        )}

                        {transformation === "grayscale" && (
                            <CldImage
                                src={publicId}
                                width="1200"
                                height="1400"
                                grayscale
                                alt="some image"
                            />
                        )}

                        {transformation === "pixelate" && (
                            <CldImage
                                src={publicId}
                                width="1200"
                                height="1400"
                                pixelate
                                alt="some image"
                            />
                        )}

                        {transformation === "bg-remove" && (
                            <CldImage
                                src={publicId}
                                width="1200"
                                height="700"
                                removeBackground
                                alt="some image"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}