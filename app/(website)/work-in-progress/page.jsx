import Link from 'next/link';

export default function WorkInProgressPage() {
    return (
        <main className="main">
            <section className="workingprgoress">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 mx-lg-auto">
                            <div className="workingprgoress-content">
                                <div className="workingprgoress-header">
                                    <h1 className="display-1 fw-bold">
                                        Work <br />
                                        in progress
                                    </h1>
                                </div>

                                <div className="workingprgoress-body">
                                    <div className="info">
                                        <p className="text">
                                            This feature is still on development. Please wait and
                                            explore other pages.
                                        </p>
                                    </div>

                                    <div className="backbutton">
                                        <Link href="/" className="register-link">
                                            Go Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
