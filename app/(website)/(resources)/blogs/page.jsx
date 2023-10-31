/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import PotentialSection from '@/components/website/PotentialSection';
import axios from '@/lib/axios';

async function getBlogs() {
    const response = await axios.get('/api/blog');

    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    return response.data;
}

export default async function BlogsPage() {
    const data = await getBlogs();
    const activeItems = data.blogs.filter((item) => item.active);

    return (
        <main className="main">
            {/* <!-- BLOG-SECTION START --> */}
            <section className="blogs">
                <div className="blogs-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <h1 className="display-5 fw-bold">Blog</h1>
                                    <div className="info">
                                        <p className="text">
                                            Level up your product development with our
                                            expert-curated collection of guides and articles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <div className="row gx-4 gy-5">
                            {activeItems.map((blog) => (
                                <div className="col-md-6" data-aos="fade-right" key={blog._id}>
                                    <Link
                                        href={`/blogs/blog-details/${blog._id}`}
                                        className="bloglink"
                                    >
                                        <div className="cardblog">
                                            <div className="cardblog-header">
                                                <figure className="blogthumbnail">
                                                    {blog.blog_cover_img ? (
                                                        <img
                                                            src={blog.blog_cover_img}
                                                            alt="blog-thumbnail"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="assets/images/blogs/blog-1.png"
                                                            alt="default-avatar"
                                                        />
                                                    )}
                                                </figure>
                                            </div>

                                            <div className="cardblog-body">
                                                <h5 className="blogtitle">{blog.title}</h5>
                                                <p className="blogtext">
                                                    By {blog.author_name}
                                                    {new Date(
                                                        blog.created_at
                                                    ).toLocaleDateString()}{' '}
                                                    {blog.read_time} min read
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex justify-content-center">
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
            {/* <!-- BLOG-SECTION END --> */}

            <PotentialSection />
        </main>
    );
}
