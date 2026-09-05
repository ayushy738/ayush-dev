import { MetadataRoute } from "next";
import { projects } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ayushydv.me";

  const routes = ["", "/about", "/projects", "/experience", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
