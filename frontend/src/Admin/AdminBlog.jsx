export default function AdminBlog(){
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
        Our Blogs
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
        <li className="breadcrumb-item active text-primary">Blog</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Blog Start */}
  <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Blogs</h4>
        <h1 className="display-4">Latest Articles &amp; News from the Blogs</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div
            className="blog-item bg-light rounded p-4"
            style={{ backgroundImage: "url(img/bg.png)" }}
          >
            <div className="mb-4">
              <h4 className="text-primary mb-2">Investment</h4>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="text-dark fw-bold">On</span> Mar 14, 2024
                </p>
                <p className="mb-0">
                  <span className="text-dark fw-bold">By</span> Mark D. Brock
                </p>
              </div>
            </div>
            <div className="project-img">
              <img
                src="img/blog-1.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
              <div className="blog-plus-icon">
                <a
                  href="img/blog-1.jpg"
                  data-lightbox="blog-1"
                  className="btn btn-primary btn-md-square rounded-pill"
                >
                  <i className="fas fa-plus fa-1x" />
                </a>
              </div>
            </div>
            <div className="my-4">
              <a href="#" className="h4">
                Revisiting Your Investment &amp; Distribution Goals
              </a>
            </div>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
              Explore More
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div
            className="blog-item bg-light rounded p-4"
            style={{ backgroundImage: "url(img/bg.png)" }}
          >
            <div className="mb-4">
              <h4 className="text-primary mb-2">Business</h4>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="text-dark fw-bold">On</span> Mar 14, 2024
                </p>
                <p className="mb-0">
                  <span className="text-dark fw-bold">By</span> Mark D. Brock
                </p>
              </div>
            </div>
            <div className="project-img">
              <img
                src="img/blog-2.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
              <div className="blog-plus-icon">
                <a
                  href="img/blog-2.jpg"
                  data-lightbox="blog-2"
                  className="btn btn-primary btn-md-square rounded-pill"
                >
                  <i className="fas fa-plus fa-1x" />
                </a>
              </div>
            </div>
            <div className="my-4">
              <a href="#" className="h4">
                Dimensional Fund Advisors Interview with Director
              </a>
            </div>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
              Explore More
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div
            className="blog-item bg-light rounded p-4"
            style={{ backgroundImage: "url(img/bg.png)" }}
          >
            <div className="mb-4">
              <h4 className="text-primary mb-2">Consulting</h4>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <span className="text-dark fw-bold">On</span> Mar 14, 2024
                </p>
                <p className="mb-0">
                  <span className="text-dark fw-bold">By</span> Mark D. Brock
                </p>
              </div>
            </div>
            <div className="project-img">
              <img
                src="img/blog-3.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
              <div className="blog-plus-icon">
                <a
                  href="img/blog-3.jpg"
                  data-lightbox="blog-3"
                  className="btn btn-primary btn-md-square rounded-pill"
                >
                  <i className="fas fa-plus fa-1x" />
                </a>
              </div>
            </div>
            <div className="my-4">
              <a href="#" className="h4">
                Interested in Giving Back this year? Here are some tips
              </a>
            </div>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</>

        </>
    )
}