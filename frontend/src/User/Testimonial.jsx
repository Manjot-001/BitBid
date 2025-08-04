export default function Testimonial(){
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
        Testimonial
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
        <li className="breadcrumb-item active text-primary">Testimonial</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Testimonial Start */}
  <div className="container-fluid testimonial bg-light py-5">
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="h-100 rounded">
            <h4 className="text-primary">Our Feedbacks</h4>
            <h1 className="display-4 mb-4">Clients are Talking</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              atque soluta unde itaque. Consequatur quam odit blanditiis harum
              veritatis porro.
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Read All Reviews <i className="fas fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
        <div className="col-xl-8">
          <div
            className="testimonial-carousel owl-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="img/testimonial-1.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="img/testimonial-2.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial-item bg-white rounded p-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="d-flex">
                <div>
                  <i className="fas fa-quote-left fa-3x text-dark me-3" />
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam eos impedit eveniet dolorem culpa ullam incidunt vero
                  quo recusandae nemo? Molestiae doloribus iure,
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="my-auto text-end">
                  <h5>Person Name</h5>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="bg-white rounded-circle ms-3">
                  <img
                    src="img/testimonial-3.jpg"
                    className="rounded-circle p-2"
                    style={{
                      width: 80,
                      height: 80,
                      border: "1px solid",
                      borderColor: "var(--bs-primary)"
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

        </>
    )
}