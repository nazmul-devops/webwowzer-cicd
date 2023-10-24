import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function TutorialCreateModal({ show, onHide, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        thumbnail_img: '',
        video_url: '',
        duration: 0,
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
    };
    const handleSubmit = async () => {
        try {
            // Prepare the data to send to the server
            const tutorialData = {
                title: formData.title,
                thumbnail_img: formData.thumbnail_img,
                video_url: formData.video_url,
                duration: formData.duration,
            };

            // Make an API POST request to create a new tutorial
            const response = await axios.post('/api/tutorial', tutorialData);

            if (response.status === 200) {
                // Tutorial created successfully
                onHide(); // Close the modal
                onSave(); // Trigger the refresh
            } else {
                console.log('Tutorial creation failed:', response.data);
            }
        } catch (error) {
            console.error('Error creating tutorial', error);
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
