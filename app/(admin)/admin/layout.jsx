import ProgressBarProvider from '@/components/ProgressBarProvider';
import Sidebar from '@/components/admin/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>WebWowZer</title>

                <link href="/admin/assets/img/favicon.png" rel="icon" />
                <link href="/admin/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                <link href="/admin/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/admin/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/admin/assets/vendor/simple-datatables/style.css" rel="stylesheet" />
                <link href="/admin/assets/css/style.css" rel="stylesheet" />
            </head>
            <body>
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex nav-logo">
                            <Link href="/admin" className="logo d-flex align-items-center w-auto">
                                <Image src="/assets/images/logo/logo.svg" width={100} height={50} alt="logo" />
                            </Link>
                        </div>
                        <i className="bi bi-list toggle-sidebar-btn"></i>
                    </div>

                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">

                            <li className="nav-item d-block d-lg-none">
                                <a className="nav-link nav-icon search-bar-toggle " href="#">
                                    <i className="bi bi-search"></i>
                                </a>
                            </li>

                            <li className="nav-item dropdown">

                                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-bell"></i>
                                    <span className="badge bg-primary badge-number">4</span>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                    <li className="dropdown-header">
                                        You have 4 new notifications
                                        <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                    </li>

                                    <li className="notification-item">
                                        <i className="bi bi-exclamation-circle text-warning"></i>
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>30 min. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li className="notification-item">
                                        <i className="bi bi-x-circle text-danger"></i>
                                        <div>
                                            <h4>Atque rerum nesciunt</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>1 hr. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li className="notification-item">
                                        <i className="bi bi-check-circle text-success"></i>
                                        <div>
                                            <h4>Sit rerum fuga</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>2 hrs. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li className="notification-item">
                                        <i className="bi bi-info-circle text-primary"></i>
                                        <div>
                                            <h4>Dicta reprehenderit</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="dropdown-footer">
                                        <a href="#">Show all notifications</a>
                                    </li>

                                </ul>

                            </li>

                            <li className="nav-item dropdown pe-3">

                                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                    {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                                    <span className="d-none d-md-block dropdown-toggle ps-2">user Name</span>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Admin Name</h6>
                                        <span>Admininstrator</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-person"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <div className="dropdown-item d-flex align-items-center cp" href="#">
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </div>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </nav>
                </header>

                <Sidebar />
                <main id="main" className="main">
                    <ProgressBarProvider>{children}</ProgressBarProvider>
                </main>
                <footer id="footer" className="footer">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Webwowzer</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://qtecsolutions.com/">Qtecsolution</a>
                    </div>
                </footer>

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

                <Script src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

                <Script src="/admin/assets/vendor/simple-datatables/simple-datatables.js" strategy="afterInteractive" />
                <Script src="/admin/assets/js/main.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
