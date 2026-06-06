function Home() {
    return (
        <>
            <div className="container py-5">

                {/* Hero Section */}

                <div className="bg-primary text-white text-center p-5 rounded shadow">

                    <h1 className="display-4 fw-bold">
                        Welcome To My Website
                    </h1>

                    <p className="lead mt-3">
                        MERN Stack Developer | React Enthusiast |
                        Future Software Engineer
                    </p>

                    <button className="btn btn-light btn-lg mt-3">
                        Explore More
                    </button>

                </div>

                {/* Features */}

                <div className="row mt-5 g-4">

                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0 text-center">

                            <div className="card-body">

                                <h1>💻</h1>

                                <h4>Web Development</h4>

                                <p>
                                    Build responsive and modern websites
                                    using React and Bootstrap.
                                </p>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0 text-center">

                            <div className="card-body">

                                <h1>⚛️</h1>

                                <h4>React Projects</h4>

                                <p>
                                    Create dynamic user interfaces with
                                    reusable React components.
                                </p>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 shadow border-0 text-center">

                            <div className="card-body">

                                <h1>🚀</h1>

                                <h4>MERN Stack</h4>

                                <p>
                                    Develop full-stack applications using
                                    MongoDB, Express, React and Node.js.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>

                {/* About Section */}

                <div className="bg-light p-5 rounded shadow mt-5 text-center">

                    <h2 className="fw-bold">
                        Why Choose Us?
                    </h2>

                    <p className="mt-3">
                        We provide modern web solutions with beautiful
                        UI, responsive design and powerful backend
                        functionality.
                    </p>

                </div>

            </div>
        </>
    );
}

export default Home;