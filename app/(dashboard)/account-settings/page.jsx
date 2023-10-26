'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import AnnouncementSection from '@/components/dashboard/AnnouncementSection';
import ChangePasswordModal from '@/components/dashboard/ChangePasswordModal';
import axios from '@/lib/axios';

export default function AccountSettingsPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const session = useSession();

    const fetchUserInfo = useCallback(async () => {
        try {
            const userId = session?.data?.user?.id;
            const response = await axios.get(`/api/users/${userId}`);

            if (response?.status === 200) {
                setFirstName(response?.data.user.first_name);
                setLastName(response?.data.user.last_name);
                setEmail(response?.data.user.email);
                setCompanyName(response?.data.user.company_name);
                setPhoneNumber(response?.data.user.phone_number);
            }
        } catch (error) {
            toast.error('something went wrong');
        }
    }, [session]);

    useEffect(() => {
        if (session.status === 'authenticated') {
            fetchUserInfo();
        }
    }, [session, fetchUserInfo]);

    if (session.status === 'loading') {
        return <p>Loading...</p>;
    }

    if (session.status === 'unauthenticated') {
        return <p>Access Denied</p>;
    }

    const handleUpdateUserInfo = async (e) => {
        e.preventDefault();

        try {
            const userId = session?.data?.user?.id;

            // Prepare the data to send to the server
            const userData = {
                first_name: firstName,
                last_name: lastName,
                company_name: companyName,
                phone_number: phoneNumber,
            };

            const response = await axios.put(`/api/users/${userId}`, userData);

            if (response.status === 200) {
                toast.success('Your Account Information Updated Successfully.');
            }
        } catch (error) {
            toast.error('something went wrong');
        }
    };

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
                                                                First name <span>*</span>
                                                                <input
                                                                    value={firstName}
                                                                    onChange={(e) =>
                                                                        setFirstName(e.target.value)
                                                                    }
                                                                    type="text"
                                                                    id="firstName"
                                                                    placeholder="Enter first name"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox">
                                                            <label
                                                                htmlFor="fullname"
                                                                className="inputlabel"
                                                            >
                                                                Last name <span>*</span>
                                                                <input
                                                                    value={lastName}
                                                                    onChange={(e) =>
                                                                        setLastName(e.target.value)
                                                                    }
                                                                    type="text"
                                                                    id="lastName"
                                                                    placeholder="Enter last name"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox forgotbox">
                                                            <label
                                                                htmlFor="email"
                                                                className="inputlabel"
                                                            >
                                                                Email <span>*</span>
                                                                <input
                                                                    value={email}
                                                                    onChange={(e) =>
                                                                        setEmail(e.target.value)
                                                                    }
                                                                    type="email"
                                                                    id="email"
                                                                    placeholder="Enter email address"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                    disabled
                                                                />
                                                            </label>

                                                            <button
                                                                type="button"
                                                                className="mb-4 btn-showhide"
                                                                style={{
                                                                    transform: 'translateY(50%)',
                                                                    top: '35%',
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
                                                                <input
                                                                    value={companyName}
                                                                    onChange={(e) =>
                                                                        setCompanyName(
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    id="companyname"
                                                                    placeholder="Enter company name"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="inputbox">
                                                            <label
                                                                htmlFor="phonenumber"
                                                                className="inputlabel"
                                                            >
                                                                Phone <span>*</span>
                                                                <input
                                                                    value={phoneNumber}
                                                                    onChange={(e) =>
                                                                        setPhoneNumber(
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                    type="tel"
                                                                    id="phonenumber"
                                                                    placeholder="Enter phone number"
                                                                    className="textfield"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="d-flex flex-column gap-2">
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
                                                                onClick={(e) =>
                                                                    handleUpdateUserInfo(e)
                                                                }
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
