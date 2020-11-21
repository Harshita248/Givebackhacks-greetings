import userEvent from '@testing-library/user-event'
// import $ from "jquery";
import React, { useState, useEffect } from 'react'
// import theme from '../assets/js/theme-script.js'
// import theme2 from '../assets/js/theme-plugin.js'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])


    return (
        <div>
            {/* page wrapper start */}
            <div className="page-wrapper">
                {/* preloader start */}
                <div>
                    {/* page wrapper start */}
                    <div className="page-wrapper">
                        {/* preloader start */}
                        <div id="ht-preloader" style={isLoading ? { display: "block" } : { display: "none" }}>
                            <div className="loader clear-loader">
                                <span />
                                <p>Lanyard</p>
                            </div>
                        </div>
                        {/* preloader end */}

                        {/*hero section start*/}
                        <section className="custom-pt-1 custom-pb-3 bg-primary position-relative parallaxie" data-bg-img="./images/bg/03.png">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-5 col-xl-5 mr-auto mb-8 mb-lg-0">
                                        {/* Image */}
                                        <img src={'./images/hero/02.png'} className="img-fluid" alt="img1" />
                                    </div>
                                    <div className="col-12 col-lg-7 col-xl-6">
                                        {/* Heading */}
                                        <h1 className="display-4 text-white">
                                            Change the way you build websites With <span className="font-weight-bold">Business</span>
                                        </h1>
                                        {/* Text */}
                                        <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap
                    components.</p>
                                        {/* Buttons */} <a href="#" className="btn btn-outline-light mr-1">
                                            Learn More
                  </a>
                                        <a href="http://vimeo.com/99025203" className="btn text-white popup-vimeo"> <i className="la la-play-circle mr-1 ic-3x align-middle line-h-0" /> Watch Video</a>
                                    </div>
                                </div>
                                {/* / .row */}
                            </div>
                            {/* / .container */}
                            <div className="shape-1 bottom" style={{ height: '250px', overflow: 'hidden' }}>
                                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                                </svg>
                            </div>
                        </section>
                        {/*hero section end*/}
                        {/*body content start*/}
                        <div className="page-content">
                            {/*client start*/}
                            <section className="p-0">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="owl-carousel no-pb" data-dots="false" data-items={6} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30} data-autoplay="true">
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/07.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/08.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/09.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/10.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/11.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="clients-logo">
                                                        <img className="img-fluid" src="./images/client/12.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*client end*/}
                            {/*about start*/}
                            <section>
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                            <img src="./images/about/03.png" alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-5">
                                            <div> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-exclamation ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">We're A Creative Software Landing Page</h2>
                                                <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium,
                        totam rem aperiam.</p>
                                            </div> <a href="#" className="btn btn-outline-primary mt-5">
                                                Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*about end*/}
                            {/*service start*/}
                            <section>
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0 order-lg-1">
                                            <div className="d-flex justify-content-between mb-5">
                                                <div className="mr-3">
                                                    <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                                        <rect x={3} y={3} width={7} height={7} />
                                                        <rect x={14} y={3} width={7} height={7} />
                                                        <rect x={14} y={14} width={7} height={7} />
                                                        <rect x={3} y={14} width={7} height={7} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="mb-2">Creative Design</h5>
                                                    <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.
                        </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-5">
                                                <div className="mr-3">
                                                    <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square">
                                                        <polyline points="9 11 12 14 22 4" />
                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="mb-2">Easy To Start</h5>
                                                    <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.
                        </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="mr-3">
                                                    <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi">
                                                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                                        <line x1={12} y1={20} x2={12} y2={20} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="mb-2">Management</h5>
                                                    <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-5">
                                            <div> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-exclamation ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">We Have Experience Website building With Bootstrap</h2>
                                                <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium,
                        totam rem aperiam.</p>
                                            </div> <a href="#" className="btn btn-outline-primary mt-5">
                                                Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*service end*/}
                            {/*testimonial start*/}
                            <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="./images/bg/02.png">
                                <div className="container">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-12 col-md-12 col-lg-8 mb-8">
                                            <div> <span className="badge badge-primary p-2">
                                                <i className="la la-users ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                                                <p className="lead mb-0">All types of businesses need access to development resources, so we give you the
                        option to decide how much you need to use.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* / .row */}
                                </div>
                                <div className="container-fluid text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="owl-carousel owl-center" data-center="true" data-items={3} data-md-items={3} data-sm-items={1}>
                                                <div className="item">
                                                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                                                        <div>
                                                            <img alt="Image" src="./images/testimonial/01.jpg" className="shadow-primary img-fluid rounded-circle d-inline" />
                                                        </div>
                                                        <div className="card-body p-0 mt-5">
                                                            <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern
                              design.</p>
                                                            <div>
                                                                <h5 className="text-primary d-inline mb-0">Romi Jensen</h5>
                                                                <small className="text-muted font-italic">- Founder</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                                                        <div>
                                                            <img alt="Image" src="./images/testimonial/02.jpg" className="shadow-primary img-fluid rounded-circle d-inline" />
                                                        </div>
                                                        <div className="card-body p-0 mt-5">
                                                            <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern
                              design.</p>
                                                            <div>
                                                                <h5 className="text-primary d-inline mb-0">Johny Stock</h5>
                                                                <small className="text-muted font-italic">- Supervisor</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                                                        <div>
                                                            <img alt="Image" src="./images/testimonial/03.jpg" className="shadow-primary img-fluid rounded-circle d-inline" />
                                                        </div>
                                                        <div className="card-body p-0 mt-5">
                                                            <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern
                              design.</p>
                                                            <div>
                                                                <h5 className="text-primary d-inline mb-0">Leeny Biton</h5>
                                                                <small className="text-muted font-italic">- Manager</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                                                        <div>
                                                            <img alt="Image" src="./images/testimonial/02.jpg" className="shadow-primary img-fluid rounded-circle d-inline" />
                                                        </div>
                                                        <div className="card-body p-0 mt-5">
                                                            <p className="text-light">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern
                              design.</p>
                                                            <div>
                                                                <h5 className="text-primary d-inline mb-0">Jensen Rom</h5>
                                                                <small className="text-muted font-italic">- Ceo</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
                                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                                    </svg>
                                </div>
                                <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                                    </svg>
                                </div>
                            </section>
                            {/*testimonial end*/}
                            {/*counter start*/}
                            <section className="p-0">
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-12 col-lg-6 col-xl-5">
                                            <div id="accordion" className="accordion">
                                                <div className="card border-0 active mb-2">
                                                    <div className="card-header bg-transparent border mb-0">
                                                        <h6 className="mb-0">
                                                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">When our power of choice Business ?</a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapse1" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                        Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                                    </div>
                                                </div>
                                                <div className="card border-0 mb-2">
                                                    <div className="card-header bg-transparent border mb-0">
                                                        <h6 className="mb-0">
                                                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Nam libero
                              tempore, cum soluta nobis ?</a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                                        <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                        Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    <div className="card-header bg-transparent border mb-0">
                                                        <h6 className="mb-0">
                                                            <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse3">which is
                              the same as saying through ?</a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapse3" className="collapse" data-parent="#accordion">
                                                        <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                        Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                            <div className="row text-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter bg-primary rounded p-5 shadow">
                                                        <div className="counter-desc text-white">
                                                            <h5>Project</h5>
                                                            <span className="count-number display-4" data-to={234} data-speed={10000}>234</span>
                                                            <span className="display-4">k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-5">
                                                    <div className="counter bg-white rounded p-5 shadow">
                                                        <div className="counter-desc">
                                                            <h5>Member</h5>
                                                            <span className="count-number display-4 text-primary" data-to={455} data-speed={10000}>455</span>
                                                            <span className="display-4 text-primary">k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                                                    <div className="counter bg-white rounded p-5 shadow">
                                                        <div className="counter-desc">
                                                            <h5>Love Us</h5>
                                                            <span className="count-number display-4 text-primary" data-to={365} data-speed={10000}>365</span>
                                                            <span className="display-4 text-primary">k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-5">
                                                    <div className="counter bg-orange rounded p-5 shadow">
                                                        <div className="counter-desc text-white">
                                                            <h5>Happy Client</h5>
                                                            <span className="count-number display-4" data-to={528} data-speed={10000}>528</span>
                                                            <span className="display-4">k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*counter end*/}
                            {/*form start*/}
                            <section>
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-12 col-lg-6 col-xl-6 mb-8 mb-lg-0 order-lg-1">
                                            <div> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-exclamation ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">Professional It Services For Individual And Companies</h2>
                                                <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium,
                        totam rem aperiam.</p>
                                            </div>
                                            <div className="mt-5">
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="badge-primary-soft rounded p-1">
                                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                        <p className="mb-0 ml-3">Create For Designer</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="badge-primary-soft rounded p-1">
                                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                        <p className="mb-0 ml-3">Create For Developer</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="badge-primary-soft rounded p-1">
                                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                        <p className="mb-0 ml-3">Create For Freelancer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-5">
                                            <div className="shadow rounded p-5">
                                                <img className="img-fluid mb-8" src="./images/about/04.png" alt="Image" />
                                                <form className="row" id="contact-form" method="post" action="http://themeht.com/bootsland/html/php/contact.php">
                                                    <div className="messages" />
                                                    <div className="form-group col-sm-6">
                                                        <label className="text-muted" htmlFor="InputName1">First Name</label>
                                                        <input type="text" className="form-control input-1" id="InputName1" placeholder="First Name" required="required" data-error="Firstname is required." />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label className="text-muted" htmlFor="InputName2">Last Name</label>
                                                        <input type="text" className="form-control input-1" id="InputName2" placeholder="Last Name" required="required" data-error="Lastname is required." />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <label className="text-muted" htmlFor="InputEmail1">Email address</label>
                                                        <input type="email" className="form-control input-1" id="InputEmail1" placeholder="Enter email" required="required" data-error="Valid email is required." />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <label className="text-muted" htmlFor="InputPassword1">Password</label>
                                                        <input type="password" className="form-control input-1" id="InputPassword1" placeholder="Password" />
                                                    </div>
                                                    <div className="col-12 mt-5">
                                                        <button className="btn btn-primary">Download</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*form end*/}
                            {/*blog start*/}
                            <section>
                                <div className="container">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                            <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-bold ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-4">From Our Blog List Latest Feed</h2>
                                                <p className="lead mb-0">All types of businesses need access to development resources, so we give you the
                        option to decide how much you need to use.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* / .row */}
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                            {/* Blog Card */}
                                            <div className="card border-0 shadow">
                                                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3 z-index-1">15
                        <br />July</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-md-5">
                                                        <img src="./images/blog/01.png" className="img-fluid" alt="..." />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body"> <a className="d-inline-block text-muted mb-2" href="#">Sass</a>
                                                            <h2 className="h5 font-weight-medium">
                                                                Business Perfect Performance landing Page
                            </h2>
                                                            <p>Businesses need access to development resources serspiciatis.</p>
                                                            <a className="btn-link" href="blog-single.html">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Blog Card */}
                                        </div>
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                            {/* Blog Card */}
                                            <div className="card border-0 shadow">
                                                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3 z-index-1">15
                        <br />July</div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-md-5">
                                                        <img src="./images/blog/02.png" className="img-fluid" alt="..." />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body"> <a className="d-inline-block text-muted mb-2" href="#">Marketing</a>
                                                            <h2 className="h5 font-weight-medium">
                                                                The most powerfull template that make you.
                            </h2>
                                                            <p>Businesses need access to development resources serspiciatis.</p>
                                                            <a className="btn-link" href="blog-single.html">Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Blog Card */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*blog end*/}
                        </div>
                        {/*body content end*/}
                        {/*footer start*/}
                        <footer className="py-11 bg-primary position-relative" data-bg-img="./images/bg/03.png">
                            <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                                </svg>
                            </div>
                            <div className="container mt-11">
                                <div className="row">
                                    <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
                                        <div className="subscribe-form bg-warning-soft p-5 rounded">
                                            <h5 className="mb-4 text-white">Newsletter</h5>
                                            <h6 className="text-light">Subscribe Our Newsletter</h6>
                                            <form id="mc-form" className="group">
                                                <input type="email" defaultValue name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required style={{ height: '60px' }} />
                                                <input className="btn btn-outline-light btn-block mt-3 mb-2" type="submit" name="subscribe" defaultValue="Subscribe" />
                                            </form> <small className="text-light">Get started for 1 Month free trial No Purchace required.</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-7">
                                        <div className="row">
                                            <div className="col-12 col-sm-4 navbar-dark">
                                                <h5 className="mb-4 text-white">Pages</h5>
                                                <ul className="navbar-nav list-unstyled mb-0">
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="about-us-1.html">About</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="product-grid.html">Shop</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="faq.html">Faq</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="blog-card.html">Blogs</a>
                                                    </li>
                                                    <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                                <h5 className="mb-4 text-white">Service</h5>
                                                <ul className="navbar-nav list-unstyled mb-0">
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="#">Content Writing</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="#">Documentation</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="login.html">Account</a>
                                                    </li>
                                                    <li className="nav-item"><a className="nav-link" href="career.html">Careers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                                <h5 className="mb-4 text-white">Legal</h5>
                                                <ul className="navbar-nav list-unstyled mb-0">
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="terms-and-conditions.html">Term Of Service</a>
                                                    </li>
                                                    <li className="mb-3 nav-item"><a className="nav-link" href="privacy-policy.html">Privacy Policy</a>
                                                    </li>
                                                    <li className="nav-item"><a className="nav-link" href="#">Support</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-12 col-sm-6">
                                                <a className="footer-logo text-white h2 mb-0" href="index.html"> Lanyard<span className="font-weight-bold">UX</span>
                                                </a>
                                            </div>
                                            <div className="col-12 col-sm-6 mt-6 mt-sm-0">
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"><a className="text-light ic-2x" href="#"><i className="la la-facebook" /></a>
                                                    </li>
                                                    <li className="list-inline-item"><a className="text-light ic-2x" href="#"><i className="la la-dribbble" /></a>
                                                    </li>
                                                    <li className="list-inline-item"><a className="text-light ic-2x" href="#"><i className="la la-instagram" /></a>
                                                    </li>
                                                    <li className="list-inline-item"><a className="text-light ic-2x" href="#"><i className="la la-twitter" /></a>
                                                    </li>
                                                    <li className="list-inline-item"><a className="text-light ic-2x" href="#"><i className="la la-linkedin" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-white text-center mt-8">
                                    <div className="col">
                                        <hr className="mb-8" />Copyright <u><a className="text-white" href="#">Lanyard</a></u> | All Rights
                  Reserved</div>
                                </div>
                            </div>
                        </footer>
                        {/*footer end*/}
                    </div>
                    {/* page wrapper end */}
                    {/*back-to-top start*/}
                    <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-angle-up" /></a></div>
                    {/*back-to-top end*/}
                    {/* inject js start */}
                    {/* inject js end */}
                </div>
                {/* preloader end */}

            </div>
            {/* page wrapper end */}
            {/*back-to-top start*/}
            <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-angle-up" /></a></div>
            {/*back-to-top end*/}
            {/* inject js start */}
            {/* inject js end */}
        </div>
    )
}

export default Home
