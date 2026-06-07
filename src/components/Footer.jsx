import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="bg-dark text-light pt-5 pb-3 mt-5">

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-4">

                            <h3 className="text-warning fw-bold">
                                My Website
                            </h3>

                            <p>
                                Discover with passion
                                and care.
                            </p>

                        </div>

                        <div className="col-md-4">

                            <h5>Quick Links</h5>

                            <ul className="list-unstyled">

                                <li>
                                    <Link
                                        to="/"
                                        className="text-decoration-none text-light"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/about"
                                        className="text-decoration-none text-light"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-decoration-none text-light"
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                        </div>

                        <div className="col-md-4">

                            <h5>Contact</h5>

                            <p>📍 Satna, MP</p>
                            <p>📞 +91 9876543210</p>
                            <p>📧 info@mywebsite.com</p>

                        </div>

                    </div>

                    <hr />

                    <p className="text-center mb-0">
                        © 2026 My Website. All Rights Reserved.
                    </p>

                </div>

            </footer>
        </>
    );
}

export default Footer;