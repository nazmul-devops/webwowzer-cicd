import PotentialSection from '@/components/PotentialSection';

export default function TutorialPage() {
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
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Edit Page Layout</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Manage Pages</h5>
                                        <p className="durations">4 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Basic Editor Overview</h5>
                                        <p className="durations">5 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Personalization</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Global Design</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Site Header</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Using Widgets</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Manage Content</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Dynamic Pages</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Internal Collections</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Navigation</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                <div className="cardtutorial">
                                    <div className="cardtutorial-header">
                                        <figure className="tutorial-thumbnail">
                                            <img
                                                src="assets/images/tutorials/tutorial-thumbnail.png"
                                                alt="tutorial-thumbnail"
                                            />
                                        </figure>

                                        <button type="button" className="btn-play">
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
                                        <h5 className="tutorialtitle">Site Comments</h5>
                                        <p className="durations">3 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- TUTORIALS-SECTION END --> */}

            <PotentialSection />
        </main>
    );
}
