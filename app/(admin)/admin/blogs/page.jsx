'use client';

import BlogCreateModal from '@/components/admin/Blog/BlogCreateModal';
import BlogEditModal from '@/components/admin/Blog/BlogEditModal';
import axios from '@/lib/axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    async function fetchBlog() {
        try {
            const response = await axios.get(`/api/blog`);
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
                toast.success(response.data.message);
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
                    toast.success(response.data.message);
                    fetchBlog();
                } else {
                    toast.error('Failed to delete the blog post');
                }
            } catch (err) {
                console.error(err);
            }
        }
    };
    const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setShowEditModal(true);
    };

    const handleAdd = () => {
        setSelectedBlog(null); // Reset selectedBlog for adding
        setShowCreateModal(true);
    };

    const handleSaveBlog = async (formData) => {
        try {
            if (selectedBlog) {
                // Editing an existing blog
                const response = await axios.put(`/api/blog/${selectedBlog._id}`, formData);
                if (response.status === 200) {
                    toast.success(response.data.message);
                } else {
                    console.log(response);
                } 
            } else {
                // Adding a new blog
                const response = await axios.post('/api/blog', formData);
                if (response.status === 200) {
                    toast.success(response.data.message);
                }
            } 
            fetchBlog();
            window.location.reload();
            setShowCreateModal(false);
            setShowEditModal(false);
        } catch (error) {
            console.error('Error saving the blog', error);
            const errorData= error.response.data.error.issues;
            errorData.forEach((error) => {
                const errorMessage = `${error.path.join('.')}: ${error.message}`;
                toast.error(errorMessage);
              });
        }
    
    };

    return (
        <>
            <div className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Blogs</h5>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleAdd}
                                >
                                    Add
                                </button>

                             <div className="table-responsive nowrap-table">
                                   {/* <!-- Table with stripped rows --> */}
                                   <table className="table">
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
                                            <tr>
                                                <td colSpan="7">
                                                    <Placeholder as="p" animation="glow">
                                                        <Placeholder xs={12} size="lg" />
                                                        <Placeholder xs={8} size="lg" />
                                                        <Placeholder xs={6} size="lg" />
                                                        <Placeholder xs={3} size="lg" />
                                                        <Placeholder xs={3} size="lg" />
                                                        <Placeholder xs={2} size="lg" />
                                                        <Placeholder xs={3} size="lg" />
                                                    </Placeholder>
                                                </td>
                                            </tr>
                                        ) : (
                                            <>
                                                {blogs.map((blog, index) => (
                                                    <tr key={blog._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{blog.title}</td>
                                                        <td>
                                                            {blog.blog_content.length > 30 ? (
                                                                `${blog.blog_content.slice(
                                                                    0,
                                                                    30
                                                                )}...`
                                                            ) : (
                                                            blog.blog_content,
                                                            )}
                                                        </td>

                                                        <td>
                                                            <Image
                                                                src={
                                                                    blog.blog_cover_img
                                                                        ? blog.blog_cover_img
                                                                        : '/jpath'
                                                                }
                                                                height={100}
                                                                className="img-thumbnail"
                                                                width={100}
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
                                                        <td className="d-flex gap-2">
                                                            <button
                                                                onClick={() => handleEdit(blog)}
                                                                type="button"
                                                                className="btn btn-primary btn-small"
                                                            >
                                                                Edit
                                                            </button>

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
                </div>
            </div>
            <BlogCreateModal
                show={showCreateModal}
                onHide={() => setShowCreateModal(false)}
                onSave={handleSaveBlog}
            />
            <BlogEditModal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                blog={selectedBlog}
                onSave={handleSaveBlog}
            />
        </>
    );
}
