import { Space_Grotesk } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const spaceGrotesk = Space_Grotesk({
    display: 'swap',
    weights: [300, 400, 500, 600, 700],
    subsets: ['latin-ext'],
});

export default function WebsiteLayout({ children }) {
    return (
        <main className={spaceGrotesk.className}>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
