import type { MetadataRoute } from "next";

const baseUrl = "https://dioratoret.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-me`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-to-order`,
      priority: 0.7,
    },
  ];
}
