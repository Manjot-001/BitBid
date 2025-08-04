import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import apiServices from "../APISERVICES/apiServices";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";



export default function Post() {
  const [title, setTitle] = useState("")
  const [technologyId, settechnologyId] = useState("")
  const [budget, setBudget] = useState("")
  const [deadline, setDeadline] = useState("")
  const [description, setDescription] = useState("")
  const [technologyData, setTechnology] = useState([])
  const [loader, setLoader] = useState(false)
  const [display, setDisplay] = useState("block")
  const nav = useNavigate()

  useEffect(() => {
    apiServices.getalltechnology()
      .then((res) => {
        setTechnology(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addData = (e) => {
    e.preventDefault()
    setLoader(true)
    setDisplay("none")

    let data = {
      title: title,
      technologyId: technologyId,
      budget: budget,
      deadline: deadline,
      clientId: sessionStorage.getItem("customerId"),
      description: description
    }
    apiServices.post(data)
      .then((res) => {
        toast.success(res.data.message)
        setTimeout(() => {
          nav("/managepost")
        }, 1500);
      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(() => {
      setLoader(false)
      setDisplay("block")
    }, 1500);

  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Post
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >

            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Add Post</li>
          </ol>
        </div>
      </div>
      {loader ? <Loader /> : null}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8 wow  mx-auto fadeInRigh........t" data-wow-delay="0.3s">
              <div className="bg-primary p-5 m-5 mb-0">
                <form onSubmit={addData}>
                  <div className="row g-3">
                    <div className="col-lg-12 mx-auto col-xl-12 ">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Your Title"
                          value={title}
                          onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <label htmlFor="title">Title</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                      <div className="form-floating" >
                        <select className="form-control" name="" id="" value={technologyId} onChange={(e) => settechnologyId(e.target.value)}>
                          <option>Select Technology</option>
                          {
                            technologyData?.map((el) => (
                              <>
                                <option value={el._id}>{el.name}</option>
                              </>
                            ))
                          }
                        </select>
                        <label htmlFor="technologyId">TechnologyId</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="budget"
                          placeholder="Budget"
                          value={budget}
                          onChange={(e) => { setBudget(e.target.value) }}
                        />
                        <label htmlFor="budget">Budget</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="deadline"
                          placeholder="Deadline"
                          value={deadline}
                          onChange={(e) => { setDeadline(e.target.value) }}
                        />
                        <label htmlFor="Deadline">Deadline</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <label htmlFor="description">Description</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-secondary w-100 py-3">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}