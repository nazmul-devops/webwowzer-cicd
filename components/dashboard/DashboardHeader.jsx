import Link from 'next/link';

export default function DashboardHeader() {
    return (
        <header className="loggedinheader">
            <div className="container">
                <nav id="header-nav" className="header-nav" aria-labelledby="header-nav">
                    {/* <!-- HAMBURGER-MENU --> */}
                    <div className="d-lg-none d-block">
                        <button
                            type="button"
                            className="btn-hamburger"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mobileMenu"
                            aria-controls="mobileMenu"
                        >
                            <i className="ri-menu-2-fill" />
                        </button>
                    </div>

                    {/* <!-- MOBILE-MENU --> */}
                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex="-1"
                        id="mobileMenu"
                        aria-labelledby="mobileMenu"
                    >
                        <div className="offcanvas-header">
                            {/* <!-- BRAND-LOGO --> */}
                            <Link href="/dashboard" className="logo">
                                <img src="../assets/images/logo/logo.svg" alt="brand-logo" />
                            </Link>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <i className="ri-close-fill" />
                            </button>
                        </div>

                        <div className="offcanvas-body px-0">
                            {/* <!-- MOBILE-LIST --> */}
                            <ul className="mobilelist">
                                <li className="mobilelist-item">
                                    <Link href="/site-list" className="mobilelist-link">
                                        Sites
                                    </Link>
                                </li>

                                <li className="mobilelist-item">
                                    <Link href="/template" className="mobilelist-link">
                                        Templates
                                    </Link>
                                </li>

                                <li className="mobilelist-item">
                                    <Link href="/plans" className="mobilelist-link">
                                        Plans
                                    </Link>
                                </li>

                                <li className="mobilelist-item">
                                    <Link href="/contact" className="mobilelist-link">
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- BRAND-LOGO --> */}
                    <Link href="/dashboard" className="logo">
                        <img src="../assets/images/logo/logo.svg" alt="BRAND-LOGO" />
                    </Link>

                    <div className="d-flex align-items-center justify-content-end">
                        {/* <!-- DESKTOP-MENU --> */}
                        <div className="d-none d-lg-block">
                            <ul className="desklist">
                                <li className="desklist-item">
                                    <Link href="/site-list" className="desklist-link">
                                        Sites
                                    </Link>
                                </li>

                                <li className="desklist-item">
                                    <Link href="/template" className="desklist-link">
                                        {' '}
                                        Templates{' '}
                                    </Link>
                                </li>

                                <li className="desklist-item">
                                    <Link href="/plans" className="desklist-link">
                                        Plans
                                    </Link>
                                </li>

                                <li className="desklist-item">
                                    <Link href="/contact" className="desklist-link">
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- LOGGED-IN USER --> */}
                        <div className="loggedinuser">
                            <div className="userthumb">
                                <span>I</span>
                            </div>

                            <div className="userdropdown">
                                <ul className="droplist">
                                    <li className="droplist-item">
                                        <Link href="/account-settings" className="droplist-link">
                                            Account Settings
                                        </Link>
                                    </li>

                                    <li className="droplist-item">
                                        <Link href="/billing-details" className="droplist-link">
                                            Billing Details
                                        </Link>
                                    </li>

                                    <li className="droplist-item">
                                        <Link href="/login" className="droplist-link">
                                            Log Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
