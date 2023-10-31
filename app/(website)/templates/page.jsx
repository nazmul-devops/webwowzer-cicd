/* eslint-disable @next/next/no-img-element */
import PotentialSection from '@/components/website/PotentialSection';

/* eslint-disable react/button-has-type */
export default function TemplatePage() {
    return (
        <main className="main">
            {/* <!-- TEMPLATES-SECTION START --> */}
            <section className="templates">
                <div className="templates-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <h1 className="display-5 fw-bold">Templates Gallery</h1>
                                    <div className="info">
                                        <p className="text">
                                            Pick a template, then head to your dashboard. Expect a
                                            welcome email for plan options after site creation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <ul
                            className="nav nav-tabs justify-content-center"
                            id="templateTab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="alltemplates-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#alltemplates-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="alltemplates-tab-pane"
                                    aria-selected="true"
                                >
                                    All Templates
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="business-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#business-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="business-tab-pane"
                                    aria-selected="false"
                                >
                                    Business
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="ecommerce-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#ecommerce-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="ecommerce-tab-pane"
                                    aria-selected="false"
                                >
                                    Ecommerce
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="blog-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#blog-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="blog-tab-pane"
                                    aria-selected="false"
                                >
                                    Blog
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="entertainment-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#entertainment-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="entertainment-tab-pane"
                                    aria-selected="false"
                                >
                                    Entertainment
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="news-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#news-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="news-tab-pane"
                                    aria-selected="false"
                                >
                                    News
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="portfolio-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#portfolio-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="portfolio-tab-pane"
                                    aria-selected="false"
                                >
                                    Portfolio
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="personal-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#personal-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="personal-tab-pane"
                                    aria-selected="false"
                                >
                                    Personal
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="search-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSearchForm"
                                    aria-expanded="false"
                                    aria-controls="collapseSearchForm"
                                >
                                    <span className="icon">
                                        <span className="searchicon">
                                            <svg
                                                width="65"
                                                height="65"
                                                viewBox="0 0 65 65"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="65"
                                                    height="65"
                                                    rx="32.5"
                                                    fill="#F2F2F2"
                                                />
                                                <path
                                                    d="M31.5 39.5C35.9183 39.5 39.5 35.9183 39.5 31.5C39.5 27.0817 35.9183 23.5 31.5 23.5C27.0817 23.5 23.5 27.0817 23.5 31.5C23.5 35.9183 27.0817 39.5 31.5 39.5Z"
                                                    stroke="#0B2330"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M41.5004 41.5004L37.1504 37.1504"
                                                    stroke="#0B2330"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="closeicon">
                                            <svg
                                                width="65"
                                                height="65"
                                                viewBox="0 0 65 65"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="65"
                                                    height="65"
                                                    rx="32.5"
                                                    fill="#0B2330"
                                                />
                                                <path
                                                    d="M38.5 26.5L26.5 38.5"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M26.5 26.5L38.5 38.5"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </li>
                        </ul>

                        <div className="py-5">
                            <div className="collapse" id="collapseSearchForm">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 mx-md-auto">
                                        <form className="searchform">
                                            <input
                                                type="search"
                                                placeholder="Search here"
                                                className="searchinput"
                                            />

                                            <div className="submitbox">
                                                <button
                                                    type="submit"
                                                    className="btn-searchtemplate"
                                                >
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                                            stroke="#0B2330"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M20.9984 20.9999L16.6484 16.6499"
                                                            stroke="#0B2330"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-content" id="templateTabContent">
                            {/* <!-- ALL-TEMPLATES --> */}
                            <div
                                className="tab-pane fade show active"
                                id="alltemplates-tab-pane"
                                role="tabpanel"
                                aria-labelledby="alltemplates-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-7.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-7.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- BUSINESS-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="business-tab-pane"
                                role="tabpanel"
                                aria-labelledby="business-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Business</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ECOMMERCE-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="ecommerce-tab-pane"
                                role="tabpanel"
                                aria-labelledby="ecommerce-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />
                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Ecommerce</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- BLOG-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="blog-tab-pane"
                                role="tabpanel"
                                aria-labelledby="blog-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Blog</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ENTERTAINMENT-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="entertainment-tab-pane"
                                role="tabpanel"
                                aria-labelledby="entertainment-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Entertainment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- NEWS-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="news-tab-pane"
                                role="tabpanel"
                                aria-labelledby="news-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">News</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- PORTFOLIO-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="portfolio-tab-pane"
                                role="tabpanel"
                                aria-labelledby="portfolio-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Portfolio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- PERSONAL-TEMPLATES --> */}
                            <div
                                className="tab-pane fade"
                                id="personal-tab-pane"
                                role="tabpanel"
                                aria-labelledby="personal-tab"
                                tabIndex="0"
                                data-aos="fade-up"
                            >
                                <div className="row gx-4 gy-5">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-1.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-2.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-3.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-4.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-5.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="cardtemplate">
                                            <div className="cardtemplate-header">
                                                <figure className="template-thumbnail">
                                                    <img
                                                        src="assets/images/templates/template-6.png"
                                                        alt="template-thumbnail"
                                                    />

                                                    <div className="viewedit">
                                                        <button className="btn-edit d-none">
                                                            Edit
                                                        </button>
                                                        <button className="btn-view d-none">
                                                            View
                                                        </button>

                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-edit"
                                                        >
                                                            Edit
                                                        </a>
                                                        <a
                                                            href="workinginprogress.html"
                                                            className="btn-view"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                </figure>
                                            </div>

                                            <div className="cardtemplate-body">
                                                <h5 className="title">Air Table Example</h5>
                                                <span className="category">Personal</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex justify-content-center py-4">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true">
                                                        <svg
                                                            width="9"
                                                            height="15"
                                                            viewBox="0 0 9 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9 1.71729L3.43492 7.28237L9 12.8474L7.28257 14.5649L3.18331e-07 7.28237L7.28257 -0.000196532L9 1.71729Z"
                                                                fill="#0B2330"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="page-item active">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>

                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">
                                                        <svg
                                                            width="9"
                                                            height="15"
                                                            viewBox="0 0 9 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M-5.61588e-07 2.15235L5.56508 7.71743L-7.50739e-08 13.2825L1.71743 15L9 7.71743L1.71743 0.434862L-5.61588e-07 2.15235Z"
                                                                fill="#0B2330"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- TEMPLATES-SECTION END --> */}

            <PotentialSection />
        </main>
    );
}
