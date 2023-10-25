'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();

    const isLinkActive = (href) => (pathname === href ? 'active' : '');

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className={`nav-link ${isLinkActive('/admin')}`} href="/admin">
                        <i className="bi bi-speedometer2" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/users')}`}
                        href="/admin/users"
                    >
                        <i className="bi bi-person-lines-fill" />
                        <span>Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/tutorials')}`}
                        href="/admin/tutorials"
                    >
                        <i className="bi bi-layout-sidebar-inset-reverse" />
                        <span>Tutorials</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/blogs')}`}
                        href="/admin/blogs"
                    >
                        <i className="bi bi-file-break" />
                        <span>Blogs</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/contacts')}`}
                        href="/admin/contacts"
                    >
                        <i className="bi bi-person-rolodex" />
                        <span>Contacts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/email-subscriptions')}`}
                        href="/admin/email-subscriptions"
                    >
                        <i className="bi bi-envelope" />
                        <span>Email Subsctiptions</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
