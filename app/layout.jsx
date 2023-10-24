import Script from 'next/script';

import AOSInit from '@/components/Aos';
import AuthProvider from '@/components/AuthProvider';
import ProgressBarProvider from '@/components/ProgressBarProvider';
import ToasterProvider from '@/components/ToastProvider';
import '../styles/globals.css';

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
            </head>
            <AOSInit />

            <body>
                <AuthProvider>
                    <ProgressBarProvider>{children}</ProgressBarProvider>
                    <ToasterProvider />
                </AuthProvider>
            </body>

            {/* Required Script */}
            <Script src="/assets/js/gsap/gsap.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/gsap/ScrollTrigger.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/header/header.js" strategy="afterInteractive" />
            {/* <Script src="/assets/js/copyright/copyright.js" strategy="lazyOnload" /> */}
            <Script src="/assets/js/back-top/back-top.js" strategy="afterInteractive" />
            <Script src="/assets/js/back-top/backtotop.js" strategy="afterInteractive" />
            <Script src="/assets/js/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/home-slider/homeslider.js" strategy="afterInteractive" />
            <Script src="/assets/js/bootsrap/bootstrap.bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/tooltip/tooltip.js" strategy="afterInteractive" />
        </html>
    );
}
