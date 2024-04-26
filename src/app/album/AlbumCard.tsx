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
        <Card className="bg-cyan-700 w-full h-auto">
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
  );
}
