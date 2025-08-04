export default function Projects() {
  return (
    <>
      {/* Modal Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h4 className="modal-title mb-0" id="exampleModalLabel">Search Projects</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="Search by keyword, skill, or category" aria-describedby="search-icon-1" />
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
            Bid on Projects
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active text-primary">Projects</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Project Section Start */}
      <div className="container-fluid project pt-5">
        <div className="container pt-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
            <h4 className="text-primary">Open Projects</h4>
            <h1 className="display-4">Browse Projects & Start Bidding</h1>
          </div>

          <div className="project-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.1s">
              <div className="project-img">
                <img src="img/projects-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-code fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">Web Development</p>
                  <a href="#" className="h4">Build a React Admin Dashboard for Analytics</a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">Place Bid</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.3s">
              <div className="project-img">
                <img src="img/projects-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-mobile-alt fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">App Development</p>
                  <a href="#" className="h4">Create a Cross-Platform To-Do App with Firebase</a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">Place Bid</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item h-100 wow fadeInUp" data-wow-delay="0.5s">
              <div className="project-img">
                <img src="img/projects-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className="fas fa-database fa-4x text-primary" />
                  </div>
                  <p className="text-dark fs-5 mb-3">Data Analysis</p>
                  <a href="#" className="h4">Analyze Customer Behavior Using Python & SQL</a>
                  <div className="pt-4">
                    <a className="btn btn-light rounded-pill py-3 px-5" href="#">Place Bid</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Section End */}
    </>
  );
}
