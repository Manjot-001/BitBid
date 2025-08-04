import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"

export default function DeveloperPost() {

  const [DeveloperPostData, setDeveloperPostData] = useState([])
 

  const fetchDeveloperPostData = () => {

    apiServices.getallpost()
      .then((res) => {

        setDeveloperPostData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchDeveloperPostData()
  }, [])


  return (
    <>
      <>
       <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Posts
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Posts</li>
          </ol>
        </div>
      </div>
        {/* Contact Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">



            <div
              className="row "
            >
              {
                DeveloperPostData?.map((el, ind) => (
                  <>
                    <div
                      className="col-md-6 col-lg-4 mt-4 col-xl-3 wow fadeInUp"
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
                        <div className="service-content  p-4">
                          <div className="service-content-inner">
                            <a href="#" className="h4 mb-4 d-inline-flex text-start">
                              <img src="/img/medal.png" style={{ height: "40px", width: "40px" }} alt="" />
                              {el.title}
                            </a>
                            <div >
                              <img src="/img/virtual-reality.png" style={{ height: "40px", width: "40px", marginBottom: "9px" }} alt="" />
                              {el.technologyId?.name}
                            </div>

                            <div >
                              <img src="/img/budget.png" style={{ height: "40px", width: "40px", marginBottom: "9px" }} alt="" />
                              {el.budget}
                            </div>

                             <div>
                              <img src="/img/calendar.png" style={{ height: "40px", width: "40px", marginBottom: "9px" }} alt="" />
                              {el.deadline}
                            </div>

                            <div>
                              <img src="/img/description (1).png" style={{ height: "40px", width: "40px", marginBottom: "9px" }} alt="" />
                              {el.description}
                            </div>
                            
                         <div className="ms-3">
                           <Link to={"/developer/addbid/"+el._id}>
                           <button className="btn btn-outline-primary ms-5" >Bid</button>
                          </Link>
                         </div>

            
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

    </>
  )
}