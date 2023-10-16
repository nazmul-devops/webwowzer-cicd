import AnnouncementSection from '@/components/dashboard/AnnouncementSection';

export default function PlansPage() {
    return (
        <>
            <AnnouncementSection />

            {/* <!-- MAIN-SECTION START --> */}
            <main className="loggedmain">
                {/* <!-- PRICING-SECTION START --> */}
                <section className="pricingsection">
                    <div className="pricingsection-content">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-5 mx-lg-auto">
                                    <div className="d-flex flex-column gap-4 text-center">
                                        <h1 className="display-6 fw-bold">Choose your plan</h1>

                                        <div className="info">
                                            <p className="text">
                                                Accelerate your speed of innovation with the right
                                                WebWowZer plan for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container" data-aos="fade-up">
                            <div className="row mb-5">
                                <div className="col-lg-5 mx-lg-auto">
                                    <h2 className="fw-bold text-center">DIY Website Pricing</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11 col-xxl-10 mx-lg-auto">
                                    <div className="d-flex justify-content-center mb-5">
                                        {/* <!-- TOGGLE-SWITCHES --> */}
                                        <div id="diypricing" />
                                    </div>

                                    <div className="packinfo">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-md-4">
                                                <div className="cardprice">
                                                    <div className="cardprice-header">
                                                        <div className="details">
                                                            <div className="packname">
                                                                <span className="name">Basic</span>
                                                            </div>

                                                            <div className="info">
                                                                <p className="text">
                                                                    Our software allows you to
                                                                    create graphics instantly.
                                                                    It&apos;s free and easy to use.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="packageprice">
                                                            <span className="price">$10</span>
                                                            <span className="text">
                                                                /Per month. Billed annually
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="cardprice-body">
                                                        <a
                                                            href="authentications/register.html"
                                                            className="btn-build"
                                                        >
                                                            Start Building
                                                        </a>

                                                        <ul className="packagelist">
                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Stats/Analytics
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Full Editing Capabilities
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site SEO
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Publish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Republish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    FAQ Help Database
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Video Tutorials
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="cardprice recommended">
                                                    <span className="cardbadge">
                                                        The most popular
                                                    </span>

                                                    <div className="cardprice-header">
                                                        <div className="details">
                                                            <div className="packname">
                                                                <span className="name">
                                                                    Standard
                                                                </span>
                                                            </div>

                                                            <div className="info">
                                                                <p className="text">
                                                                    Our tools are easy to use and
                                                                    will help you create a
                                                                    professional, beautiful design
                                                                    quickly.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="packageprice">
                                                            <span className="price">$19</span>
                                                            <span className="text">
                                                                /Per month. Billed annually
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="cardprice-body">
                                                        <a
                                                            href="authentications/register.html"
                                                            className="btn-build"
                                                        >
                                                            Start Building
                                                        </a>

                                                        <ul className="packagelist">
                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Stats/Analytics
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site Comments
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Full Editing Capabilities
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Developer Mode
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Manage Free Apps (App Store)
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Set Domain
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Publish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Republish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site Backups
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    FAQ Help Database
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Video Tutorials
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Chat Assistance
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Email Support
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="cardprice">
                                                    <div className="cardprice-header">
                                                        <div className="details">
                                                            <div className="packname">
                                                                <span className="name">
                                                                    Premium
                                                                </span>
                                                            </div>

                                                            <div className="info">
                                                                <p className="text">
                                                                    You can create beautiful designs
                                                                    by using our powerful and simple
                                                                    design tools.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="packageprice">
                                                            <span className="price">$25</span>
                                                            <span className="text">
                                                                /Per month. Billed annually
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="cardprice-body">
                                                        <a
                                                            href="authentications/register.html"
                                                            className="btn-build"
                                                        >
                                                            Start Building
                                                        </a>

                                                        <ul className="packagelist">
                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Stats/Analytics
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site Comments
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Full Editing Capabilities
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Advanced Content Library
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Developer Mode
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Website Personalization
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    eCommerce
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">Blogs</span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site SEO
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Use All Apps (App Store)
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Manage Free Apps (App Store)
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Set Domain
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Publish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Republish Site
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Site Backups
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    FAQ Help Database
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Video Tutorials
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Chat Assistance
                                                                </span>
                                                            </li>

                                                            <li className="packagelist-item">
                                                                <span className="icon">
                                                                    <svg
                                                                        width="22"
                                                                        height="22"
                                                                        viewBox="0 0 22 22"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                            stroke="#37D067"
                                                                            strokeWidth="1.8"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>

                                                                <span className="text">
                                                                    Email Support
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <figure className="packicon">
                                            <svg
                                                width="106"
                                                height="69"
                                                viewBox="0 0 106 69"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M103.695 3.6341C100.517 2.03002 92.6358 0.746744 88.4408 4.59654C83.1971 9.40882 88.4408 34.1238 96.2759 28.7667C104.111 23.4095 75.6308 6.62661 66.276 6.04023C56.9211 5.45383 47.4445 9.40882 46.491 25.2892C45.7283 37.9935 45.6966 49.5108 46.0143 54.1627C40.2939 38.6031 26.9459 10.8525 17.8891 6.04023"
                                                    stroke="#0B2330"
                                                    strokeWidth="2.95"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M38.5352 17.6968C37.6033 14.4148 34.6212 7.4759 30.1481 5.97559"
                                                    stroke="#0B2330"
                                                    strokeWidth="2.95"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M30.793 46.3483C28.8578 42.7668 24.3413 39.1853 19.8255 39.8365"
                                                    stroke="#0B2330"
                                                    strokeWidth="2.95"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M33.373 60.1787C24.3037 58.323 8.14097 56.3448 2.30483 62.4595"
                                                    stroke="#0B2330"
                                                    strokeWidth="2.95"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-overlay" />
                    </div>
                </section>
                {/* <!-- PRICING-SECTION END --> */}

                {/* <!-- ECOMMERCE-PRICING START --> */}
                <section className="ecommercepricing">
                    <div className="ecommercepricing-content">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 mx-lg-auto">
                                    <h2 className="fw-bold text-center">
                                        Ecommerce Add-Ons (Per Site)
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-11 col-xxl-10 mx-lg-auto">
                                    <div className="d-flex justify-content-center mb-5">
                                        {/* <!-- TOGGLE-SWITCHES --> */}
                                        <div id="ecommercepricing" />
                                    </div>

                                    <div className="row g-4 gy-5">
                                        <div className="col-md-4">
                                            <div className="cardpricing">
                                                <div className="cardpricing-header">
                                                    <div className="details">
                                                        <div className="packagename">
                                                            <span className="name">Basic</span>
                                                            <span className="text">e-store</span>
                                                        </div>

                                                        <div className="info">
                                                            <p className="text">
                                                                The essentials you need to start
                                                                selling online
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="packageprice">
                                                        <span className="price">$14</span>
                                                        <span className="text">
                                                            /Per month. Billed annually
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="cardpricing-body">
                                                    <ul className="packagelist">
                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                100 products
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                No transaction fee
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                40+ payment methods
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Realtime shipping quotes from
                                                                leading carriers
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell on social channels: Google,
                                                                Facebook, Instagram
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Store management app: Android & iOS
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="cardpricing recommended">
                                                <span className="cardbadge">Recommended</span>

                                                <div className="cardpricing-header">
                                                    <div className="details">
                                                        <div className="packagename">
                                                            <span className="name">Standard</span>
                                                            <span className="text">e-store</span>
                                                        </div>

                                                        <div className="info">
                                                            <p className="text">
                                                                Advanced features to grow your store
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="packageprice">
                                                        <span className="price">$39</span>
                                                        <span className="text">
                                                            /Per month. Billed annually
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="cardpricing-body">
                                                    <ul className="packagelist">
                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                2,500 products
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                No transaction fee
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                40+ payment methods
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Realtime shipping quotes from
                                                                leading carriers
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell on social channels: Google,
                                                                Facebook, Instagram
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell as subscription
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Store management app: Android & iOS
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell on Marketplaces: Amazon, eBay
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="cardpricing">
                                                <div className="cardpricing-header">
                                                    <div className="details">
                                                        <div className="packagename">
                                                            <span className="name">Unlimited</span>
                                                            <span className="text">e-store</span>
                                                        </div>

                                                        <div className="info">
                                                            <p className="text">
                                                                Professional tools to scale your
                                                                business
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="packageprice">
                                                        <span className="price">$89</span>
                                                        <span className="text">
                                                            /Per month. Billed annually
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="cardpricing-body">
                                                    <ul className="packagelist">
                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Unlimited products
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                No transaction fee
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                40+ payment methods
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Realtime shipping quotes from
                                                                leading carriers
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell on social channels: Google,
                                                                Facebook, Instagram
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell as subscription
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Store management app: Android & iOS
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Sell on Marketplaces: Amazon, eBay
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Volume discounts
                                                            </span>
                                                        </li>

                                                        <li className="packagelist-item">
                                                            <span className="icon">
                                                                <svg
                                                                    width="22"
                                                                    height="22"
                                                                    viewBox="0 0 22 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.5625 6.1875L8.9375 15.8125L4.125 11"
                                                                        stroke="#37D067"
                                                                        strokeWidth="1.8"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            <span className="text">
                                                                Square POS integration
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ECOMMERCE-PRICING END --> */}
            </main>
        </>
    );
}
