import Link from 'next/link';

export default function ChangePasswordModal() {
    return (
        <div
            className="modal fade pe-0 changemodal"
            id="changePasswordModal"
            tabIndex="-1"
            aria-labelledby="changePasswordModal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Change Password</h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="ri-close-fill" />
                        </button>
                    </div>

                    <div className="modal-body">
                        <form className="authform">
                            <div className="authform-body">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="inputbox forgotbox">
                                                <label
                                                    htmlFor="currentpassword"
                                                    className="inputlabel"
                                                >
                                                    Current password
                                                    <input
                                                        type="password"
                                                        id="currentpassword"
                                                        placeholder="Enter your current password"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </label>

                                                <button
                                                    type="button"
                                                    className="btn-showhide"
                                                    style={{ transform: 'translateY(40%)' }}
                                                >
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

                                            <Link href="/forgot-password" className="btn-forgot">
                                                Forgot password
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="inputbox forgotbox">
                                                <label htmlFor="newpassword" className="inputlabel">
                                                    New password
                                                    <input
                                                        type="password"
                                                        id="newpassword"
                                                        placeholder="Enter your current password"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </label>

                                                <button
                                                    type="button"
                                                    className="btn-showhide"
                                                    style={{ transform: 'translateY(40%)' }}
                                                >
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

                                            <div className="info">
                                                <p className="text">
                                                    Password must include at least 8 characters, 1
                                                    number and a mix of upper & lowercase letters.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="inputbox forgotbox">
                                            <label
                                                htmlFor="confirmnewpassword"
                                                className="inputlabel"
                                            >
                                                Confirm new password
                                                <input
                                                    type="password"
                                                    id="confirmnewpassword"
                                                    placeholder="Enter your current password"
                                                    className="textfield"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </label>

                                            <button
                                                type="button"
                                                className="btn-showhide"
                                                style={{ transform: 'translateY(40%)' }}
                                            >
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
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="submitinfo">
                        <button
                            type="button"
                            className="login-link fw-bold"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button type="button" className="btn-submit">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
