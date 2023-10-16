import DashboardFooter from '@/components/dashboard/DashboardFooter';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default function WebsiteLayout({ children }) {
    return (
        <>
            <DashboardHeader />
            {children}
            <DashboardFooter />
        </>
    );
}
