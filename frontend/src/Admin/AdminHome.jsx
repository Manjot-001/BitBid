import { useEffect, useState } from "react"
import apiServices from "../APISERVICES/apiServices"

export default function AdminHome() {
  const [technologyData, setTechnolgyData] = useState([])
  const [developerData, setDeveloperData] = useState([])
  const [customerData, setCustomerData] = useState([])
  const [postsData, setpostData] = useState([])
  const [bidData ,setbidData] = useState([])
  const [queryData, setqueryData] = useState([])

  useEffect(() => {
    apiServices.getalltechnology()
      .then((res) => {
        setTechnolgyData(res.data.data.length)
      })
  }, [])

  useEffect(() => {
    apiServices.getalldeveloperpost()
      .then((res) => {
        setDeveloperData(res.data.data.length)
      })
  }, [])

  useEffect(() => {
    apiServices.getallcustomerData()
    .then((res) =>{
      setCustomerData(res.data.data.length)
    })
  },[])
    
  useEffect(() =>{
    apiServices.getallpost()
    .then((res) =>{
      setpostData(res.data.data.length)
    })
  },[])

  useEffect(() =>{
    apiServices.getallbid()
    .then((res)=>{
      setbidData(res.data.data.length)
    })
  },[])

  useEffect(() =>{
    apiServices.getallManageQuery()
    .then((res) =>{
      setqueryData(res.data.data.length)
    })
  },[])
   

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
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Admin Dashboard
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
            <li className="breadcrumb-item active text-primary">Dashboard</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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
                    src="img/technologies.jpg"
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
                    Total Technologies : {technologyData}
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
                    src="img/developer.jpg"
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
                    Total Developers: {developerData}
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
                    src="img/customer.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/customer.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="h4">
                    Total Customers : {customerData}
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
                    src="img/posts.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/posts.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="h4">
                    Total Posts : {postsData}
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
                    src="img/bidding18.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}

                  />
                  <div className="blog-plus-icon">

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
                    src="img/query.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    style={{ height: "350px" }}
                  />
                  <div className="blog-plus-icon">
                    <a
                      href="img/query.jpg"
                      data-lightbox="blog-1"
                      className="btn btn-primary btn-md-square rounded-pill"
                    >
                      <i className="fas fa-plus fa-1x" />
                    </a>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="h4">
                    Total Queries :{queryData}
                  </h3>
                </div>
                
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