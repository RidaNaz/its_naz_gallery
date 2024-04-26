import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Folder } from "./page";
import Link from "next/link";

export function AlbumCard({ folder }: { folder: Folder }) {
  return (
    // <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-3">
        <Card className="bg-cyan-700 w-fit sm:[180px] md:w-[200px] lg:w-[220px]">
          <CardHeader>
            <CardTitle>{folder.name}</CardTitle>
            <CardDescription className="text-gray-300">All your {folder.name} images</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild>
              <Link href={`/album/${folder.name}`}>View Album</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    // </div>
  );
}