/* eslint-disable @next/next/no-img-element */
import AnnouncementSection from '@/components/dashboard/AnnouncementSection';

/* eslint-disable react/button-has-type */
export default function TemplatePage() {
    return (
        <>
            <AnnouncementSection />

            {/* <!-- MAIN-SECTION START --> */}
            <main className="loggedmain">
                {/* <!-- TEMPLATES-SECTION START --> */}
                <section className="templates templateview">
                    <div className="templates-content gap-4">
                        <div className="container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 mx-lg-auto">
                                    <div className="d-flex flex-column gap-4 text-center">
                                        <h1 className="display-5 fw-bold">Choose a template</h1>
                                        <div className="info">
                                            <p className="text">
                                                Select your staring point, customize easily, and
                                                build a great website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mb-3">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option selected>All templates</option>
                                                <option value="Business">Business</option>
                                                <option value="Ecommerce">Ecommerce</option>
                                                <option value="Blog">Blog</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="News">News</option>
                                                <option value="Portfolio">Portfolio</option>
                                                <option value="Personal">Personal</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <select className="form-select">
                                                <option selected>Select category</option>
                                                <option value="Portfolio">Portfolio</option>
                                                <option value="Landing page">Landing page</option>
                                                <option value="Business site">Business site</option>
                                                <option value="Online store">Online store</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                                <option value="Just browsing">Just browsing</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <form className="searchform">
                                        <input
                                            type="search"
                                            placeholder="Search template here ..."
                                            className="searchinput"
                                        />

                                        <div className="submitbox">
                                            <button type="submit" className="btn-searchtemplate">
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

                        <div className="container" data-aos="fade-up">
                            <div className="row gx-4 gy-5">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="cardtemplate">
                                        <div className="cardtemplate-header">
                                            <figure className="template-thumbnail">
                                                <img
                                                    src="../assets/images/templates/template-1.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-2.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-3.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-4.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-5.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-6.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-7.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-1.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-2.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-3.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-4.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-5.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-6.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-7.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    src="../assets/images/templates/template-3.png"
                                                    alt="template-thumbnail"
                                                />

                                                <div className="viewedit">
                                                    <button className="btn-edit">
                                                        Start Building
                                                    </button>
                                                    <button className="btn-view">View</button>
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
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
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
            </main>
        </>
    );
}
