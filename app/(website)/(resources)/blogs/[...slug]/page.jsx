/* eslint-disable react/no-danger */
import Image from 'next/image';
import Link from 'next/link';

import PotentialSection from '@/components/website/PotentialSection';
import axios from '@/lib/axios';

async function getBlog(id) {
    const response = await axios.get(`/api/blog/${id}`);

    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }
    return response.data;
}

export default async function BlogDetails({ params }) {
    const data = await getBlog(params.slug[1]);

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
                                            src="/assets/images/blogs/blog-1.png"
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
                                <div
                                    dangerouslySetInnerHTML={{ __html: data?.blog?.blog_content }}
                                    className="detailscontent"
                                />
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
                            {data?.blog?.more?.map((moreBlog) => (
                                <div className="col-md-6" key={moreBlog._id} data-aos="fade-right">
                                    <Link
                                        href={`/blogs/blog-details/${moreBlog._id}`}
                                        className="bloglink"
                                    >
                                        <div className="cardblog">
                                            <div className="cardblog-header">
                                                <figure className="blogthumbnail">
                                                    <Image
                                                        src={
                                                            moreBlog.blog_cover_img ||
                                                            '/assets/images/blog-details/blog-thumbnail.png'
                                                        }
                                                        alt="blog-thumbnail"
                                                        width={700}
                                                        height={400}
                                                    />
                                                </figure>
                                            </div>

                                            <div className="cardblog-body">
                                                <h5 className="blogtitle">{moreBlog.title}</h5>
                                                <p className="blogtext">
                                                    By {moreBlog.author_name} •{' '}
                                                    {new Date(
                                                        moreBlog.created_at
                                                    ).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                    })}{' '}
                                                    • {moreBlog.read_time} min read
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- MORE-ARTICLES END --> */}

            <PotentialSection />
        </main>
    );
}
