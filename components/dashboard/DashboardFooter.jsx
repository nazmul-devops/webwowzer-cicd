export default function DashboardFooter() {
    return (
        <footer className="loggedfooter">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <ul className="privacylist">
                        <li className="privacylist-item">
                            <a href="#" className="privacylist-link">
                                Privacy
                            </a>
                        </li>

                        <li className="privacylist-item">|</li>

                        <li className="privacylist-item">
                            <a href="#" className="privacylist-link">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
