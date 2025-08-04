import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"


export default function TrackBidStatus() {

    const [ManageBidData, setManageBidData] = useState([])

      const fetchManageBid =()=>{
        let data ={
          developerId:sessionStorage.getItem("developerId")
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

      const deleteData = (id) =>{
              let data = {
                _id:id
              }
              apiServices.deleteTrackBidStatus(data)
              .then((res) =>{
                toast.success(res.data.message)
                fetchManageBid()
              })
              .catch((err) =>{
                console.log(err)
              })
            }
        
  
  return (
    <>
      <>
       <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Track Bid Status
          </h4>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Bid Status</li>
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
      <th scope="col">Client Info</th>
      <th scope="col">Post Info</th>
      <th scope="col">Developer Information</th>
      <th scope="col">Bid Amount</th>
      <th scope="col">Deadline Estimate</th>
      <th scope="col">description</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
        {
            ManageBidData?.map((el,ind)=>(
             <>
             <tr>
                <th scope="row">{ind+1}</th>
                <td> {el.clientId?.name}</td>
                <td> {el.postId?.title}</td>
                <td> {el.developerId?.name}</td>
                <td> {el.bidAmount}</td>
                <td> {el.deadlineEstimate}</td>
                <td>{el.description} </td>
              <td>{el.status} </td>
            
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