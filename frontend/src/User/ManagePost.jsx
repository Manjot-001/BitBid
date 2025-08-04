import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function ManagePost() {

  const [ManagePostData, setManagePostData] = useState([])
  const fetchManagePost = () => {
    let data = {
      clientId: sessionStorage.getItem("customerId")
    }
    apiServices.getallpost(data)
      .then((res) => {
        setManagePostData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchManagePost()
  }, [])
  console.log(ManagePostData)

  const deleteData = (id) => {
    let data = {
      _id: id
    }
    apiServices.deletePostData(data)
      .then((res) => {
        toast.success(res.data.message)
        fetchManagePost()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <>
      
        <div className="container-fluid bg-breadcrumb">
          <div className="bg-breadcrumb-single" />
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              Manage post
            </h4>
            <ol
              className="breadcrumb justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Manage Post</li>
            </ol>
          </div>
        </div>
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">



            <div
              className="row justify-content-center position-relative"

            >
              <div className="col-lg-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sr No</th>
                      <th scope="col">Title</th>
                      <th scope="col">TechnologyId</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ManagePostData?.map((el, ind) => (
                        <>
                          <tr>
                            <th scope="row">{ind + 1}</th>
                            <td> {el.title}</td>
                            <td>
                              {el.technologyId?.name}
                            </td>
                            <td>
                              {el.budget}
                            </td>
                            <td>
                              {el.deadline}
                            </td>
                            <td>
                              {el.description}
                            </td>
                            <td>
                              <div className="d-flex">
                                <button className="btn btn-danger " onClick={() => deleteData(el._id)}> Delete </button>
                                <Link to={"/updatepost/" + el._id}><button className="btn btn-primary ms-3">Update</button></Link>

                              </div>
                            </td>
                          </tr>
                        </>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

    </>
  )
}