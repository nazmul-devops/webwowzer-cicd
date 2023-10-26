import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <div className="text-center bg-white py-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;
