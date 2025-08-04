import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import apiServices from "../APISERVICES/apiServices";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";



export default function UpdatePost() {
    const [title, setTitle] = useState("")
    const [technologyId, settechnologyId] = useState("")
    const [budget, setBudget] = useState("")
    const [deadline, setDeadline] = useState("")
    const [description, setDescription] = useState("")
    const [technologyData, setTechnology] = useState([])
    const params = useParams()
    const id = params.id
    const nav = useNavigate()
    const [loader,setLoader] = useState(false)
    const [display,setDisplay] = useState("block")


    useEffect(() => {
        apiServices.getalltechnology()
            .then((res) => {
                setTechnology(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        let data = {
            _id: id
        }
        apiServices.getsinglepost(data)
            .then((res) => {
                setTitle(res.data.data.title)
                settechnologyId(res.data.data.technologyId)
                setBudget(res.data.data.budget)
                setDeadline(res.data.data.deadline)
                setDescription(res.data.data.description)
                setTechnology(res.data.data.technologyData)

            })

    }, [])

    const updateData = (e) => {
        e.preventDefault()
        setLoader(true)
        setDisplay("none")

        let data = {
            title: title,
            technologyId: technologyId,
            budget: budget,
            deadline: deadline,
            description: description,
            _id: id
        }
        apiServices.updatePost(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setTimeout(() => {
                        nav("/managepost")
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
                        <li className="breadcrumb-item active text-primary">Update Post</li>
                    </ol>
                </div>
            </div>
            {loader?<Loader />:null}
            <div className="container-fluid contact bg-light py-5" style={{display:display}}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 wow  mx-auto fadeInRigh........t" data-wow-delay="0.3s">
                            <form onSubmit={updateData}>
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
                                        <button className="btn btn-primary w-100 py-3">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}