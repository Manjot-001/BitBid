import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"

export default function UpdateTechnology() {
  const [name, setName] = useState("")
  const [technologyImage, settechnologyImage] = useState({})
  const [imageName, setImageName] = useState("")
  const [description, setDescription] = useState("")
  const [prevImage, setPrevImage] = useState([])
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  const [loader, setLoader] = useState(false)
  const [display, setDisplay] = useState("block")

  useEffect(() => {
    let data = {
      _id: id
    }
    apiServices.getsingletechnology(data)
      .then((res) => {
        setName(res.data.data.name)
        setPrevImage(res.data.data.technologyImage)
        setDescription(res.data.data.description)
      })
  }, [])


  const imageHandle = (e) => {
    setImageName(e.target.value)
    settechnologyImage(e.target.files[0])
  }
  console.log(sessionStorage.getItem("token"))

  const updateData = (e) => {
    e.preventDefault()
    setLoader(true)
    setDisplay("none")
    let token = sessionStorage.getItem("token")
    let data = new FormData()
    data.append("name", name)
    if (!!imageName) {
      data.append("technologyImage", technologyImage)
    }
    data.append("description", description)
    data.append("_id", id)
    apiServices.updateTechnology(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setTimeout(() => {
            nav("/admin/managetechnology")
          }, 1500);
        }
        else {
          toast.error(res.data.message)
        }

      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(() => {
      setLoader(false)
      setDisplay("block")
    }, 1500)

  }
  return (
    <>
      <>
        <div className="container-fluid bg-breadcrumb">
          <div className="bg-breadcrumb-single" />
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
              Add Technology
            </h4>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Update Technology</li>
            </ol>
          </div>
        </div>
        {/* Contact Start */}
        {loader ? <Loader /> : null}
        <div className="container-fluid py-5" style={{ display: display }}>
          <div className="container py-5">



            <div
              className="row justify-content-center position-relative"

            >
              <div className="col-lg-8">
                <div className="bg-primary p-5 m-5 mb-0">
                  <form onSubmit={updateData}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-12">
                        <label> Technology Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          placeholder="Name"
                          style={{ height: 55 }}
                          value={name}
                          onChange={(e) => { setName(e.target.value) }}
                        />
                      </div>
                      <div className="col-12 col-sm-12">
                        <img src={IMAGE_URL + prevImage} style={{ height: "100px", width: "200px" }} alt="" />
                      </div>
                      <div className="col-12 col-sm-12">
                        <input
                          type="file"
                          className="form-control bg-light border-0"

                          style={{ height: 55 }}
                          onChange={imageHandle}
                        />
                      </div>


                      <div className="col-12">
                        <textarea
                          className="form-control bg-light border-0"
                          rows={5}
                          placeholder="Description"
                          defaultValue={""}
                          value={description}
                          onChange={(e) => { setDescription(e.target.value) }}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-secondary w-100 py-3"
                          type="submit"
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>

    </>
  )
}