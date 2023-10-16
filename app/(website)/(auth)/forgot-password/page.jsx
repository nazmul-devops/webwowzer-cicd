import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <main className="authmain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-lg-auto">
                        <div className="authmain-details" data-aos="fade-up">
                            <div className="authmain-header">
                                <h1 className="display-6 fw-bold text-center">Forgot Password</h1>
                            </div>

                            <div className="authmain-body">
                                <form className="authform">
                                    <div className="authform-header">
                                        <h5 className="authtitle fw-medium">Reset Password</h5>

                                        <div className="info">
                                            <p className="text">
                                                Please enter your email below and we will send a
                                                password reset link to the email.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="authform-body">
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="inputbox">
                                                    <input
                                                        type="email"
                                                        id="forgotemail"
                                                        placeholder="Enter email address"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-flex align-items-center justify-content-end gap-5">
                                                    <button
                                                        className="login-link fw-bold"
                                                        type="submit"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="btn-submit d-none"
                                                        type="submit"
                                                    >
                                                        Next
                                                    </button>

                                                    <Link
                                                        href="/change-password"
                                                        className="btn-submit"
                                                    >
                                                        Next
                                                    </Link>
                                                </div>
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
