import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="main">
            {/* <!-- ABOUT-SECTION START --> */}
            <section className="aboutus" data-aos="fade-up">
                <div className="aboutus-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <h1 className="display-5 fw-bold">About Us</h1>
                                    <div className="info">
                                        <p className="text">
                                            We know the best product experiences are built when you
                                            learn from the right users, at the right time, and in
                                            the right place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-lg-auto">
                                <div className="about-hero">
                                    <div className="row g-4 w-100">
                                        <div className="col-md-5">
                                            <figure className="about-thumb">
                                                <img
                                                    src="assets/images/about/about-banner/about-1.png"
                                                    alt="about-thumb"
                                                />
                                            </figure>
                                        </div>

                                        <div className="col-md-7">
                                            <figure className="about-thumb">
                                                <img
                                                    src="assets/images/about/about-banner/about-2.png"
                                                    alt="about-thumb"
                                                />
                                            </figure>
                                        </div>

                                        <div className="col-md-7">
                                            <figure className="about-thumb">
                                                <img
                                                    src="assets/images/about/about-banner/about-3.png"
                                                    alt="about-thumb"
                                                />
                                            </figure>
                                        </div>

                                        <div className="col-md-5">
                                            <figure className="about-thumb">
                                                <img
                                                    src="assets/images/about/about-banner/about-4.png"
                                                    alt="about-thumb"
                                                />
                                            </figure>
                                        </div>
                                    </div>

                                    <figure className="heroicon">
                                        <svg
                                            width="236"
                                            height="236"
                                            viewBox="0 0 236 236"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#heroicon)">
                                                <path
                                                    d="M71.299 126.807C72.9675 127.569 74.632 128.338 76.2789 129.152C77.1565 129.573 78.0335 130.007 78.9362 130.368C83.756 132.289 88.6019 134.153 93.3758 136.192C96.3089 137.46 99.2289 138.759 102.136 140.089L106.49 142.096L110.821 144.152C111.687 144.591 112.516 145.098 113.301 145.669C113.633 145.889 113.908 146.184 114.103 146.531C114.298 146.878 114.408 147.266 114.423 147.663C114.491 148.764 113.564 149.467 112.291 149.143C111.469 148.912 110.678 148.579 109.938 148.152C108.235 147.211 106.497 146.347 104.727 145.559C102.959 144.765 101.159 144.043 99.327 143.394C98.316 143.034 97.2385 142.718 96.3481 142.164C93.5015 140.398 90.3387 139.278 87.3729 137.758C85.1676 136.63 82.8745 135.667 80.6336 134.605L74.6361 131.768C72.6319 130.834 70.649 129.848 68.6463 128.907C67.8767 128.519 67.1334 128.08 66.4213 127.594C65.7594 127.117 65.1244 126.604 64.5193 126.058C63.9829 125.575 64.2054 125.155 65.0254 125.242C66.2015 125.37 67.3673 125.58 68.5141 125.87C68.9852 125.988 69.4517 126.135 69.9117 126.301C70.3641 126.485 70.8181 126.67 71.2694 126.854L71.299 126.807Z"
                                                    fill="#0B2330"
                                                />
                                                <path
                                                    d="M104.949 85.7151L106.407 87.5538L107.822 89.4302C108.324 90.0925 108.828 90.7584 109.384 91.3749C110.124 92.1993 110.874 93.0146 111.627 93.8267L113.872 96.275L118.369 101.16L123.891 107.188L129.447 113.187C129.993 113.81 130.494 114.472 130.945 115.167C131.142 115.444 131.271 115.763 131.322 116.099C131.374 116.435 131.346 116.778 131.241 117.102C130.971 118 130.027 118.278 129.095 117.632C128.499 117.199 127.961 116.691 127.495 116.121C125.325 113.574 122.997 111.167 120.524 108.914C119.8 108.33 119.145 107.667 118.572 106.935C116.923 104.564 114.822 102.578 113.044 100.321C111.724 98.6438 110.283 97.058 108.954 95.3847C106.594 92.3915 104.266 89.3775 102.049 86.2791C101.194 85.1118 100.539 83.8113 100.109 82.4301C99.9211 81.8327 100.321 81.5641 100.896 81.9709C101.714 82.5599 102.492 83.2017 103.226 83.8924C103.822 84.4746 104.383 85.0917 104.906 85.7403L104.949 85.7151Z"
                                                    fill="#0B2330"
                                                />
                                                <path
                                                    d="M152.846 71.4259C152.964 72.7764 153.076 74.1281 153.182 75.4811C153.208 76.2017 153.276 76.9201 153.387 77.6326C153.723 79.5231 154.1 81.4068 154.478 83.2891C154.854 85.1719 155.217 87.0553 155.549 88.9431C155.963 91.2671 156.353 93.5944 156.748 95.921L157.895 102.907C157.984 103.626 157.985 104.354 157.898 105.074C157.84 105.768 157.31 106.307 156.565 106.717C155.478 107.314 154.173 107.146 153.712 106.249C153.436 105.669 153.283 105.037 153.264 104.394C153.075 101.493 152.545 98.6243 151.685 95.8474C151.45 95.0762 151.14 94.2828 151.187 93.4887C151.326 90.9557 150.647 88.5329 150.512 86.0403C150.405 84.19 150.125 82.3548 149.983 80.5068C149.857 78.8592 149.743 77.2111 149.642 75.5624L149.439 70.6074C149.38 69.3151 149.629 68.0272 150.168 66.8509C150.215 66.7288 150.298 66.6236 150.405 66.5488C150.512 66.474 150.64 66.433 150.77 66.4311C150.901 66.4291 151.03 66.4663 151.139 66.5379C151.249 66.6094 151.335 66.7121 151.386 66.8327C151.771 67.6336 152.108 68.4566 152.396 69.2975C152.578 69.9968 152.707 70.7085 152.784 71.4269L152.846 71.4259Z"
                                                    fill="#0B2330"
                                                />
                                                <path
                                                    d="M187.503 92.5051C187.377 92.8467 187.264 93.1925 187.118 93.527L186.674 94.5294C186.508 94.8796 186.372 95.2431 186.267 95.6161C186.023 96.621 185.816 97.6384 185.555 98.6371C185.305 99.6396 185.049 100.64 184.757 101.629C184.399 102.847 184.021 104.058 183.602 105.256L182.347 108.848C182.189 109.215 181.964 109.549 181.683 109.833C181.425 110.127 180.865 110.183 180.185 110.104C179.193 109.988 178.276 109.448 178.21 108.882C178.181 108.535 178.264 108.187 178.447 107.89C179.195 106.521 179.665 105.018 179.83 103.467C179.879 103.034 179.867 102.562 180.138 102.216C180.987 101.109 181.173 99.765 181.777 98.571C182.232 97.686 182.494 96.7289 182.923 95.8324C183.68 94.231 184.397 92.6166 185.209 91.0349C185.535 90.3753 186.059 89.8335 186.706 89.4844C186.787 89.4431 186.875 89.4197 186.965 89.4161C187.055 89.4124 187.145 89.4285 187.229 89.4632C187.312 89.498 187.387 89.5505 187.448 89.6172C187.508 89.6838 187.554 89.763 187.581 89.8491C187.623 90.0983 187.655 90.3502 187.678 90.6014C187.706 90.8474 187.713 91.0954 187.699 91.3426C187.653 91.7303 187.572 92.113 187.457 92.4858L187.503 92.5051Z"
                                                    fill="#0B2330"
                                                />
                                                <path
                                                    d="M87.4766 179.97C88.3187 179.748 89.1615 179.535 90.0052 179.33C90.4546 179.234 90.8978 179.11 91.3323 178.959C92.4701 178.51 93.6149 178.072 94.7694 177.655C95.9254 177.244 97.0962 176.877 98.2818 176.554C99.7441 176.173 101.219 175.835 102.706 175.56C104.193 175.285 105.687 175.051 107.187 174.857C107.655 174.818 108.125 174.859 108.579 174.977C109.024 175.068 109.355 175.524 109.595 176.144C109.943 177.047 109.804 178.074 109.251 178.379C108.898 178.554 108.506 178.635 108.112 178.614C106.334 178.59 104.568 178.92 102.919 179.584C102.458 179.763 101.996 180.014 101.509 179.986C99.9451 179.891 98.524 180.508 97.023 180.739C96.4649 180.829 95.9121 180.949 95.3669 181.098C94.8186 181.236 94.2747 181.39 93.7241 181.522C91.7615 181.993 89.794 182.483 87.8479 183.065C87.0217 183.284 86.147 183.232 85.3527 182.916C84.9612 182.795 84.8126 182.395 85.0199 181.929L85.2709 181.495C85.3065 181.425 85.3555 181.363 85.4149 181.313L85.5735 181.162C85.7843 180.964 86.0069 180.779 86.24 180.609C86.4285 180.473 86.6309 180.358 86.8438 180.266C87.0593 180.183 87.2791 180.11 87.4927 180.024L87.4766 179.97Z"
                                                    fill="#0B2330"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="heroicon">
                                                    <rect
                                                        width="166.606"
                                                        height="166.606"
                                                        fill="white"
                                                        transform="translate(0 117.205) rotate(-44.7075)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutoverlay" />
            </section>
            {/* <!-- ABOUT-SECTION END --> */}

            {/* <!-- OUR-MISSION START --> */}
            <section className="ourmission">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="ourmission-details">
                                <h2 className="fw-bold">Who We Are</h2>

                                <div className="info">
                                    <p className="text">
                                        <span className="fw-medium">WebWowZer</span> is a website
                                        builder that encapsulates simplicity, affordability, and
                                        creativity. Our easy-to-navigate and user-friendly interface
                                        is loaded with customized tools and useful/informative
                                        resources. You will be able to find guides and tips to
                                        building a website for virtually every industry and business
                                        segment. Multiple-language options allow you to connect with
                                        people worldwide. We support a comprehensive variety of
                                        digital needs and website features you need.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-left">
                            <div className="ourmission-details">
                                <h2 className="fw-bold">Our Mission</h2>

                                <div className="info">
                                    <p className="text">
                                        At <span className="fw-medium">WebWowZer</span> Inc, it is
                                        our fundamental belief to give back to our society by
                                        offering help, and extending assistance beyond our business
                                        platform and services. We will donate 3% of our annual
                                        profit to a scholarship fund and offer assistance to
                                        selective nonprofit organizations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- OUR-MISSION END --> */}

            {/* <!-- AUTO-INCREMENT START --> */}
            <section className="autoincrement" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-lg-auto">
                            <div className="autoincrement-details">
                                <div className="row g-5">
                                    <div className="col-md-4">
                                        <div className="cardincrement">
                                            <h2 className="fw-bold">100+</h2>
                                            <p className="text">Happy Customers</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="cardincrement">
                                            <h2 className="fw-bold">50+</h2>
                                            <p className="text">Category Templates</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="cardincrement">
                                            <h2 className="fw-bold">3+</h2>
                                            <p className="text">Years of Industry Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- AUTO-INCREMENT END --> */}

            {/* <!-- ABOUT-INFO START --> */}
            <section className="aboutmyinfo">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="details">
                                <h2 className="fw-bold">
                                    We Believe ANYONE Can Create an Online Website Presence and “Wow
                                    The World”
                                </h2>

                                <div className="info">
                                    <p className="text">
                                        No matter which industry you are from and what your
                                        short-term and long-term business goals are; If you wish to
                                        lay down the foundation of your online presence with a
                                        stunning website, then WebWowZer is for you. Give your
                                        website the WoW factor
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="offset-lg-1 offset-0 col-lg-5" data-aos="fade-left">
                            <figure className="thumbnail">
                                <img
                                    src="assets/images/about/about-thumb/about-thumb.png"
                                    alt="about-thumb"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ABOUT-INFO END --> */}

            {/* <!-- PRODUCT-VALUES START --> */}
            <section className="productvalues" data-aos="fade-up">
                <div className="productvalues-content">
                    <div className="container">
                        <div className="col-lg-4 mx-lg-auto">
                            <h2 className="text-center fw-bold">The values behind our product</h2>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-lg-auto">
                                <div className="row g-4">
                                    <div className="col-md-3">
                                        <div className="cardvalue">
                                            <div className="cardvalue-header">
                                                <figure className="valuethumb">
                                                    <img
                                                        src="assets/images/about/about-icons/icon-1.png"
                                                        alt="cardvalue-thumbnail"
                                                    />
                                                </figure>
                                            </div>

                                            <div className="cardvalue-body">
                                                <h5 className="title">Simplicity & Mindfulness</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="cardvalue">
                                            <div className="cardvalue-header">
                                                <figure className="valuethumb">
                                                    <img
                                                        src="assets/images/about/about-icons/icon-2.png"
                                                        alt="cardvalue-thumbnail"
                                                    />
                                                </figure>
                                            </div>

                                            <div className="cardvalue-body">
                                                <h5 className="title">Creation & Development</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="cardvalue">
                                            <div className="cardvalue-header">
                                                <figure className="valuethumb">
                                                    <img
                                                        src="assets/images/about/about-icons/icon-3.png"
                                                        alt="cardvalue-thumbnail"
                                                    />
                                                </figure>
                                            </div>

                                            <div className="cardvalue-body">
                                                <h5 className="title">Reliability & Vitality</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="cardvalue">
                                            <div className="cardvalue-header">
                                                <figure className="valuethumb">
                                                    <img
                                                        src="assets/images/about/about-icons/icon-4.png"
                                                        alt="cardvalue-thumbnail"
                                                    />
                                                </figure>
                                            </div>

                                            <div className="cardvalue-body">
                                                <h5 className="title">Care & Safety</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- PRODUCT-VALUES END --> */}

            {/* <!-- POTENTIAL-SECTION START --> */}
            <section className="aboutplatform" data-aos="flip-up">
                <div className="container">
                    <div className="aboutplatform-content">
                        <div className="aboutplatform-info">
                            <div className="row g-4">
                                <div className="offset-xl-1 offset-0 col-xl-6 col-lg-8">
                                    <div className="leftinfo">
                                        <h2 className="display-6 fw-bold">
                                            About The WebWowZer Platform
                                        </h2>

                                        <div className="info">
                                            <p className="text">
                                                We created WebWowZer as a website builder that
                                                encapsulates simplicity, affordability, and
                                                creativity. Our easy-to-navigate and user-friendly
                                                interface is loaded with customized tools and
                                                useful/informative resources such as Widgets and
                                                Apps.
                                            </p>
                                        </div>

                                        <div className="started">
                                            <Link href="/work-in-progress" className="btn-started">
                                                Start Building
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="offset-xl-1 offset-0 col-lg-4">
                                    <figure className="aboutplatform-thumbnail">
                                        <img
                                            src="assets/images/about/aboutplatform-thumbnail.png"
                                            alt="aboutplatform-thumbnail"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- POTENTIAL-SECTION END --> */}
        </main>
    );
}
