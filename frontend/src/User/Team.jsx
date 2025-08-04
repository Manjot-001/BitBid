export default function Team(){
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
        Our Team
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
        <li className="breadcrumb-item active text-primary">Team</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Team Start */}
  <div className="container-fluid team py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Team</h4>
        <h1 className="display-4">Our Investa Company Dedicated Team Member</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="img/team-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Mark D. Brock</h4>
                <p className="text-muted mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="img/team-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Mark D. Brock</h4>
                <p className="text-muted mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="img/team-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Mark D. Brock</h4>
                <p className="text-muted mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="team-item rounded">
            <div className="team-img">
              <img
                src="img/team-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt="Image"
              />
              <div className="team-icon">
                <a
                  className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                  href=""
                >
                  <i className="fas fa-share-alt" />
                </a>
                <div className="team-icon-share">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-content bg-dark text-center rounded-bottom p-4">
              <div className="team-content-inner rounded-bottom">
                <h4 className="text-white">Mark D. Brock</h4>
                <p className="text-muted mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

        </>
    )
}