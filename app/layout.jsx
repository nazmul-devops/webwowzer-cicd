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
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional" rel="stylesheet" />
            </head>
            <AOSInit />

            <body>
                <AuthProvider>
                    <ProgressBarProvider>{children}</ProgressBarProvider>
                    <ToasterProvider />
                </AuthProvider>
            </body>
            {/* Required Script */}
            <Script src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async={true} />
            <Script src="/assets/js/back-top/back-top.js" strategy="afterInteractive" />
            <Script src="/assets/js/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/home-slider/homeslider.js" strategy="afterInteractive" />
            <Script src="/assets/js/tooltip/tooltip.js" strategy="afterInteractive" />
            <Script src="/admin/assets/js/main.js" async={true} />

        </html>
    );
}
