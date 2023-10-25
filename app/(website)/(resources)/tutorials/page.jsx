'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import TutorialSkeletonCard from '@/app/(website)/(resources)/tutorials/TutorialSkeletonCard';
import YouTubeModal from '@/components/website/tutorials/YoutubeModal';
import PotentialSection from '@/components/website/PotentialSection';
import axios from '@/lib/axios';

async function getTutorials() {
    const response = await axios.get('/api/tutorial');

    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    return response?.data;
}

export default function TutorialPage() {
    const [showYoutubeModal, setShowYoutubeModal] = useState(false);
    const [tutorials, setTutorials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [singleTutorial, setSingleTutorial] = useState({});

    const handleYoutubeShowModal = (tutorial) => {
        setShowYoutubeModal(true);
        setSingleTutorial(tutorial);
    };

    const handleCloseYoutubeModal = () => {
        setShowYoutubeModal(false);
    };

    const getTutorialsData = async () => {
        try {
            const data = await getTutorials();
            setIsLoading(false);
            setTutorials(data.tutorials);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTutorialsData();
    }, []);

    return (
        <main className="main">
            {/* <!-- TUTORIALS-SECTION START --> */}
            <section className="tutorials">
                <div className="tutorials-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex flex-column gap-4 text-center">
                                    <h1 className="display-5 fw-bold">Tutorials</h1>
                                    <div className="info">
                                        <p className="text">
                                            Become a WebWowZer expert with our guided product tours
                                            and step-by-step tutorials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row gx-4 gy-5">
                            {isLoading ? (
                                <>
                                    <TutorialSkeletonCard />
                                    <TutorialSkeletonCard />
                                    <TutorialSkeletonCard />
                                </>
                            ) : (
                                <>
                                    {tutorials.map((tutorial) => (
                                        <div
                                            className="col-lg-4 col-sm-6"
                                            data-aos="fade-up"
                                            key={tutorial._id}
                                        >
                                            <div className="cardtutorial">
                                                <div className="cardtutorial-header">
                                                    <figure className="tutorial-thumbnail">
                                                        <Image
                                                            src={tutorial.thumbnail_img}
                                                            alt="tutorial-thumbnail"
                                                            width={560}
                                                            height={315}
                                                        />
                                                    </figure>

                                                    <button
                                                        type="button"
                                                        className="btn-play"
                                                        onClick={() => {
                                                            handleYoutubeShowModal(tutorial);
                                                        }}
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M2 2.80278C2 1.60473 3.33522 0.890145 4.33205 1.5547L12.1279 6.75192C13.0185 7.34566 13.0185 8.65434 12.1279 9.24808L4.33205 14.4453C3.33522 15.1099 2 14.3953 2 13.1972V2.80278Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </button>

                                                    <span className="overlay" />
                                                </div>

                                                <div className="cardtutorial-body">
                                                    <h5 className="tutorialtitle">
                                                        {tutorial.title}
                                                    </h5>
                                                    <p className="durations">
                                                        {tutorial.duration} min
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- TUTORIALS-SECTION END --> */}

            <PotentialSection />
            <YouTubeModal
                show={showYoutubeModal}
                handleClose={handleCloseYoutubeModal}
                tutorial={singleTutorial}
            />
        </main>
    );
}
