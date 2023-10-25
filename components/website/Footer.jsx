import Link from 'next/link';

import EmailSubscription from '@/components/website/EmailSubscription';

export default function Footer() {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-content">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <figure className="logo">
                                    <img src="assets/images/logo/logo.svg" alt="footer-logo" />
                                </figure>

                                <p className="infotext">
                                    Subscribe to keep up with the latest news
                                </p>

                                <div className="getintouch">
                                    <h5 className="title">GET IN TOUCH</h5>

                                    <ul className="social-list">
                                        <li className="social-list-item">
                                            <a
                                                href="#"
                                                className="social-list-link"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Follow us on Facebook"
                                            >
                                                <svg
                                                    width="11"
                                                    height="11"
                                                    viewBox="0 0 11 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        className="pathtop"
                                                        d="M9.18225 0.656067H1.87425C1.20252 0.656067 0.65625 1.20234 0.65625 1.87407V9.18207C0.65625 9.85379 1.20252 10.4001 1.87425 10.4001H9.18225C9.85398 10.4001 10.4003 9.85379 10.4003 9.18207V1.87407C10.4003 1.20234 9.85398 0.656067 9.18225 0.656067Z"
                                                        fill="#0B2330"
                                                    />
                                                    <path
                                                        className="pathdown"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.87805 5.52919H7.35555V4.31119C7.35555 3.97502 7.62838 4.00669 7.96455 4.00669H8.57355V2.48419H7.35555C6.871 2.48419 6.40629 2.67668 6.06366 3.01931C5.72103 3.36194 5.52855 3.82664 5.52855 4.31119V5.52919H4.31055V7.05169H5.52855V10.4012H7.35555V7.05169H8.26905L8.87805 5.52919Z"
                                                        fill="#ffffff"
                                                    />
                                                </svg>
                                            </a>
                                        </li>

                                        <li className="social-list-item">
                                            <a
                                                href="#"
                                                className="social-list-link"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Follow us on Twitter"
                                            >
                                                <svg
                                                    width="12"
                                                    height="11"
                                                    viewBox="0 0 12 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.4563 1.80992C11.0374 2.00667 10.5944 2.13745 10.1409 2.1982C10.6188 1.89283 10.9761 1.40926 11.1451 0.839138C10.6977 1.12488 10.2083 1.32612 9.69785 1.43417C9.38483 1.07402 8.97842 0.82362 8.53147 0.715517C8.08452 0.607414 7.61771 0.646614 7.19173 0.828018C6.76574 1.00942 6.40029 1.32464 6.1429 1.73269C5.8855 2.14073 5.74806 2.62273 5.74845 3.11602C5.74669 3.30425 5.76444 3.49211 5.80136 3.67611C4.89313 3.62816 4.00453 3.37434 3.19364 2.93123C2.38275 2.48812 1.66783 1.86572 1.09563 1.10469C0.801858 1.6455 0.71082 2.28664 0.841099 2.89727C0.971379 3.5079 1.31315 4.04196 1.79666 4.39046C1.43544 4.37995 1.08185 4.2761 0.765694 4.08765V4.11444C0.766288 4.68215 0.948494 5.23232 1.28164 5.67232C1.61479 6.11232 2.07854 6.4153 2.59482 6.53025C2.39951 6.58569 2.19821 6.61291 1.99623 6.61122C1.8512 6.61397 1.70631 6.59989 1.56408 6.56921C1.71163 7.05712 1.996 7.48379 2.37804 7.79048C2.76007 8.09717 3.221 8.2688 3.69736 8.28174C2.88926 8.96227 1.89265 9.33146 0.866778 9.33032C0.684138 9.33162 0.501609 9.32031 0.320312 9.29647C1.36422 10.0209 2.58066 10.404 3.82253 10.3997C8.02352 10.3997 10.3204 6.65237 10.3204 3.4041C10.3204 3.29537 10.3169 3.19054 10.312 3.08631C10.7624 2.73929 11.1501 2.30675 11.4563 1.80992Z"
                                                        fill="#0B2330"
                                                    />
                                                </svg>
                                            </a>
                                        </li>

                                        <li className="social-list-item">
                                            <a
                                                href="#"
                                                className="social-list-link"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Follow us on Linkedin"
                                            >
                                                <svg
                                                    width="12"
                                                    height="13"
                                                    viewBox="0 0 12 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M11.8137 12.0969H9.35243V8.18207C9.35243 7.15756 8.96773 6.45794 8.12088 6.45794C7.47348 6.45794 7.11333 6.93012 6.94578 7.38502C6.88276 7.54816 6.89264 7.77562 6.89264 8.00307V12.0969H4.45436C4.45436 12.0969 4.48574 5.16227 4.45436 4.53197H6.89264V5.71935C7.0369 5.20014 7.81592 4.45931 9.0591 4.45931C10.6017 4.45931 11.8137 5.5473 11.8137 7.89059V12.0969ZM1.98874 3.5857H1.9728C1.18721 3.5857 0.677734 3.00745 0.677734 2.27443C0.677734 1.5272 1.20214 0.960938 2.00368 0.960938C2.80446 0.960938 3.29697 1.52581 3.3124 2.2722C3.3124 3.00523 2.80446 3.5857 1.98874 3.5857ZM0.958662 4.53197H3.12917V12.0969H0.958662V4.53197Z"
                                                        fill="#0B2330"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-details">
                                <h5 className="title">About Us</h5>

                                <ul className="footerlist">
                                    <li className="footerlist-item">
                                        <a href="#" className="footerlist-link">
                                            Appointment
                                        </a>
                                    </li>

                                    <li className="footerlist-item">
                                        <Link href="/about" className="footerlist-link">
                                            About Us
                                        </Link>
                                    </li>

                                    <li className="footerlist-item">
                                        <a href="#" className="footerlist-link">
                                            Privacy Policy
                                        </a>
                                    </li>

                                    <li className="footerlist-item">
                                        <a href="#" className="footerlist-link">
                                            Terms & Condition
                                        </a>
                                    </li>

                                    <li className="footerlist-item">
                                        <a href="#" className="footerlist-link d-lg-none d-block">
                                            Portfolio
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-details">
                                <h5 className="title">Contact Us</h5>

                                <ul className="footerlist">
                                    <li className="footerlist-item">
                                        <Link href="/contact" className="footerlist-link">
                                            Contact Us
                                        </Link>
                                    </li>

                                    <li className="footerlist-item">
                                        <a href="tel:+12345678900" className="footerlist-link">
                                            Phone : +123-4567-8900
                                        </a>
                                    </li>

                                    <li className="footerlist-item">
                                        <a
                                            href="mailto:infoyour@gmail.com"
                                            className="footerlist-link"
                                        >
                                            E-mail: infoyour@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-details">
                                <p className="textinfo">
                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                    text. It has roots.
                                </p>

                                <EmailSubscription />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-between">
                        <p className="textcopyright">
                            &copy; <span className="currentyear" /> WebWowZer. All rights reserved.
                        </p>

                        <div className="d-none d-md-block">
                            <a href="#" className="footerlink">
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
