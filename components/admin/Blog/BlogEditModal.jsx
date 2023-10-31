import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import globalJoditConfig from '@/lib/joditConfig';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function BlogEditModal({ show, onHide, blog, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        blog_cover_img: '',
        author_name: '',
        read_time: 0,
        blog_content: '',
    });

    useEffect(() => {
        if (blog) {
            setFormData({
                title: blog.title || '',
                blog_cover_img: blog.blog_cover_img || '',
                author_name: blog.author_name || '',
                read_time: blog.read_time || 0,
                blog_content: blog.blog_content || '',
            });
        }
    }, [blog]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCoverImage">
                        <Form.Label>Blog Cover Image</Form.Label>
                        <Form.Control
                            type="text"
                            name="blog_cover_img"
                            value={formData.blog_cover_img}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAuthorName">
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="author_name"
                            value={formData.author_name}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formReadTime">
                        <Form.Label>Read Time (minutes)</Form.Label>
                        <Form.Control
                            type="number"
                            name="read_time"
                            value={formData.read_time}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formContent">
                        <Form.Label>Content</Form.Label>
                        <JoditEditor
                            value={formData.blog_content}
                            config={globalJoditConfig}
                            onChange={(content) =>
                                setFormData({ ...formData, blog_content: content })
                            }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Blog
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
