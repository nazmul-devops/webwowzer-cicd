'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            if (session?.user?.role === 'client') {
                router.push('/dashboard');
            } else if (session?.user?.role === 'admin') {
                window.location.href = '/admin';
            }
        }
    }, [session, router]);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (response.error) {
                toast.error('Please check your credentials and try again.', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }

            if (response.ok) {
                if (session) {
                    if (session.user.role === 'client') {
                        router.push('/dashboard');
                    } else if (session.user.role === 'admin') {
                        // push to admin dashboard with reload
                        window.location.href = '/admin';
                    }
                }

                toast.success('Successfully logged in.');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <main className="authmain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-lg-auto">
                        <div className="authmain-details" data-aos="fade-up">
                            <div className="authmain-header">
                                <h1 className="display-6 fw-bold text-center">
                                    Log Into <br />
                                    Your Account
                                </h1>
                            </div>

                            <div className="authmain-body">
                                <form className="authform">
                                    <div className="authform-header">
                                        <div className="titlebox">
                                            <h5 className="authtitle text-center">
                                                Accelerate your speed of innovation with
                                                <span className="fw-medium">WebWowZer.</span>
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="authform-body">
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="inputbox">
                                                    <input
                                                        type="email"
                                                        id="loginemail"
                                                        placeholder="Enter email address"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="inputbox forgotbox">
                                                    <input
                                                        type="password"
                                                        id="loginpassword"
                                                        placeholder="Enter your password"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                        onChange={(e) =>
                                                            setPassword(e.target.value)
                                                        }
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

                                            <div className="col-12 mb-3">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="customcheck">
                                                        <input
                                                            type="checkbox"
                                                            name="checkprivacy"
                                                            id="rememberme"
                                                            className="checkprivacy"
                                                            hidden
                                                        />

                                                        <label
                                                            htmlFor="rememberme"
                                                            className="checklabel"
                                                        >
                                                            <input type="hidden" />
                                                            Remember me.
                                                        </label>
                                                    </div>

                                                    <Link
                                                        href="/forgot-password"
                                                        className="authlink"
                                                    >
                                                        Forgot Password?
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    onClick={handleLogin}
                                                    className="btn-submit w-100"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="authform-footer">
                                        <p className="authtext">
                                            Don’t have an account? &nbsp;
                                            <Link
                                                href="/register"
                                                className="customlink
                                                marked fw-medium"
                                            >
                                                Signup &nbsp;
                                            </Link>
                                            here.
                                        </p>
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
