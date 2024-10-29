import { z } from 'astro:content';

const projectsSchema = z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    featured: z.boolean(),
})

const postsSchema = ({ image }: { image: () => { refine: (arg0: (img: any) => boolean, arg1: { message: string; }) => any; }; }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
        url: image().refine((img) => img.width >= 851, {
            message: "Cover image must be at least 851 pixels wide!",
        }),
        alt: z.string()
    }),
    tags: z.array(z.string())
})

export { projectsSchema, postsSchema };