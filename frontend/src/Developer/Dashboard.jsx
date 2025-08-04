import { useEffect, useState } from "react"
import apiServices from "../APISERVICES/apiServices"

export default function DeveloperDashboard() {
const [bidData, setbidData] = useState([])
const [technologies, setTechnolgyData] = useState([])




useEffect(() =>{
  let data = {
    developerId:sessionStorage.getItem("developerId")
  }
  apiServices.getallbid(data)
    .then((res) =>{
      setbidData(res.data.data.length)
    })
  
},[])

useEffect(() =>{
  apiServices.getalltechnology()
  .then((res) =>{
    setTechnolgyData(res.data.data.length)
  })
},[])


  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Developer Dashboard
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <a href="index.html">Pages</a>
            </li>

            <li className="breadcrumb-item active text-primary">Dashboard</li>
          </ol>
        </div>
      </div>
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
      {/* Blog Start */}
      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Dashboard</h4>
          </div>
          <div className="row g-4 justify-content-center" >
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >

                <div className="project-img">
                  <img
                    src="img/bidding18.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}
                  />
                  <div className="blog-plus-icon" >
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
                  <h3 className="h4">
                    Total Bids : {bidData}

                  </h3>
                </div>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{ backgroundImage: "url(img/bg.png)" }}
              >

                <div className="project-img">
                  <img
                    src="img/technologies.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/developer.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="h4">
                    Total Technologies :{technologies}

                  </h3>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Blog End */}




    </>
  )
}