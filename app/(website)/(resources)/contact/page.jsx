import PotentialSection from '@/components/PotentialSection';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function ContactPage() {
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
                                    <form className="contactform">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="fullname"
                                                        className="inputlabel"
                                                    >
                                                        Full name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fullname"
                                                        placeholder="Enter your name"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="emailaddress"
                                                        className="inputlabel"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="emailaddress"
                                                        placeholder="johndoe@example.com"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
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

                                            <div className="col-md-6">
                                                <div className="inputbox">
                                                    <label
                                                        htmlFor="phonenumber"
                                                        className="inputlabel"
                                                    >
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phonenumber"
                                                        placeholder="(000) 000-0000"
                                                        className="textfield"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="inputbox">
                                                    <label htmlFor="message" className="inputlabel">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        className="textfield"
                                                        id="message"
                                                        placeholder="Enter your message here..."
                                                        rows="6"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 mb-3">
                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="checkprivacy"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="checkprivacy"
                                                        className="checklabel"
                                                    >
                                                        You agree to our friendly
                                                        <a href="#" className="checklink">
                                                            privacy policy.
                                                        </a>
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
