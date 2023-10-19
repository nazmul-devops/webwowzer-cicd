import Image from 'next/image';

import PotentialSection from '@/components/PotentialSection';

async function getBlog(id) {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/blog/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function BlogDetails({ params }) {
    const data = await getBlog(params.slug[1]);
    console.log('blog', data);
    console.log('ok ss ', params.slug[1]);
    return (
        <main className="main">
            {/* <!-- BLOG-DETAILS START --> */}
            <section className="blogdetails">
                <div className="blogdetails-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-9 mx-lg-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <p className="toptext">
                                        Home / Blog / 3 Effective And Professional Web Design Tips
                                        To Follow In 2021
                                    </p>

                                    <h1 className="fw-bold display-5">{data?.blog?.title}</h1>

                                    <p className="toptext">
                                        By {data?.blog?.author_name} •{' '}
                                        {new Date(data?.blog?.created_at).toLocaleDateString(
                                            'en-US',
                                            { year: 'numeric', month: 'short', day: 'numeric' }
                                        )}{' '}
                                        • {data?.blog?.read_time} min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="flip-up">
                        <div className="row w-100">
                            <div className="col-lg-7 mx-lg-auto">
                                <figure className="blogthumb">
                                    {data?.blog.blog_cover_img ? (
                                        <Image
                                            src={data?.blog.blog_cover_img}
                                            alt="blog-thumbnail"
                                            width={700}
                                            height={400}
                                        />
                                    ) : (
                                        <Image
                                            src="/assets/images/blogs/blog-1.png" // Replace with the path to your default image
                                            alt="default-blog-thumbnail"
                                            width={700}
                                            height={400}
                                        />
                                    )}
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <div className="row w-100">
                            <div className="col-lg-8 mx-lg-auto">
                                <div className="detailscontent">{data?.blog?.blog_content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- BLOG-DETAILS END --> */}

            {/* <!-- MORE-ARTICLES START --> */}
            <section className="morearticles">
                <div className="morearticles-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <h2 className="fw-bold text-center">More articles</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6" data-aos="fade-right">
                                <a href="blog-details.html" className="bloglink">
                                    <div className="cardblog">
                                        <div className="cardblog-header">
                                            <figure className="blogthumbnail">
                                                <Image
                                                    src="/assets/images/blog-details/blog-thumbnail.png"
                                                    alt="blog-thumbnail"
                                                    width={700}
                                                    height={400}
                                                />
                                            </figure>
                                        </div>

                                        <div className="cardblog-body">
                                            <h5 className="blogtitle">
                                                3 Effective And Professional Web Design Tips To
                                                Follow In 2021
                                            </h5>
                                            <p className="blogtext">
                                                By James Dempsey • 28 Dec, 2021 • 7 min read
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6" data-aos="fade-left">
                                <a href="blog-details.html" className="bloglink">
                                    <div className="cardblog">
                                        <div className="cardblog-header">
                                            <figure className="blogthumbnail">
                                                <Image
                                                    src="/assets/images/blog-details/blog-thumbnail.png"
                                                    alt="blog-thumbnail"
                                                    width={700}
                                                    height={400}
                                                />
                                            </figure>
                                        </div>

                                        <div className="cardblog-body">
                                            <h5 className="blogtitle">
                                                10 best practices for responsive web design
                                            </h5>
                                            <p className="blogtext">
                                                By James Dempsey • 28 Dec, 2021 • 7 min read
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- MORE-ARTICLES END --> */}

            <PotentialSection />
        </main>
    );
}
