import { Space_Grotesk } from 'next/font/google';

import DashboardFooter from '@/components/dashboard/DashboardFooter';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const spaceGrotesk = Space_Grotesk({
    display: 'swap',
    weights: [300, 400, 500, 600, 700],
    subsets: ['latin-ext'],
});

export default function WebsiteLayout({ children }) {
    return (
        <main className={spaceGrotesk.className}>
            <DashboardHeader />
            {children}
            <DashboardFooter />
        </main>
    );
}
