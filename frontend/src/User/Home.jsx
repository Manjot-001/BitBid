export default function Home() {
  return (
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
            <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
              Home
            </h4>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>

            </ol>
          </div>
        </div>
        {/* Header End */}
        {/* Carousel Start */}
        <div className="header-carousel owl-carousel">
          <div className="header-carousel-item">
            <div className="header-carousel-item-img-1">
              <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
            </div>
            <div className="carousel-caption">
              <div className="carousel-caption-inner text-start p-3">
                <h1
                  className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated"
                  data-animation="fadeInUp"
                  data-delay="1.3s"
                  style={{ animationDelay: "1.3s" }}
                >
                  The most prestigious Investments company in worldwide.
                </h1>
                <p
                  className="mb-5 fs-5 fadeInUp animate__animated"
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                  style={{ animationDelay: "1.5s" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated"
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                  style={{ animationDelay: "1.7s" }}
                  href="#"
                >
                  Apply Now
                </a>
                <a
                  className="btn btn-dark rounded-pill py-3 px-5 mb-4 fadeInUp animate__animated"
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                  style={{ animationDelay: "1.7s" }}
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="header-carousel-item mx-auto">
            <div className="header-carousel-item-img-2">
              <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
            </div>
            <div className="carousel-caption">
              <div className="carousel-caption-inner text-center p-3">
                <h1 className="display-1 text-capitalize text-white mb-4">
                  The most prestigious Investments company in worldwide.
                </h1>
                <p className="mb-5 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                  href="#"
                >
                  Apply Now
                </a>
                <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="header-carousel-item">
            <div className="header-carousel-item-img-3">
              <img src="img/carousel-3.jpg" className="img-fluid w-100" alt="Image" />
            </div>
            <div className="carousel-caption">
              <div className="carousel-caption-inner text-end p-3">
                <h1 className="display-1 text-capitalize text-white mb-4">
                  The most prestigious Investments company in worldwide.
                </h1>
                <p className="mb-5 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s,
                </p>
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                  href="#"
                >
                  Apply Now
                </a>
                <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
        {/* About Start */}
        <div className="container-fluid about bg-light py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="about-img">
                  <img
                    src="img/about-3.png"
                    className="img-fluid w-100 rounded-top bg-white"
                    alt="Image"
                  />
                  <img
                    src="img/about-2.jpg"
                    className="img-fluid w-100 rounded-bottom"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
                <h4 className="text-primary">About BitBid</h4>
                <h1 className="display-5 mb-4">
                  A Seamless Bidding Platform Connecting Clients & Developers
                </h1>
                <p className="text ps-4 mb-4">
                  BitBid is an innovative platform designed to connect clients with talented developers through a fair bidding process. Clients post their project requirements, and developers bid on those projects. Clients can then choose a developer based on their needs, budget, and preferences. Meanwhile, admins oversee the platform to ensure transparency, efficiency, and quality in all interactions.
                </p>
                <div className="row g-4 justify-content-between mb-5">
                  <div className="col-lg-6 col-xl-5">
                    <p className="text-dark">
                      <i className="fas fa-check-circle text-primary me-1" /> Post & Manage Projects
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fas fa-check-circle text-primary me-1" /> Transparent Bidding System
                    </p>
                  </div>
                  <div className="col-lg-6 col-xl-7">
                    <p className="text-dark">
                      <i className="fas fa-check-circle text-primary me-1" /> Verified Developers
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fas fa-check-circle text-primary me-1" /> Admin Monitoring & Support
                    </p>
                  </div>
                </div>
                <div className="row g-4 justify-content-between mb-5">
                  <div className="col-xl-5">
                    <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                      Learn More
                    </a>
                  </div>
                  <div className="col-xl-7 mb-5">
                    <div className="about-customer d-flex position-relative">
                      <img
                        src="img/customer-img-1.jpg"
                        className="img-fluid btn-xl-square position-absolute"
                        style={{ left: 0, top: 0 }}
                        alt="Image"
                      />
                      <img
                        src="img/customer-img-2.jpg"
                        className="img-fluid btn-xl-square position-absolute"
                        style={{ left: 45, top: 0 }}
                        alt="Image"
                      />
                      <img
                        src="img/customer-img-3.jpg"
                        className="img-fluid btn-xl-square position-absolute"
                        style={{ left: 90, top: 0 }}
                        alt="Image"
                      />
                      <img
                        src="img/customer-img-1.jpg"
                        className="img-fluid btn-xl-square position-absolute"
                        style={{ left: 135, top: 0 }}
                        alt="Image"
                      />
                      <div className="position-absolute text-dark" style={{ left: 220, top: 10 }}>
                        <p className="mb-0">Trusted by 5M+</p>
                        <p className="mb-0">Global Users</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center">
                  <div className="col-sm-4">
                    <div className="bg-primary rounded p-4">
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="counter-value fs-1 fw-bold text-dark">32</span>
                        <h4 className="text-dark fs-1 mb-0" style={{ fontWeight: 600, fontSize: 25 }}>k+</h4>
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-center">
                        <p className="text-white mb-0">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="bg-dark rounded p-4">
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="counter-value fs-1 fw-bold text-white">21</span>
                        <h4 className="text-white fs-1 mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-center">
                        <p className="mb-0">Years of Industry Insight</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="bg-primary rounded p-4">
                      <div className="d-flex align-items-center justify-content-center">
                        <span className="counter-value fs-1 fw-bold text-dark">97</span>
                        <h4 className="text-dark fs-1 mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-center">
                        <p className="text-white mb-0">Skilled Team Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Services Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Services</h4>
              <h1 className="display-4">
                Empowering Transparent & Competitive Bidding Experiences
              </h1>
            </div>
            <div className="row g-4 justify-content-center text-center">
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="img/service-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a href="#" className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-gavel fa-2x me-2" /> Real-Time Bid Management
                      </a>
                      <p className="mb-4">
                        Manage, track, and respond to bids in real time. Our system enables seamless communication between buyers and sellers with full transparency.
                      </p>
                      <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="img/service-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a href="#" className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-lightbulb fa-2x me-2" /> Smart Bidding Insights
                      </a>
                      <p className="mb-4">
                        Get intelligent analytics and insights to help you bid smarter. We provide historical trends, competitor tracking, and recommendation tools.
                      </p>
                      <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="img/service-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a href="#" className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-lock fa-2x me-2" /> Secure Payment Integration
                      </a>
                      <p className="mb-4">
                        Our platform supports secure transactions between users, with built-in escrow options to ensure mutual trust and safe bidding.
                      </p>
                      <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="img/service-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a href="#" className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-users fa-2x me-2" /> Custom Bid Solutions
                      </a>
                      <p className="mb-4">
                        Whether you're an individual freelancer, a government body, or a private enterprise, we tailor bidding workflows to your exact needs.
                      </p>
                      <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                  href="#"
                >
                  Explore More Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services End */}



       
      </>

    </>
  )
}