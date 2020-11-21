import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <Router>
            <header className="site-header">
                <div id="header-wrap">
                    <div className="container">
                        <div className="row">
                            {/*menu start*/}
                            <div className="col d-flex align-items-center justify-content-between">
                                <a className="navbar-brand logo text-dark h2 mb-0" href="index.html">
                                    <span className="text-primary font-weight-bold"> Lanyard</span>
                                </a>
                                <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                                    <button className="navbar-toggler" onClick={() => setNavToggle(!navToggle)} type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className={navToggle ? `navbar-collapse` : `collapse navbar-collapse`} id="navbarNav">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown"> <a href="/">Home</a>
                                            </li>
                                            <li className="nav-item dropdown"> <a href="/create-event">Create Event</a>
                                            </li>
                                            <li className="nav-item dropdown"> <a href="/card-generator">Card Generator</a>
                                            </li>
                                            <li className="nav-item dropdown"> <a href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* <a className="btn btn-primary ml-8 d-none d-lg-block" href="login.html">Login</a>
                                <a className="btn btn-primary ml-8 d-none d-lg-block" href="signup.html">Sign Up</a> */}
                            </div>
                            {/*menu end*/}
                        </div>
                    </div>
                </div>
            </header>
        </Router >
    )
}

export default Navbar
