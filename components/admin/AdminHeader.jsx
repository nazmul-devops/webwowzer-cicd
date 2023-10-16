'use client';

import Image from 'next/image';
import Link from 'next/link';

import '../../public/admin/assets/css/style.css';
import '../../public/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/admin/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/admin/assets/vendor/boxicons/css/boxicons.min.css';
import '../../public/admin/assets/vendor/simple-datatables/style.css';

export default function AdminHeader() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex nav-logo">
                    <Link href="/admin" className="logo d-flex align-items-center w-auto">
                        <Image
                            src="/assets/images/logo/logo.svg"
                            width={200}
                            height={50}
                            alt="logo"
                        />
                    </Link>
                </div>
                <i className="bi bi-list toggle-sidebar-btn" />
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                            <i className="bi bi-search" />
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="bi bi-bell" />
                            <span className="badge bg-primary badge-number">4</span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have 4 new notifications
                                <a href="#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all
                                    </span>
                                </a>
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning" />
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
                                <i className="bi bi-x-circle text-danger" />
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
                                <i className="bi bi-check-circle text-success" />
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
                                <i className="bi bi-info-circle text-primary" />
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
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                user Name
                            </span>
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
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="users-profile.html"
                                >
                                    <i className="bi bi-person" />
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <div
                                    className="dropdown-item d-flex align-items-center cp"
                                    href="#"
                                >
                                    <i className="bi bi-box-arrow-right" />
                                    <span>Sign Out</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
