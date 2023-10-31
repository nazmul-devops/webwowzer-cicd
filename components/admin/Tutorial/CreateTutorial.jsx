import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function TutorialCreateModal({ show, onHide, onSave }) {
    const initialFormData = {
        title: '',
        thumbnail_img: '',
        video_url: '',
        duration: 0,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const resetForm = () => {
        setFormData(initialFormData);
    };

    // const handleSave = () => {
    //     onSave(formData);
    // };
    const handleSubmit = async () => {
        if (!formData.title.trim()) {
            toast.error('Title is required');
            return;
        }
        if (!formData.thumbnail_img.trim()) {
            toast.error('Thumbnail Image is required');
            return;
        }
        if (!formData.video_url.trim()) {
            toast.error('Video URL is required');
            return;
        }
        if (formData.duration <= 0) {
            toast.error('Duration must be greater than 0');
            return;
        }

        try {
            // Prepare the data to send to the server
            const tutorialData = {
                title: formData.title,
                thumbnail_img: formData.thumbnail_img,
                video_url: formData.video_url,
                duration: parseFloat(formData.duration),
            };

            // Make an API POST request to create a new tutorial
            const response = await axios.post('/api/tutorial', tutorialData);

            if (response.status === 200) {
                // Tutorial created successfully
                onHide(); // Close the modal
                toast.success('Added a new tutorial');
                resetForm();
                onSave(); // Trigger the refresh
            } else {
                console.log('Tutorial creation failed:', response.data);
            }
        } catch (error) {
            console.error('Error saving the blog', error);
            const errorData = error.response.data.error.issues;
            errorData.forEach((err) => {
                const errorMessage = `${err.path.join('.')}: ${err.message}`;
                toast.error(errorMessage);
            });
        }
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Tutorial</Modal.Title>
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
                    <Form.Group controlId="formThumbnailImage">
                        <Form.Label>Thumbnail Image</Form.Label>
                        <Form.Control
                            type="text"
                            name="thumbnail_img"
                            value={formData.thumbnail_img}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formVideoUrl">
                        <Form.Label>Video URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="video_url"
                            value={formData.video_url}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDuration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            type="number"
                            name="duration"
                            value={formData.duration}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Tutorial
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
