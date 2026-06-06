import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary-subtle py-1 sticky-top">
                <div className="container">

                    {/* Logo */}
                    <NavLink className="navbar-brand fw-bold fs-3" to="/">
                       !! My Website !!
                    </NavLink>

                    {/* Center Menu */}
                    <div className="mx-auto">
                        <ul className="navbar-nav flex-row gap-4 ">

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary" to="/about">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary" to="/contact">
                                    Contact
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary" to="/product">
                                    Product
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary" to="/counter">
                                    Counter
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="d-flex gap-2">

                        <NavLink
                            className="btn btn-outline-primary fw-semibold"
                            to="/login"
                        >
                            Login
                        </NavLink>

                        <NavLink
                            className="btn btn-primary fw-semibold"
                            to="/register"
                        >
                            Register
                        </NavLink>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;