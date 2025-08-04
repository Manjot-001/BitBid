import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"


export default function ManageBid() {

    const [ManageBidData, setManageBidData] = useState([])
      const fetchManageBid =()=>{
        let data = {
          clientId:sessionStorage.getItem("customerId")
        }
  
        apiServices.getallManageBid(data)
          .then((res)=>{
  
              setManageBidData (res.data.data)
          })
          .catch((err)=>{
              console.log(err)
          })
      }
      useEffect (()=>{
          fetchManageBid()
      },[])
  
  return (
    <>
      <>
       <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Manage Bid
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Bids</li>
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
         <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Client Information</th>
      <th scope="col">Post Information</th>
      <th scope="col">Developer Information</th>
      <th scope="col">Bid Amount</th>
      <th scope="col">Deadline Estimate</th>
      <th scope="col">description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {
            ManageBidData?.map((el,ind)=>(
             <>
             <tr>
                <th scope="row">{ind+1}</th>
                <td> {el.clientId}</td>
                <td> {el.postId}</td>
                <td> {el.developerId}</td>
                <td> {el.bidAmount}</td>
                <td> {el.deadlineEstimate}</td>
                <td>{el.description} </td>
                <td>
                    <button className="btn btn-danger"> Delete </button>
                    <button className="btn btn-primary mt-1">Update</button>
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