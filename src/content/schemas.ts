import { z } from "astro:content";

const projectsSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  featured: z.boolean(),
});

const postsSchema = ({
  image,
}: {
  image: () => {
    refine: (arg0: (img: any) => boolean, arg1: { message: string }) => any;
  };
}) =>
  z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string().min(1, "Image URL is required"),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  });

export { projectsSchema, postsSchema };

