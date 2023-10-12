import { Inter } from 'next/font/google';
import Script from 'next/script';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'WebWowZer',
    description: 'Make Your Website Awesome',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
                />
                <link rel="stylesheet" href="/assets/css/swiper/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/assets/css/back-top/back-top.css" />
                <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
            </head>

            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />

                {/* Required Script */}
                <Script src="/assets/js/gsap/gsap.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/gsap/ScrollTrigger.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/header/header.js" strategy="lazyOnload" />
                <Script src="/assets/js/copyright/copyright.js" strategy="lazyOnload" />
                <Script src="/assets/js/back-top/back-top.js" strategy="lazyOnload" />
                <Script src="/assets/js/back-top/backtotop.js" strategy="lazyOnload" />
                <Script src="/assets/js/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/home-slider/homeslider.js" strategy="lazyOnload" />
                <Script src="/assets/js/bootsrap/bootstrap.bundle.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/tooltip/tooltip.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}
