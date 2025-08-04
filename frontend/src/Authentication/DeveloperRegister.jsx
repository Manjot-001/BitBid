import { useState } from "react"
import { toast } from "react-toastify";
import apiServices from "../APISERVICES/apiServices";



export default function DeveloperRegister() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [developer, setDeveloperImage] = useState({})
    const [imageName, setImageName] = useState("")
    const [qualification, setQualification] = useState("")
    const [experience, setExperience] = useState("")
    const [certification, setCertification] = useState("")


    const handleImage = (e) => {
        setImageName(e.target.value)
        setDeveloperImage(e.target.files[0])
    }

    const addData = (e) => {
        e.preventDefault()
        let token = sessionStorage.getItem("token")
        let data = new FormData()
        data.append("name", name)
        data.append("email", email)
        data.append("password", password)
        data.append("contact", contact)
        data.append("address", address)
        data.append("developerImage", developer)
        data.append("qualification", qualification)
        data.append("experience", experience)
        data.append("certification", certification)


        apiServices.DeveloperRegister(data)
            .then((res) => {
                toast.success(res.data.message)
            })
            .catch((err) => {
                console.log(err)
            })


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
                        Developer Register
                    </h4>
                    <ol
                        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >

                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Developer Register</li>
                    </ol>
                </div>
            </div>
            <div className="container-fluid contact bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8 wow  mx-auto fadeInRight" data-wow-delay="0.3s">
                            <div className="bg-primary p-5 m-5 mb-0">
                                <form onSubmit={addData}>
                                    <div className="row g-3">
                                        <div className="col-lg-12 mx-auto col-xl-12 ">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => { setPassword(e.target.value) }}
                                                />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="contact"
                                                    placeholder="Contact"
                                                    value={contact}
                                                    onChange={(e) => { setContact(e.target.value) }}
                                                />
                                                <label htmlFor="contact">Contact</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="qualification"
                                                    placeholder="Qualification"
                                                    value={qualification}
                                                    onChange={(e) => { setQualification(e.target.value) }}
                                                />
                                                <label htmlFor="qualification">Qualification</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="experience"
                                                    placeholder="Experience"
                                                    value={experience}
                                                    onChange={(e) => { setExperience(e.target.value) }}
                                                />
                                                <label htmlFor="experience">Experience</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="certification"
                                                    placeholder="Certification"
                                                    value={certification}
                                                    onChange={(e) => { setCertification(e.target.value) }}
                                                />
                                                <label htmlFor="certification">Certtification</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="address"
                                                    style={{ height: 160 }}
                                                    defaultValue={""}
                                                    value={address}
                                                    onChange={(e) => { setAddress(e.target.value) }}
                                                />
                                                <label htmlFor="address">Address</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="developer"
                                                    placeholder="Developer"
                                                    onChange={handleImage}
                                                />
                                                <label htmlFor="developer">Developer Image</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3">
                                                Register
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