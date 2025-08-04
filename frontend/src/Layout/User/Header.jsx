import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export default function Header() {
  const[token,setToken] = useState()
  const nav = useNavigate()
  useEffect(() =>{
    const Interval = setInterval(() =>{
      setToken(sessionStorage.getItem("token"))
    },1000)

    return () => clearInterval(Interval)
  },[])

  const logOut = () =>{
    sessionStorage.removeItem("token")
   sessionStorage.removeItem("name")
   sessionStorage.removeItem("userId")
   sessionStorage.removeItem("userType")
   toast.success("Logout successfully")
   setTimeout(() => {
    nav("/")
   }, 1000);

  }
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                BitBid
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
               
                 <Link to={'/contact'} className="nav-item nav-link">
                  Contact
                </Link>
                {
                  token?(
                    <>
                     <Link to="/managebid" className="nav-item nav-link">
                  Manage Bid
                </Link>
                     <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Post
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link to={'/post'} className="dropdown-item">
                      Add
                    </Link>
                    <Link to={'/managepost'} className="dropdown-item">
                      Manage
                    </Link>
                  </div>
                </div>
                    <Link onClick={logOut} className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">Logout</Link>
                    </>
                  ):(
                    <>
                    
                    
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Register 
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link to={'/register'} className="dropdown-item">
                      User Register
                    </Link>
                    <Link to={'/developerregister'} className="dropdown-item">
                      Developer Register
                    </Link>
                  </div>
                </div>
               
                <Link to={'/login'} className="nav-item nav-link">
                  Login
                </Link>
                    </>
                  )
                }
               
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}