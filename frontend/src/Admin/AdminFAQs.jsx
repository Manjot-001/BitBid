export default function AdminFAQs(){
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
        Our FAQs
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
        <li className="breadcrumb-item active text-primary">FAQs</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* FAQs Start */}
  <div className="container-fluid faq py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="pb-5">
            <h4 className="text-primary">FAQs</h4>
            <h1 className="display-4">Get the Answers to Common Questions</h1>
          </div>
          <div className="accordion bg-light rounded p-4" id="accordionExample">
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne"
                >
                  What Does a Financial Advisor Do?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What industries do you specialize in?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can you guarantee for growth?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What makes your business plans so special?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    nemo impedit, sapiente quis illo quia nulla atque maxime
                    fuga minima ipsa quae cum consequatur, sit, delectus
                    exercitationem odit officiis maiores! Neque, quidem corrupti
                    modi architecto eos saepe incidunt dignissimos rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div className="faq-img RotateMoveRight rounded">
            <img
              src="img/faq-img.jpg"
              className="img-fluid rounded w-100"
              alt="Image"
            />
            <a
              className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQs End */}
</>

        </>
    )
}