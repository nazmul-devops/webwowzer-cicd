import Link from 'next/link';

export default function ChangePassword() {
    return (
        <main className="authmain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-lg-auto">
                        <div className="authmain-details" data-aos="fade-up">
                            <div className="authmain-header">
                                <h1 className="display-6 fw-bold text-center">Reset Password</h1>
                            </div>

                            <div className="authmain-body">
                                <form className="authform">
                                    <div className="authform-header">
                                        <h5 className="authtitle fw-medium">Set New Password</h5>

                                        <div className="info">
                                            <p className="text">
                                                Your new password must be different from previous
                                                used password.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="authform-body">
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="inputbox forgotbox">
                                                    <input
                                                        type="password"
                                                        id="newpassword"
                                                        placeholder="New password"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />

                                                    <button type="button" className="btn-showhide">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.3055 13.824C9.87034 13.3896 9.60547 12.7993 9.60547 12.1372C9.60547 10.8105 10.674 9.74121 11.9998 9.74121C12.656 9.74121 13.2599 10.0068 13.6874 10.4412"
                                                                stroke="#787272"
                                                                strokeWidth="1.13515"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M14.3496 12.562C14.174 13.5382 13.4052 14.3086 12.4297 14.4857"
                                                                stroke="#787272"
                                                                strokeWidth="1.13515"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M7.95519 16.1744C6.75419 15.2314 5.73709 13.8541 5 12.137C5.74466 10.4124 6.76857 9.02747 7.97713 8.07697C9.17812 7.12647 10.5638 6.61035 12.0001 6.61035C13.4448 6.61035 14.8297 7.13404 16.0382 8.09135"
                                                                stroke="#787272"
                                                                strokeWidth="1.13515"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.6366 9.75586C18.1572 10.4475 18.6151 11.2459 19.0003 12.1366C17.5117 15.5852 14.8812 17.6626 12.0001 17.6626C11.347 17.6626 10.703 17.5566 10.084 17.35"
                                                                stroke="#787272"
                                                                strokeWidth="1.13515"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.9685 6.16797L6.03125 18.1052"
                                                                stroke="#787272"
                                                                strokeWidth="1.13515"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="inputbox forgotbox">
                                                    <input
                                                        type="password"
                                                        id="confirmnewpassword"
                                                        placeholder="Confirm new password"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />

                                                    <button type="button" className="btn-showhide">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M14.5837 12.053C14.5837 13.4805 13.426 14.6373 11.9985 14.6373C10.571 14.6373 9.41406 13.4805 9.41406 12.053C9.41406 10.6246 10.571 9.46777 11.9985 9.46777C13.426 9.46777 14.5837 10.6246 14.5837 12.053Z"
                                                                stroke="#0B2330"
                                                                strokeWidth="1.22638"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M11.9985 18.023C15.1119 18.023 17.9595 15.7845 19.5628 12.053C17.9595 8.32155 15.1119 6.08301 11.9985 6.08301H12.0018C8.88843 6.08301 6.04078 8.32155 4.4375 12.053C6.04078 15.7845 8.88843 18.023 12.0018 18.023H11.9985Z"
                                                                stroke="#0B2330"
                                                                strokeWidth="1.22638"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-5">
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
                                                        Reset
                                                    </button>

                                                    <Link href="/confirmed" className="btn-submit">
                                                        Reset
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
