'use client';

import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

import PotentialSection from '@/components/website/PotentialSection';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullname: '',
        emailaddress: '',
        companyname: '',
        phonenumber: '',
        message: '',
        checkprivacy: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const resetForm = () => {
        setFormData({
            fullname: '',
            emailaddress: '',
            companyname: '',
            phonenumber: '',
            message: '',
            checkprivacy: false,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullname) {
            toast.error('Field "Full Name" is empty.');
            return;
        }
        if (!formData.emailaddress) {
            toast.error('Field "Email Address" is empty.');
            return;
        }
        if (!formData.companyname) {
            toast.error('Field "Company Name" is empty.');
            return;
        }
        if (!formData.phonenumber) {
            toast.error('Field "Phone Number" is empty.');
            return;
        }
        if (!formData.message) {
            toast.error('Field "Message" is empty.');
            return;
        }
        try {
            const requestData = {
                full_name: formData.fullname,
                email: formData.emailaddress,
                company_name: formData.companyname,
                phone: formData.phonenumber,
                message: formData.message,
                checkprivacy: formData.checkprivacy || false,
                status: 'Pending',
            };

            const response = await axios.post('/api/contact', requestData);

            if (response.status === 200) {
                toast.success('Contact form submitted successfully');
                resetForm();
            } else {
                console.error('Failed to submit the contact form');
            }
        } catch (error) {
            console.log(error);
            console.error('Error submitting the contact form', error.response.data.error);
            const errorData = error.response.data.error.issues;
            errorData.forEach((err) => {
                const errorMessage = `${err.path.join('.')}: ${err.message}`;
                toast.error(errorMessage);
            });
        }
    };

    return (
        <main className="main">
            {/* <!-- CONTACT-SECTION START --> */}
            <section className="contact">
                <div className="contact-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 mx-md-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <h2 className="display-6 fw-bold">Contact Us</h2>
                                    <div className="info">
                                        <p className="text">
                                            We&apos;re here for anything you need. Just drop us a
                                            quick message below. We&apos;ll get back in 24 hrs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contactdetails" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-10 mx-md-auto">
                                    <form className="contactform" onSubmit={handleSubmit}>
                                        <div className="row gx-4 gy-5">
                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="fullname"
                                                        className="inputlabel"
                                                    >
                                                        Full name
                                                        <input
                                                            type="text"
                                                            id="fullname"
                                                            name="fullname"
                                                            value={formData.fullname}
                                                            onChange={handleChange}
                                                            placeholder="Enter your name"
                                                            className="textfield"
                                                            autoComplete="off"
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="emailaddress"
                                                        className="inputlabel"
                                                    >
                                                        Email
                                                        <input
                                                            type="email"
                                                            id="emailaddress"
                                                            name="emailaddress"
                                                            placeholder="johndoe@example.com"
                                                            className="textfield"
                                                            value={formData.emailaddress}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="companyname"
                                                        className="inputlabel"
                                                    >
                                                        Company Name
                                                        <input
                                                            type="text"
                                                            id="companyname"
                                                            name="companyname"
                                                            placeholder="Enter company name"
                                                            className="textfield"
                                                            autoComplete="off"
                                                            value={formData.companyname}
                                                            onChange={handleChange}
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="phonenumber"
                                                        className="inputlabel"
                                                    >
                                                        Phone
                                                        <input
                                                            type="tel"
                                                            id="phonenumber"
                                                            placeholder="(000) 000-0000"
                                                            className="textfield"
                                                            name="phonenumber"
                                                            value={formData.phonenumber}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="inputbox">
                                                    <label htmlFor="message" className="inputlabel">
                                                        Message
                                                        <textarea
                                                            className="textfield"
                                                            id="message"
                                                            placeholder="Enter your message here..."
                                                            rows="6"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12 mb-3">
                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="checkprivacy"
                                                        className="checkprivacy"
                                                        checked={formData.checkprivacy}
                                                        onChange={handleChange}
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="checkprivacy"
                                                        className="checklabel"
                                                    >
                                                        <input type="hidden" />
                                                        You agree to our friendly &nbsp;
                                                        <Link href="#" className="checklink">
                                                            privacy policy.
                                                        </Link>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <div className="submitbox">
                                                        <button
                                                            className="btn-submit"
                                                            type="submit"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="contactoverlay" />
                    </div>
                </div>
            </section>
            {/* <!-- CONTACT-SECTION END --> */}

            <PotentialSection />
        </main>
    );
}
