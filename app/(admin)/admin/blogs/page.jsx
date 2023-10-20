'use client';

import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

// async function getBlogs() {
//     const response = await axios('/api/blog');

//     if (response.status !== 200) {
//         throw new Error('Failed to fetch data');
//     }
//     return response.data;
// }

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchBlog() {
        try {
            const response = await axios.get('/api/blog');
            console.log(response.data.blogs);
            setLoading(false);
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Error fetching blogs', error);
        }
    }
    useEffect(() => {
        fetchBlog();
    }, []);

    const handleCheckboxChange = async (blogId, isActive) => {
        try {
            const response = await axios.patch(`/api/blog/${blogId}`, { active: !isActive });
            if (response.status === 200) {
                alert(response.data.message);
                fetchBlog();
            }
        } catch (error) {
            console.log('cannot change status', error);
        }
    };
    const deleteBlog = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this blog ?');
        if (confirmed) {
            try {
                const response = await axios.delete(`/api/blog/${id}`);
                if (response.status === 200) {
                    alert(response.data.message);
                    fetchBlog();
                } else {
                    alert('Failed to delete the blog post');
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Blogs</h5>
                                <button className="btn btn-success">Add</button>

                                {/* <!-- Table with stripped rows --> */}
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Blog Title</th>
                                            <th scope="col">Blog Content</th>
                                            <th scope="col">Blog Image</th>
                                            <th scope="col">author name</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <p>Loading ...</p>
                                        ) : (
                                            <>
                                                {blogs.map((blog, index) => (
                                                    <tr key={blog._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{blog.title}</td>
                                                        <td>
                                                            {blog.blog_content.length > 30
                                                                ? `${blog.blog_content.slice(
                                                                      0,
                                                                      30
                                                                  )}...`
                                                                : blog.blog_content}
                                                        </td>

                                                        <td>
                                                            <img
                                                                src={
                                                                    blog.blog_cover_img
                                                                        ? blog.blog_cover_img
                                                                        : 'jpath'
                                                                }
                                                                alt="blog thumb "
                                                            />
                                                        </td>
                                                        <td>{blog.author_name}</td>
                                                        <td>{blog.created_at.split('T')[0]}</td>
                                                        <td>
                                                            <div className="form-check form-switch">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="button"
                                                                    onChange={() =>
                                                                        handleCheckboxChange(
                                                                            blog._id,
                                                                            blog.active
                                                                        )
                                                                    }
                                                                    checked={blog.active}
                                                                    id={`flexSwitchCheck-${blog._id}`}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => deleteBlog(blog._id)}
                                                                type="button"
                                                                className="btn btn-danger btn-small"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                                {/* <!-- End Table with stripped rows --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
