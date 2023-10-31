/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-alert */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

import Loader from '@/components/Loader';
import BlogCreateModal from '@/components/admin/Blog/BlogCreateModal';
import BlogEditModal from '@/components/admin/Blog/BlogEditModal';
import axios from '@/lib/axios';
import customStyles from '@/lib/customTables';

export default function AdminBlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [perPage, setPerPage] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', or 'inactive'

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
            const errorData = error.response.data.error.issues;
            errorData.forEach((err) => {
                const errorMessage = `${err.path.join('.')}: ${err.message}`;
                toast.error(errorMessage);
            });
        }
    };

    const filteredBlogs = blogs.filter((blog) => {
        if (filterStatus === 'all') {
            return blog.title.toLowerCase().includes(searchText.toLowerCase());
        }
        return (
            blog.active === (filterStatus === 'active') &&
            blog.title.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Blog Content',
            selector: 'blog_content',
            sortable: true,
            cell: (row) => {
                const maxLength = 50;
                const content =
                    row.blog_content.length > maxLength
                        ? `${row.blog_content.slice(0, maxLength)}...`
                        : row.blog_content;
                return <p>{content}</p>;
            },
        },
        {
            name: 'Blog Image',
            selector: 'blog_cover_img',
            sortable: true,
            cell: (row) => (
                <Image
                    src={row.blog_cover_img ? row.blog_cover_img : '/jpath'}
                    height={100}
                    className="img-thumbnail my-2"
                    width={100}
                    alt="blog thumb "
                />
            ),
        },
        {
            name: 'Author',
            selector: 'author_name',
            sortable: true,
        },
        {
            name: 'Created',
            selector: 'created_at',
            sortable: true,
            cell: (row) => <p>{row.created_at.split('T')[0]} </p>,
        },
        {
            name: 'Status',
            selector: 'active',
            sortable: true,
            cell: (row) => (
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="button"
                        onChange={() => handleCheckboxChange(row._id, row.active)}
                        checked={row.active}
                        id={`flexSwitchCheck-${row._id}`}
                    />
                </div>
            ),
        },
        {
            name: 'Action',
            selector: 'active',
            sortable: true,
            cell: (row) => (
                <div className="d-flex gap-2 align-items-center">
                    <button
                        onClick={() => handleEdit(row)}
                        type="button"
                        className="btn btn-primary btn-small "
                    >
                        <i className="bi bi-pencil-square " />
                    </button>

                    <button
                        onClick={() => deleteBlog(row._id)}
                        type="button"
                        className="btn btn-danger btn-small"
                    >
                        <i className="bi bi-trash" />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">All Blogs </h5>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleAdd}
                                >
                                    <i className="bi bi-plus-circle" /> Add Blog
                                </button>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by title"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-select"
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            {loading ? (
                                <Loader />
                            ) : (
                                <div className="table-responsive nowrap-table">
                                    {blogs.length > 0 && (
                                        <DataTable
                                            columns={columns}
                                            data={filteredBlogs}
                                            pagination
                                            customStyles={customStyles}
                                            paginationPerPage={perPage}
                                            onChangeRowsPerPage={setPerPage}
                                        />
                                    )}
                                </div>
                            )}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
