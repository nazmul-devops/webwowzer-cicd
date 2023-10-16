import Image from 'next/image';

import PotentialSection from '@/components/PotentialSection';

export default function BlogDetails() {
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

                                    <h1 className="fw-bold display-5">
                                        3 Effective And Professional Web Design Tips To Follow In
                                        2021
                                    </h1>

                                    <p className="toptext">
                                        By James Dempsey • 28 Dec, 2021 • 7 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="flip-up">
                        <div className="row w-100">
                            <div className="col-lg-7 mx-lg-auto">
                                <figure className="blogthumb">
                                    <Image
                                        src="/assets/images/blog-details/blog-thumbnail.png"
                                        alt="blog-thumbnail"
                                        width={700}
                                        height={400}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="container" data-aos="fade-up">
                        <div className="row w-100">
                            <div className="col-lg-8 mx-lg-auto">
                                <div className="detailscontent">
                                    <div className="info">
                                        <p className="text">
                                            If you really think about it, design is a very
                                            subjective element when it comes to websites. Different
                                            users will prefer different designs, which explains why
                                            there are many tips out there for you to improve your
                                            website’s design. But that’s just like throwing blind
                                            arrows. To truly ensure your website’s success through
                                            web design, you need to take tips from professionals.
                                            So, we’ve scavenged the internet and gathered the best
                                            ones for you to follow when you create your own website.
                                            Here you go!
                                        </p>
                                    </div>

                                    <div className="details">
                                        <h5 className="title">
                                            Follow the Less Is More Approach Religiously
                                        </h5>

                                        <div className="descriptions">
                                            <p className="text">
                                                When it comes to website design, simplicity is key.
                                                But some businesses tend to overdo their websites,
                                                and that doesn’t do much for their ranking. The fact
                                                is that most visitors on your website don’t care
                                                much about the design.
                                            </p>

                                            <p className="text">
                                                What they do care about is usability. If you go all
                                                out on the design, there is a chance that you’ll
                                                make it too crowded, which will make it harder for
                                                users to navigate through the pages. As a general
                                                rule of thumb, keep the website clutter-free and
                                                minimalistic. Make sure the elements people need to
                                                see aren’t hard to find.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h5 className="title">
                                            Make Sure Your Website’s Design Is in Line with The
                                            Industry You Operate In
                                        </h5>

                                        <div className="descriptions">
                                            <p className="text">
                                                Your website should be a clear reflection of your
                                                business. Depending on which industry you’re part
                                                of, you’ll have a target audience. Your design
                                                elements should be in line with your target
                                                audiences’ preferences and expectations.
                                            </p>

                                            <p className="text">
                                                For instance, if you’re an interior designing
                                                company—you may want to have more artistic elements
                                                on your website to showcase your business’s creative
                                                capability. On the other hand, a simple, modern web
                                                design should work fine for you if you run something
                                                like a dentist&apos;s clinic. Moreover, since your
                                                website represents your brand, it’s important to
                                                choose design elements that will help build brand
                                                awareness.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h5 className="title">Incorporate Visual Elements</h5>

                                        <div className="descriptions">
                                            <p className="text">
                                                Humans are visual learners. A majority of us retain
                                                a lot more information from images and videos rather
                                                than text. So, if you need to tell your audience
                                                something important about your business, it makes
                                                sense to use graphics instead of plain written
                                                content.
                                            </p>

                                            <p className="text">
                                                Visual elements like videos, images, and
                                                infographics help engage leads, resulting in more
                                                conversions for the business. Web design can seem
                                                complicated, and the truth is, it mostly is—unless
                                                you’re using an online website builder like
                                                WebWowZer!
                                            </p>

                                            <p className="text">
                                                It’s one of the best free website builders, and we
                                                offer custom-made website designs that allow you to
                                                create a professional, high-ranking website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
