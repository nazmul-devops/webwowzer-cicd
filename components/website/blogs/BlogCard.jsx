'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import axios from '@/lib/axios';
import BlogSkeleton from './BlogSkeleton';

async function getBlogs() {
    const response = await axios.get('/api/blog');

    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    return response?.data;
}

export default function BlogCard() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getBlogsData = async () => {
        try {
            const data = await getBlogs();
            setIsLoading(false);
            setBlogs(data.blogs);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlogsData();
    }, []);

    const activeBlogs = blogs.filter((item) => item.active);

    if (isLoading) {
        return <BlogSkeleton />;
    }

    return (
        <div className="row gx-4 gy-5">
            {activeBlogs.map((blog) => (
                <div className="col-md-6" data-aos="fade-right" key={blog._id}>
                    <Link href={`/blogs/blog-details/${blog._id}`} className="bloglink">
                        <div className="cardblog">
                            <div className="cardblog-header">
                                <figure className="blogthumbnail">
                                    {blog.blog_cover_img ? (
                                        <img src={blog.blog_cover_img} alt="blog-thumbnail" />
                                    ) : (
                                        <img
                                            src="assets/images/blogs/blog-1.png"
                                            alt="default-avatar"
                                        />
                                    )}
                                </figure>
                            </div>

                            <div className="cardblog-body">
                                <h5 className="blogtitle">{blog.title}</h5>
                                <p className="blogtext">
                                    By {blog.author_name}
                                    {new Date(blog.created_at).toLocaleDateString()}{' '}
                                    {blog.read_time} min read
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
