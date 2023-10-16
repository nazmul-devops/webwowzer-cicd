import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function WebsiteLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
