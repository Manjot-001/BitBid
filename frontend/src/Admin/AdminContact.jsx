export default function AdminContact(){
    return(
        <>
        <>
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h4 className="modal-title mb-0" id="exampleModalLabel">
            Search by keyword
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="bg-breadcrumb-single" />
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Contact Us
      </h4>
      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-primary">Contact</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-fluid contact bg-light py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="contact-item">
            <div className="pb-5">
              <h4 className="text-primary">Contact Us</h4>
              <h1 className="display-4 mb-4">Get In Touch With Us</h1>
              <p className="mb-0">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a
                  className="text-primary fw-bold"
                  href="https://htmlcodex.com/contact-form"
                >
                  Download Now
                </a>
                .
              </p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary btn-lg-square rounded-circle p-4">
                <i className="fa fa-home text-white" />
              </div>
              <div className="ms-4">
                <h4>Addresses</h4>
                <p className="mb-0">123 ranking Street, New York, USA</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary btn-lg-square rounded-circle p-2">
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ms-4">
                <h4>Mobile</h4>
                <p className="mb-0">+012 345 67890</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary btn-lg-square rounded-circle p-2">
                <i className="fa fa-envelope-open text-white" />
              </div>
              <div className="ms-4">
                <h4>Email</h4>
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <form>
            <div className="row g-3">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone">Your Phone</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="project"
                    placeholder="Project"
                  />
                  <label htmlFor="project">Your Project</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 160 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded h-100">
            <iframe
              className="rounded-top w-100"
              style={{ height: 500, marginBottom: "-6px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="d-flex align-items-center justify-content-center bg-primary rounded-bottom p-4">
              <div className="d-flex">
                <a
                  className="btn btn-dark btn-lg-square rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-lg-square rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-dark btn-lg-square rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-dark btn-lg-square rounded-circle mx-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

        </>
    )
}