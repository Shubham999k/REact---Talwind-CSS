function About() {
    return (
        <>
            <div className="container py-5">

                {/* Heading */}

                <div className="text-center mb-5">

                    <h1 className="fw-bold">
                        About Us
                    </h1>

                    <p className="lead text-muted">
                        Learn more about who we are and what we do.
                    </p>

                </div>

                {/* About Section */}

                <div className="row align-items-center">

                    <div className="col-md-6">

                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                            alt="About"
                            className="img-fluid rounded shadow"
                        />

                    </div>

                    <div className="col-md-6">

                        <h2 className="fw-bold">
                            We Build Modern Web Applications
                        </h2>

                        <p className="mt-3 text-muted">
                            Our mission is to create responsive,
                            user-friendly and high-performance web
                            applications using modern technologies.
                        </p>

                        <p className="text-muted">
                            We specialize in React, Node.js, Express,
                            MongoDB and full-stack web development.
                        </p>

                        <button className="btn btn-primary mt-3">
                            Learn More
                        </button>

                    </div>

                </div>

                {/* Features */}

                <div className="row mt-5 g-4">

                    <div className="col-md-4">

                        <div className="card shadow border-0 h-100 text-center">

                            <div className="card-body">

                                <h1>🎯</h1>

                                <h4>Our Mission</h4>

                                <p>
                                    Deliver high-quality web solutions
                                    that solve real-world problems.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow border-0 h-100 text-center">

                            <div className="card-body">

                                <h1>💡</h1>

                                <h4>Innovation</h4>

                                <p>
                                    Continuously learning and adopting
                                    modern technologies.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow border-0 h-100 text-center">

                            <div className="card-body">

                                <h1>🚀</h1>

                                <h4>Growth</h4>

                                <p>
                                    Helping businesses and developers
                                    grow through technology.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default About;