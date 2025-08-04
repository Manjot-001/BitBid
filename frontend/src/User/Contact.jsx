import { useState } from "react"
import apiServices from "../APISERVICES/apiServices"
import { toast } from "react-toastify"

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const addData = (e) => {
    e.preventDefault()

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    apiServices.contactadd(data)
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
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Contact Us
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="contact-item">
                <div className="pb-5">
                  <h4 className="text-primary">Contact Us</h4>
                  <h1 className="display-6 mb-4">Have a question about bidding, posting a project, or account help?</h1>
                  <p className="mb-0">
                    Whether you're a client looking to post a project or a developer aiming to win bids, our team is here to help. Reach out to us with any inquiries or feedback about BitBid – your trusted freelance bidding platform.
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-4">
                    <i className="fa fa-home text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Address</h4>
                    <p className="mb-0">BitBid HQ, Sector 21, Chandigarh, India</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-2">
                    <i className="fa fa-phone-alt text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Phone</h4>
                    <p className="mb-0">+91 98765 43210</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary btn-lg-square rounded-circle p-2">
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ms-4">
                    <h4>Email</h4>
                    <p className="mb-0">support@bitbid.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <form onSubmit={addData}>
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave your message here" value={message} onChange={(e) => setMessage(e.target.value)} id="message" style={{ height: 160 }} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded h-100">
                <iframe className="rounded-top w-100" style={{ height: 500, marginBottom: "-6px" }} src="https://www.google.com/maps/embed?..." loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="d-flex align-items-center justify-content-center bg-primary rounded-bottom p-4">
                  <div className="d-flex">
                    <a className="btn btn-dark btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-dark btn-lg-square rounded-circle mx-2" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-dark btn-lg-square rounded-circle mx-2" href="#"><i className="fab fa-instagram" /></a>
                    <a className="btn btn-dark btn-lg-square rounded-circle mx-2" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
