import { prisma } from "@/lib/prisma";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const galleries = await prisma.gallery.findMany({
    include: {
      category: true,
    },
  });

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
      <GalleryClient
        galleries={galleries}
        categories={categories}
      />
  );
}