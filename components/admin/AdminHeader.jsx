'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import '../../public/admin/assets/vendor/bootstrap/css/bootstrap.min.css';

import '../../public/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/admin/assets/vendor/boxicons/css/boxicons.min.css';
import '../../public/admin/assets/vendor/simple-datatables/style.css';

import '../../public/admin/assets/css/style.css';

export default function AdminHeader() {
    const session = useSession();

    const router = useRouter();

    const handleLoggedOut = () => {
        signOut({
            redirect: true,
        }).then(() => {
            router.push('/login');
            toast.success('Logged out successfully!');
        });
    };

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
                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                {`${session?.data?.user?.first_name} ${session?.data?.user?.last_name}`}
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{`${session?.data?.user?.first_name} ${session?.data?.user?.last_name}`}</h6>
                                <span>{session?.data?.user?.role}</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link
                                    href="/admin/account-settings"
                                    className="dropdown-item d-flex align-items-center"
                                >
                                    <i className="bi bi-person" />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item d-flex align-items-center cp"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleLoggedOut}
                                >
                                    <i className="bi bi-box-arrow-right" />
                                    <span>Sign Out</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
