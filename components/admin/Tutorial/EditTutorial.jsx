import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function EditTutorialModal({ show, onHide, tutorial, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        thumbnail_img: '',
        video_url: '',
        duration: 0,
    });

    useEffect(() => {
        if (tutorial) {
            setFormData({
                title: tutorial.title || '',
                thumbnail_img: tutorial.thumbnail_img || '',
                video_url: tutorial.video_url || '',
                duration: parseFloat(tutorial.duration) || 0,
            });
        }
    }, [tutorial]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Prepare the data to send to the server
            const tutorialData = {
                title: formData.title,
                thumbnail_img: formData.thumbnail_img,
                video_url: formData.video_url,
                duration: parseFloat(formData.duration),
            };

            // Make an API PUT request to update the tutorial
            const response = await axios.put(`/api/tutorial/${tutorial._id}`, tutorialData);

            if (response.status === 200) {
                onSave(formData);
                onHide();
                toast.success('Tutorial updated successfully ');
            } else {
                console.log('Tutorial update failed:', response.data);
            }
        } catch (error) {
            console.error('Error updating tutorial', error);
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
                <Modal.Title>Edit Tutorial</Modal.Title>
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
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Save Tutorial
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
