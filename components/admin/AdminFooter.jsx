import Script from 'next/script';

export default function AdminFooter() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>Webwowzer</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://qtecsolutions.com/">Qtecsolution</a>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short" />
            </a>

            <Script
                src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/admin/assets/vendor/simple-datatables/simple-datatables.js"
                strategy="afterInteractive"
            />
            <Script src="/admin/assets/js/main.js" strategy="afterInteractive" />
        </>
    );
}
