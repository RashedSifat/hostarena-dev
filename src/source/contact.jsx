import React, { PureComponent } from "react";

class Contact extends PureComponent {
  state = {};
  render() {
    return (
      <>
        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title">Contact Us</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <a href="index.html">Hostarena</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Contact
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    {" "}
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Phone</h5>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>{" "}
                    <a href="tel:+44 0345 450 2310" className="text-primary">
                      +44 0345 450 2310
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    {" "}
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">
                      Start working with Landrick that can provide everything
                    </p>{" "}
                    <a
                      href="mailto:sales@hostarena.org"
                      className="text-primary"
                    >
                      sales@hostarena.org
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    {" "}
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Location</h5>
                    <p className="text-muted">
                      20-22 Wenlock Road, London
                      <br />
                      N1 7GU, UNITED KINGDOM
                    </p>{" "}
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      data-type="iframe"
                      className="video-play-icon text-primary lightbox"
                    >
                      View on Google map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                <div className="card shadow rounded border-0">
                  <div className="card-body py-5">
                    <h4 className="card-title">Get In Touch !</h4>
                    <div className="custom-form mt-3">
                      <form
                        method="post"
                        name="myForm"
                        onsubmit="return validateForm()"
                      >
                        <p id="error-msg" className="mb-0"></p>
                        <div id="simple-msg"></div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Your Name <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                {" "}
                                <i
                                  data-feather="user"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  name="name"
                                  id="name"
                                  type="text"
                                  className="form-control ps-5"
                                  placeholder="Name :"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                {" "}
                                <i
                                  data-feather="mail"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  name="email"
                                  id="email"
                                  type="email"
                                  className="form-control ps-5"
                                  placeholder="Email :"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Subject</label>
                              <div className="form-icon position-relative">
                                {" "}
                                <i
                                  data-feather="book"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  name="subject"
                                  id="subject"
                                  className="form-control ps-5"
                                  placeholder="subject :"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Comments <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                {" "}
                                <i
                                  data-feather="message-circle"
                                  className="fea icon-sm icons clearfix"
                                ></i>
                                <textarea
                                  name="comments"
                                  id="comments"
                                  rows="4"
                                  className="form-control ps-5"
                                  placeholder="Message :"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                id="submit"
                                name="send"
                                className="btn btn-primary"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 order-1 order-md-2">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <img
                      src="images/contact.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-100 mt-60">
            <div className="row">
              <div className="col-12 p-0">
                <div className="card map border-0">
                  <div className="card-body p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
