import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import apiServices from "../APISERVICES/apiServices";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";



export default function AddBid() {
  const [bidAmount, setBidAmount] = useState("")
  const [description, setDescription] = useState("")
  const [deadlineEstimate, setDeadlineEstimate] = useState("")
  const [clientId, setClientId] = useState("")
  const params = useParams()
  const id = params.id
  const nav = useNavigate()
  const [loader, setLoader] = useState(false)
  const [display, setDisplay] = useState("block")

  useEffect(() => {
    let data = {
      _id: id
    }
    console.log(data)
    apiServices.getsinglepost(data)
      .then((res) => {
        setClientId(res.data.data.clientId)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(clientId)
  console.log(sessionStorage.getItem("developerId"))

  const addData = (e) => {
    e.preventDefault()
    setLoader(true)
    setDisplay("none")

    let data = {
      clientId: clientId,
      postId: id,
      developerId: sessionStorage.getItem("developerId"),
      bidAmount: bidAmount,
      description: description,
      deadlineEstimate: deadlineEstimate,

    }
    apiServices.addbid(data)
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message)
          setTimeout(() => {
            nav("/developer/trackbidstatus")
          }, 1500);
        }
        else {
          toast.error(res.data.message)
          console.log(res.data.error)
          console.log(res.data.errors)

        }
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
            Our Services
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
            <li className="breadcrumb-item active text-primary">Add Bid</li>
          </ol>
        </div>
      </div>
      {loader?<Loader />:null}
      <div className="container-fluid contact bg-light py-5" style={{display:display}}>
        <div className="row">
          <div className="col-lg-6 wow fadeInRight mx-auto" data-wow-delay="0.3s">
            <form onSubmit={addData}>
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Post Title"
                      value={bidAmount}
                      onChange={(e) => { setBidAmount(e.target.value) }}
                    />
                    <label htmlFor="">Bid Amount</label>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="form-floating" style={{ marginri: "40px" }}>
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder="Deadline Estimate"
                      value={deadlineEstimate}
                      onChange={(e) => { setDeadlineEstimate(e.target.value) }}
                    />
                    <label htmlFor="">Deadline Estimate</label>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="form-floating">
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      style={{ height: 160 }}
                      placeholder="Description"
                      value={description}
                      onChange={(e) => { setDescription(e.target.value) }}
                    />
                    <label htmlFor="">Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100 py-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>``
          </div>
        </div>
      </div>
    </>
  )
}