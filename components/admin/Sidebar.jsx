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
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/users')}`}
                        href="/admin/users"
                    >
                        <i className="bi bi-people" />
                        <span>Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/blogs')}`}
                        href="/admin/blogs"
                    >
                        <i className="bi bi-substack" />
                        <span>Blogs</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/contacts')}`}
                        href="/admin/contacts"
                    >
                        <i className="bi bi-envelope" />
                        <span>Contacts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${isLinkActive('/admin/tutorials')}`}
                        href="/admin/tutorials"
                    >
                        <i className="bi bi-play-btn-fill" />
                        <span>Tutorials </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
