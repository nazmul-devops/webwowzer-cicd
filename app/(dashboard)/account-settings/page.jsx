import AnnouncementSection from '@/components/dashboard/AnnouncementSection';
import ChangePasswordModal from '@/components/dashboard/ChangePasswordModal';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function AccountSettingsPage() {
    return (
        <>
            <AnnouncementSection />

            {/* <!-- MAIN-SECTION START --> */}
            <main className="loggedmain" data-aos="fade-up">
                <section className="accountsettings">
                    <div className="container">
                        <div className="accountsettings-content">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="accountsettings-header">
                                        <h2 className="title">Account Settings</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="accountsettings-body">
                                        <form className="authform">
                                            <div className="authform-body">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="inputbox">
                                                            <label
                                                                htmlFor="fullname"
                                                                className="inputlabel"
                                                            >
                                                                Full name <span>*</span>
                                                            </label>

                                                            <input
                                                                type="text"
                                                                id="fullname"
                                                                placeholder="Enter full name"
                                                                className="textfield"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox forgotbox">
                                                            <label
                                                                htmlFor="email"
                                                                className="inputlabel"
                                                            >
                                                                Full name <span>*</span>
                                                            </label>

                                                            <input
                                                                type="email"
                                                                id="email"
                                                                placeholder="Enter email address"
                                                                className="textfield"
                                                                autoComplete="off"
                                                                required
                                                                disabled
                                                            />

                                                            <button
                                                                type="button"
                                                                className="btn-showhide"
                                                                style={{
                                                                    transform: 'translateY(50%)',
                                                                }}
                                                            >
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z"
                                                                        stroke="#141B30"
                                                                        strokeOpacity="0.698039"
                                                                        strokeWidth="1.5"
                                                                    />
                                                                    <path
                                                                        d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5"
                                                                        stroke="#141B30"
                                                                        strokeOpacity="0.698039"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                    />
                                                                    <path
                                                                        d="M12 15H12.009"
                                                                        stroke="#141B30"
                                                                        strokeOpacity="0.698039"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox">
                                                            <label
                                                                htmlFor="companyname"
                                                                className="inputlabel"
                                                            >
                                                                Company Name
                                                            </label>

                                                            <input
                                                                type="text"
                                                                id="companyname"
                                                                placeholder="Enter company name"
                                                                className="textfield"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox">
                                                            <label
                                                                htmlFor="phonenumber"
                                                                className="inputlabel"
                                                            >
                                                                Phone <span>*</span>
                                                            </label>

                                                            <input
                                                                type="tel"
                                                                id="phonenumber"
                                                                placeholder="Enter phone number"
                                                                className="textfield"
                                                                autoComplete="off"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="d-flex flex-column gap-2">
                                                            <div className="inputbox">
                                                                <label
                                                                    htmlFor="password"
                                                                    className="inputlabel"
                                                                >
                                                                    Password
                                                                </label>

                                                                <input
                                                                    type="password"
                                                                    id="password"
                                                                    placeholder="*****************"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                            </div>

                                                            <button
                                                                type="button"
                                                                className="btn-change"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#changePasswordModal"
                                                            >
                                                                Change password
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 mt-5">
                                                        <div className="d-flex justify-content-center">
                                                            <button
                                                                className="btn-submit"
                                                                type="submit"
                                                            >
                                                                Save
                                                            </button>
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
                </section>
            </main>

            {/* change Password Modal */}
            <ChangePasswordModal />
        </>
    );
}
