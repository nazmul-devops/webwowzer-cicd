'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";

function Sidebar() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className={`nav-link ${pathname == "/admin" ? 'active' : ''}`} href="/admin">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${pathname == "/admin/users" ? 'active' : ''}`} href="/admin/users">
                        <i className="bi bi-grid"></i>
                        <span>Users</span>
                    </Link>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar