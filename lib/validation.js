import { z } from 'zod';

export const blogSchema = z.object({
    title: z.string().min(1).max(100),
    blog_content: z.string().min(1),
    author_name: z.string().min(1).max(50),
    blog_cover_img: z.string().url(),
    read_time: z.number().min(1),
});
