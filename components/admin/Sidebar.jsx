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
                        <i className="bi bi-grid" />
                        <span>Users</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
