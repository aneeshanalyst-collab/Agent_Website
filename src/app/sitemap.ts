import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aneeshk.com";

  // Static routes
  const staticRoutes = ["", "/about", "/projects", "/resume", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const posts = getAllPosts();
  const dynamicRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
