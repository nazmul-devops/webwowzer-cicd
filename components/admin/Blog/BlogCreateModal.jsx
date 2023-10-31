/* eslint-disable no-unused-vars */

'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import globalJoditConfig from '@/lib/joditConfig';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function BlogCreateModal({ show, onHide, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        blog_cover_img: '',
        author_name: '',
        read_time: 0,
        blog_content: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditorChange = (content) => {
        setFormData({ ...formData, blog_content: content });
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Blog</Modal.Title>
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
                            config={globalJoditConfig}
                            value={formData.blog_content}
                            onChange={handleEditorChange}
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
