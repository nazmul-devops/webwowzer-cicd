'use client';

import Image from 'next/image';
import Link from 'next/link';

import potentialThumbnail from '@/public/assets/images/home/potential-thumbnail.png';

export default function PotentialSection() {
    return (
        <section className="potential" data-aos="flip-up">
            <div className="container">
                <div className="potential-content">
                    <div className="potential-info">
                        <div className="row g-4">
                            <div className="offset-xl-1 offset-0 col-xl-6 col-lg-8">
                                <div className="leftinfo">
                                    <h2 className="display-6">
                                        Unlock your product’s full potential
                                    </h2>

                                    <div className="info">
                                        <p className="text">
                                            Webwowzer is one of the few that offer a great website
                                            builder with free templates, widgets and Aps. With our
                                            builder, you can create the best DIY e-commerce websites
                                            for your business. Our custom-made website services have
                                            a wide variety of templates and formats available for
                                            use immediately.
                                        </p>
                                    </div>

                                    <div className="started">
                                        <Link href="/work-in-progress" className="btn-order">
                                            Start Building
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="offset-xl-1 offset-0 col-lg-4">
                                <figure className="potential-thumbnail">
                                    <Image
                                        src={potentialThumbnail}
                                        alt="potential-thumbnail"
                                        width={potentialThumbnail.width}
                                        height={potentialThumbnail.height}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
