import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"


export default function ViewBid() {

    const [ViewBidData, setViewBidData] = useState([])

      const fetchViewBid =()=>{

        apiServices.getallbid()
          .then((res)=>{
  
              setViewBidData(res.data.data)
          })
          .catch((err)=>{
              console.log(err)
          })
      }
      useEffect (()=>{
          fetchViewBid()
      },[])
  
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
              View Bid
            </h4>
            <ol
              className="breadcrumb justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">View Bid</li>
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

    </tr>
  </thead>
  <tbody>
        {
            ViewBidData?.map((el,ind)=>(
             <>
             <tr>
                <th scope="row">{ind+1}</th>
                <td> {el.clientId?.name}</td>
                <td> {el.postId?.title}</td>
                <td> {el.developerId?.name}</td>
                <td> {el.bidAmount}</td>
                <td> {el.deadlineEstimate}</td>
                <td>{el.description} </td>
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