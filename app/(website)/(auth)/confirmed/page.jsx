import Link from 'next/link';

export default function ConfimedPage() {
    return (
        <main className="authmain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-lg-auto">
                        <div className="authmain-details" data-aos="fade-up">
                            <div className="authmain-header">
                                <h1 className="display-6 fw-bold text-center">Password Changed</h1>
                            </div>

                            <div className="authmain-body">
                                <form className="authform">
                                    <div className="authform-header align-items-center">
                                        <div className="titlebox">
                                            <h5 className="authtitle text-center">
                                                <span className="fw-medium">All done!</span>
                                            </h5>
                                        </div>

                                        <div className="info">
                                            <p className="authtext">
                                                Your password has been reset. <br />
                                                Wait a while for automatic login.
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-center mt-4">
                                            <div className="submitbox">
                                                <Link href="/login" className="btn-submit">
                                                    Continue
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
