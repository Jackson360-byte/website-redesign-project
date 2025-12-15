import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dcyphernet.com",
      lastModified: new Date(),
    },
  ];
}
