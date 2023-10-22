'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

import axios from '@/lib/axios';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    const countryOptions = [
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'China', label: 'China' },
        { value: 'India', label: 'India' },
    ];

    const cityOptons = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Mymensingh', label: 'Mymensingh' },
        { value: 'Sherpur', label: 'Sherpur' },
    ];

    const regionOptions = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Mymensingh', label: 'Mymensingh' },
        { value: 'Chittagong', label: 'Chittagong' },
    ];

    function handleCountrySelect(e) {
        setCountry(e.target.value);
    }

    function handleCitySelect(e) {
        setCity(e.target.value);
    }

    function handleRegionSelect(e) {
        setRegion(e.target.value);
    }

    function handleRegister() {
        if (password !== confirmPassword) {
            toast('Password and Confirm Password does not match', {
                icon: '🔴',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            return;
        }

        const response = axios
            .post('/api/users', {
                firstName,
                lastName,
                country,
                city,
                region,
                postalCode,
                email,
                phoneNumber,
                password,
            })
            .then((res) => {
                if (res.status === 201) {
                    toast(res.data.message, {
                        icon: '✅',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });

                    setFirstName('');
                    setLastName('');
                    setCountry('');
                    setCity('');
                    setRegion('');
                    setPostalCode('');
                    setEmail('');
                    setPhoneNumber('');
                    setPassword('');
                    setConfirmPassword('');

                    router.push('/login');
                }
            })
            .catch((err) => {
                toast(err.response.data.message, {
                    icon: '🔴',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            });

        console.log(response);
    }

    return (
        <>
            <main className="main">
                {/* <!-- REGISTER-SECTION START --> */}
                <section className="register">
                    <div className="register-content">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 mx-lg-auto">
                                    <div className="d-flex flex-column gap-4 text-center">
                                        <h1 className="display-6 fw-bold">Start Building</h1>

                                        <div className="info">
                                            <p className="text">
                                                Congratulations! You&apos;re on your way to building
                                                your new website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container" data-aos="fade-up">
                            <div className="row g-0">
                                <div className="col-xxl-10 mx-xxl-auto">
                                    <div className="row g-4">
                                        <div className="col-lg-7 col-xxl-8">
                                            <div className="reg">
                                                <div className="reg-header">
                                                    <h2 className="title">Select Plan</h2>

                                                    {/* <!-- TOGGLE-SWITCHES --> */}
                                                    <div id="content" />
                                                </div>

                                                <div className="reg-body">
                                                    <div className="regdetail">
                                                        <div className="regdetail-body">
                                                            <div className="row g-4">
                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <select
                                                                            className="selectfield"
                                                                            autoComplete="off"
                                                                        >
                                                                            <option selected>
                                                                                Select web builder
                                                                                plan
                                                                            </option>
                                                                            <option value="Monthly">
                                                                                Monthly
                                                                            </option>
                                                                            <option value="Yearly">
                                                                                Yearly
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <select
                                                                            className="selectfield"
                                                                            autoComplete="off"
                                                                        >
                                                                            <option selected>
                                                                                Select E-commerce
                                                                                add-on
                                                                            </option>
                                                                            <option value="Monthly">
                                                                                Monthly
                                                                            </option>
                                                                            <option value="Yearly">
                                                                                Yearly
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 mb-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn-coupon"
                                                                    >
                                                                        Add Coupon Code
                                                                    </button>

                                                                    {/* <!-- ADD-COUPON --> */}
                                                                    <div
                                                                        id="collapseCoupon"
                                                                        className="d-none"
                                                                    >
                                                                        <div className="mycoupon">
                                                                            <div className="couponbox">
                                                                                <input
                                                                                    type="text"
                                                                                    className="textfield"
                                                                                    placeholder="Enter coupon code"
                                                                                    autoComplete="off"
                                                                                />

                                                                                <button
                                                                                    type="submit"
                                                                                    className="btn-apply"
                                                                                >
                                                                                    Apply
                                                                                </button>
                                                                            </div>

                                                                            <p className="coupontext">
                                                                                <span className="icon">
                                                                                    <svg
                                                                                        width="16"
                                                                                        height="16"
                                                                                        viewBox="0 0 16 16"
                                                                                        fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            d="M2.75 8.75L6.25 12.25L13.25 4.75"
                                                                                            stroke="#00AD36"
                                                                                            strokeWidth="1.5"
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                        />
                                                                                    </svg>
                                                                                </span>

                                                                                <span className="text">
                                                                                    Your offer code
                                                                                    has been applied
                                                                                    to this order.
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="regdetail">
                                                        <div className="regdetail-header">
                                                            <h2 className="title">
                                                                Contact Information
                                                            </h2>
                                                            <p className="logtext">
                                                                Have an account?
                                                                <Link
                                                                    href="/login"
                                                                    className="loglink"
                                                                >
                                                                    LOG IN
                                                                </Link>
                                                            </p>
                                                        </div>

                                                        <div className="regdetail-body">
                                                            <div className="row g-4">
                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="text"
                                                                            className="textfield"
                                                                            placeholder="First Name"
                                                                            autoComplete="off"
                                                                            onChange={(e) =>
                                                                                setFirstName(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="text"
                                                                            className="textfield"
                                                                            placeholder="Last Name"
                                                                            autoComplete="off"
                                                                            onChange={(e) =>
                                                                                setLastName(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <select
                                                                            className="selectfield"
                                                                            autoComplete="off"
                                                                            onChange={
                                                                                handleCountrySelect
                                                                            }
                                                                        >
                                                                            {countryOptions.map(
                                                                                (countryOption) => (
                                                                                    <option
                                                                                        value={
                                                                                            countryOption.value
                                                                                        }
                                                                                        key={
                                                                                            countryOption.value
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            countryOption.label
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                            <option selected>
                                                                                Country
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <select
                                                                            className="selectfield"
                                                                            autoComplete="off"
                                                                            onChange={
                                                                                handleCitySelect
                                                                            }
                                                                        >
                                                                            <option selected>
                                                                                City
                                                                            </option>
                                                                            {cityOptons.map(
                                                                                (cityOption) => (
                                                                                    <option
                                                                                        value={
                                                                                            cityOption.value
                                                                                        }
                                                                                        key={
                                                                                            cityOption.value
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            cityOption.label
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <select
                                                                            className="selectfield"
                                                                            autoComplete="off"
                                                                            onChange={
                                                                                handleRegionSelect
                                                                            }
                                                                        >
                                                                            <option selected>
                                                                                State/Region
                                                                            </option>
                                                                            {regionOptions.map(
                                                                                (regionOption) => (
                                                                                    <option
                                                                                        value={
                                                                                            regionOption.value
                                                                                        }
                                                                                        key={
                                                                                            regionOption.value
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            regionOption.label
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="text"
                                                                            className="textfield"
                                                                            placeholder="Zip/Postal Code"
                                                                            autoComplete="off"
                                                                            onChange={(e) =>
                                                                                setPostalCode(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="email"
                                                                            className="textfield"
                                                                            placeholder="Email address"
                                                                            autoComplete="off"
                                                                            onChange={(e) =>
                                                                                setEmail(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="tel"
                                                                            className="textfield"
                                                                            placeholder="Phone Number"
                                                                            autoComplete="off"
                                                                            onChange={(e) =>
                                                                                setPhoneNumber(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="regdetail">
                                                        <div className="regdetail-header">
                                                            <h2 className="title">
                                                                Account Information
                                                            </h2>
                                                        </div>

                                                        <div className="regdetail-body">
                                                            <div className="row g-4">
                                                                <div className="col-12">
                                                                    <p className="regdetailtext">
                                                                        This password will access
                                                                        your account during log in.
                                                                    </p>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox forgotbox">
                                                                        <input
                                                                            type="password"
                                                                            id="newpassword"
                                                                            placeholder="Password"
                                                                            className="textfield"
                                                                            autoComplete="off"
                                                                            required
                                                                            onChange={(e) =>
                                                                                setPassword(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />

                                                                        <button
                                                                            type="button"
                                                                            className="btn-showhide"
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

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox forgotbox">
                                                                        <input
                                                                            type="password"
                                                                            id="confirmnewpassword"
                                                                            placeholder="Confirm Password"
                                                                            className="textfield"
                                                                            autoComplete="off"
                                                                            required
                                                                            onChange={(e) =>
                                                                                setConfirmPassword(
                                                                                    e.target.value
                                                                                )
                                                                            }
                                                                        />

                                                                        <button
                                                                            type="button"
                                                                            className="btn-showhide"
                                                                        >
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
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="btn-submit w-100"
                                                        type="button"
                                                        onClick={handleRegister}
                                                    >
                                                        Register
                                                    </button>

                                                    <div className="regdetail">
                                                        <div className="regdetail-header">
                                                            <h2 className="title">
                                                                Billing Information
                                                            </h2>
                                                        </div>

                                                        <div className="regdetail-body">
                                                            <div className="row g-4">
                                                                <div className="col-12">
                                                                    <p className="regdetailtext">
                                                                        Please enter your credit
                                                                        card information for
                                                                        payment.
                                                                    </p>
                                                                </div>

                                                                <div className="col-12">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="text"
                                                                            id="cardname"
                                                                            placeholder="Name on Card"
                                                                            className="textfield"
                                                                            autoComplete="off"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="inputbox">
                                                                        <input
                                                                            type="number"
                                                                            id="cardnumber"
                                                                            placeholder="Credit Card Number"
                                                                            className="textfield"
                                                                            autoComplete="off"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="row g-4">
                                                                        <div className="col-md-6">
                                                                            <div className="inputbox">
                                                                                <input
                                                                                    type="text"
                                                                                    id="expiredate"
                                                                                    placeholder="EXP"
                                                                                    className="textfield"
                                                                                    autoComplete="off"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="inputbox">
                                                                                <input
                                                                                    type="number"
                                                                                    id="cvvnumber"
                                                                                    placeholder="CVV"
                                                                                    className="textfield"
                                                                                    autoComplete="off"
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-xxl-4">
                                            <div className="ordersummary">
                                                <div className="ordersummary-header">
                                                    <h5 className="title">Order Summary</h5>
                                                </div>

                                                <div className="ordersummary-body">
                                                    <div className="orderinfo">
                                                        <ul className="orderlist">
                                                            <li className="orderlist-item">
                                                                <span className="title">
                                                                    Selected Plan (Basic)
                                                                </span>
                                                                <span className="text">
                                                                    <span className="me-2">
                                                                        (+)
                                                                    </span>
                                                                    <span className="fw-medium">
                                                                        $120
                                                                    </span>
                                                                </span>
                                                            </li>

                                                            <li className="orderlist-item">
                                                                <span className="title">
                                                                    E-commerce Add-on (Standard)
                                                                </span>
                                                                <span className="text">
                                                                    <span className="me-2">
                                                                        (+)
                                                                    </span>
                                                                    <span className="fw-medium">
                                                                        $168
                                                                    </span>
                                                                </span>
                                                            </li>

                                                            <li className="orderlist-item">
                                                                <span className="title headingmarked">
                                                                    First Month Discount
                                                                </span>
                                                                <span className="text headingmarked">
                                                                    <span className="me-2">
                                                                        (-)
                                                                    </span>
                                                                    <span className="fw-medium">
                                                                        $4.05
                                                                    </span>
                                                                </span>
                                                            </li>

                                                            <li className="orderlist-item">
                                                                <span className="title headingmarked">
                                                                    Coupon Discount
                                                                </span>
                                                                <span className="text headingmarked">
                                                                    <span className="me-2">
                                                                        (-)
                                                                    </span>
                                                                    <span className="fw-medium">
                                                                        $.0
                                                                    </span>
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <div className="divider" />

                                                        <div className="total">
                                                            <span className="title">Total</span>
                                                            <span className="totalprice">
                                                                $283.95
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="details">
                                                        <div className="info">
                                                            <p className="text">
                                                                Note: By submitting your payment,
                                                                you understand that your credit card
                                                                will be charged the amount in the
                                                                “Total” box. You also understand
                                                                that your credit card will be
                                                                automatically charged on the
                                                                anniversary date of your
                                                                subscription.
                                                            </p>
                                                        </div>

                                                        <button
                                                            className="btn-submit w-100"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#summaryModal"
                                                        >
                                                            <span className="d-none d-md-flex">
                                                                Continue to
                                                            </span>
                                                            Checkout
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- REGISTER-SECTION END --> */}
            </main>

            {/* <!-- SUMMARY-MODAL --> */}
            <div
                className="modal fade"
                id="summaryModal"
                tabIndex="-1"
                aria-labelledby="summaryModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="mysummary">
                                <div className="mysummary-header">
                                    <figure className="icon">
                                        <svg
                                            width="66"
                                            height="66"
                                            viewBox="0 0 66 66"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M60.5 33C60.5 17.8122 48.1878 5.5 33 5.5C17.8122 5.5 5.5 17.8122 5.5 33C5.5 48.1878 17.8122 60.5 33 60.5C48.1878 60.5 60.5 48.1878 60.5 33Z"
                                                stroke="#00DF46"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M22 34.375L28.875 41.25L44 24.75"
                                                stroke="#00DF46"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </figure>

                                    <h5 className="title">$283.95</h5>
                                </div>

                                <div className="mysummary-body">
                                    <p className="text">
                                        Your payment was successful and your order is complete. We
                                        have sent an email as proof of delivery. The email will
                                        provide purchase details and all the featured you have
                                        unlocked with the purchase.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
