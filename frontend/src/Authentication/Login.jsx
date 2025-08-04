import { useState } from "react"
import apiServices from "../APISERVICES/apiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }
        apiServices.Login(data)
            .then((res) => {
                if (res.data.success) {

                    sessionStorage.setItem("token", res.data.tokenData);

                    sessionStorage.setItem("name", res.data.data.name);
                    sessionStorage.setItem("userId", res.data.data._id);

                    sessionStorage.setItem("userType", res.data.data.userType);

                    if (res.data.data.userType === 1) {
                        toast.success(res.data.message);
                        setTimeout(() => {

                            nav("/admin");
                        }, 2000);
                    } else if (res.data.data.userType === 2) {
                        if (res.data.data.status === "Active") {
                            sessionStorage.setItem("developerId", res.data.data.developerId);

                            toast.success(res.data.message);
                            setTimeout(() => {

                                nav("/developer");
                            }, 2000);
                        } else {
                            toast.error("You need admin approval! Please wait for approval");
                            sessionStorage.removeItem("token")
                        }
                    } else if (res.data.data.userType === 3) {
                        sessionStorage.setItem("customerId", res.data.data.customerId);

                        toast.success(res.data.message);
                        setTimeout(() => {

                            nav("/");
                        }, 2000);
                    }
                } else {
                    toast.error(res.data.message);

                }
            })
            .catch((err) => {
                toast.error(err);

            });


    }
    return (
        <>
            <>
                <div className="container-fluid bg-breadcrumb">
                    <div className="bg-breadcrumb-single" />
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                            Login
                        </h4>
                        <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">

                            <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item active text-primary">Login</li>
                        </ol>
                    </div>
                </div>
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">



                        <div
                            className="row justify-content-center position-relative"

                        >
                            <div className="col-lg-8">
                                <div className="bg-primary p-5 m-5 mb-0">
                                    <form onSubmit={handleLogin}>
                                        <div className="row g-3">

                                            <div className="col-12 col-sm-12">
                                                <input
                                                    type="email"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Email"
                                                    style={{ height: 55 }}
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                />
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <input
                                                    type="password"
                                                    className="form-control bg-light border-0"
                                                    placeholder="Your Password"
                                                    style={{ height: 55 }}
                                                    value={password}
                                                    onChange={(e) => { setPassword(e.target.value) }}
                                                />
                                            </div>


                                            <div className="col-12">
                                                <button
                                                    className="btn btn-secondary w-100 py-3"
                                                    type="submit"
                                                >
                                                    Login
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