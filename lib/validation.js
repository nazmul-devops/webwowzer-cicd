import { z } from 'zod';

export const userSchema = z.object({
    first_name: z.string().min(1).max(21),
    last_name: z.string().min(1).max(21),
    company_name: z.string().min(1).max(100).optional(),
    phone_number: z.string().min(10).max(20),
});

export const blogSchema = z.object({
    title: z.string().min(1).max(100),
    blog_content: z.string().min(1),
    author_name: z.string().min(1).max(50),
    blog_cover_img: z.string().url(),
    read_time: z.number().min(1),
});

export const contactSchema = z.object({
    full_name: z.string().min(3).max(100),
    email: z.string().email().min(1).max(100),
    company_name: z.string().min(1).max(100),
    phone: z.string().min(10).max(20),
    message: z.string().min(1),
    checkprivacy: z.boolean(),
});

export const tutorialSchema = z.object({
    title: z.string().min(1).max(255),
    thumbnail_img: z.string().url(),
    video_url: z.string().url(),
    duration: z.number().min(1),
});

export const emailSubscriptionSchema = z.object({
    email: z.string().email().min(1, { message: 'This field has to be filled.' }).max(100),
});

export const testimonialSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    client_image: z.string().url(),
    client_name: z.string().min(1).max(50),
    client_designation: z.string().min(1).max(50),
});
