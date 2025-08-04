import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


export default function ManageTechnology() {

  const [TechnologyData, setTechnologyData] = useState([])
  const fetchTechnology = () => {

    apiServices.getalltechnology()
      .then((res) => {

        setTechnologyData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchTechnology()
  }, [])

  const deleteData = (id) => {
    let data = {
      _id: id
    }
    apiServices.deleteTechnology(data)
      .then((res) => {
        toast.success(res.data.message)
        fetchTechnology()
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
            <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
              Manage Technology
            </h4>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
              
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Manage Technology</li>
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
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Technology Name</th>
                      <th scope="col">TechnologyImage</th>
                      <th scope="col">description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      TechnologyData?.map((el, ind) => (
                        <>
                          <tr>
                            <th scope="row">{ind + 1}</th>
                            <td> {el.name}</td>
                            <td> <img src={IMAGE_URL + el.technologyImage} style={{ height: "100px", width: "150px" }} />

                            </td>
                            <td>{el.description} </td>
                            <td>
                              <button className="btn btn-danger" onClick={() => deleteData(el._id)}> Delete </button>
                              <Link to={"/admin/updatetechnology/" + el._id}><button className="btn btn-primary ms-3">Update</button></Link>
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