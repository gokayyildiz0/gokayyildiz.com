import { z, defineCollection } from "astro:content";
import { projectsSchema, postsSchema } from "./schemas";
const postsCollection = defineCollection({
    type: 'content',
    schema: postsSchema
});

const projectsCollection = defineCollection({
    type: "data",
    schema: projectsSchema
})
export const collections = {
    posts: postsCollection,
    projects: projectsCollection
};