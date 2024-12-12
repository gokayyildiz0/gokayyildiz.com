import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { projectsSchema, postsSchema } from "./data/schemas";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/blog/" }),
  schema: postsSchema,
});

const projectsCollection = defineCollection({
  loader: file("src/data/projects.json"),
  schema: projectsSchema,
});
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
