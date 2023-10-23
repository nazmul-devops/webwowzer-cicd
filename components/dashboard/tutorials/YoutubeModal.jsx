import Modal from 'react-bootstrap/Modal';

function YouTubeModal({ show, handleClose, tutorial }) {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Body>
                <iframe
                    title="YouTube Video"
                    width="800"
                    height="450"
                    src={tutorial.video_url}
                    frameBorder="0"
                    allowFullScreen
                />
            </Modal.Body>
        </Modal>
    );
}

export default YouTubeModal;
