import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"


export default function ManageQuery() {

  const [QueryData, setQueryData] = useState([])
  const fetchManageQuery = () => {

    apiServices.getallManageQuery()
      .then((res) => {

        setQueryData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchManageQuery()
  }, [])

   const handleReply = (email, subject, message) => {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(gmailURL, '_blank');
    };


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
              Manage Query
            </h4>
            <ol
              className="breadcrumb justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">Manage Query</li>
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
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Message</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      QueryData?.map((el, ind) => (
                        <>
                          <tr>
                            <th scope="row">{ind + 1}</th>
                            <td> {el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.subject}</td>
                            <td>{el.message}</td>
                            <td>
                              <button className="btn btn-danger"  onClick={() => handleReply(el?.email, el?.subject, el?.message)} > Reply </button>
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