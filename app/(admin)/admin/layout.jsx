import ProgressBarProvider from '@/components/ProgressBarProvider';
import AdminFooter from '@/components/admin/AdminFooter';
import AdminHeader from '@/components/admin/AdminHeader';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminHeader />

            <Sidebar />

            <main id="main" className="main">
                <ProgressBarProvider>{children}</ProgressBarProvider>
            </main>

            <AdminFooter />
        </>
    );
}
