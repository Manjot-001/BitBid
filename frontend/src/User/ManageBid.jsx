import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"
import { toast } from "react-toastify"


export default function ManageBid() {

    const [ManageBidData, setManageBidData] = useState([])
    const fetchManageBidData = () => {

        apiServices.getallManageBid()
            .then((res) => {

                setManageBidData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchManageBidData()
    }, [])


    const acceptData = (id) =>{
        let data = {
            _id:id,
            status:"Accepted"
        }
        apiServices.updatebidStatus(data)
        .then((res) =>{
            toast.success(res.data.message)
             fetchManageBidData()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const  rejectData =(id) =>{
        let data = {
            _id:id,
            status:"Rejected"
        }
        apiServices.updatebidStatus(data)
        .then((res) =>{
            toast.success(res.data.message)
            fetchManageBidData()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return (
        <>
            <>
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
                                            <th scope="col">Post Info</th>
                                            <th scope="col">Developer Info</th>
                                            <th scope="col">Bid Amount</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Deadline</th>
                                             <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ManageBidData?.map((el, ind) => (
                                                <>
                                                    <tr>
                                                        <th scope="row">{ind + 1}</th>
                                                        <td> {el.postId?.title}</td>
                                                        <td>{el.developerId?.name}</td>
                                                        <td>{el.bidAmount}</td>
                                                        <td>{el.description}</td>
                                                        <td>{el.deadlineEstimate}</td>
                                                         <td>{el.status}</td>
                                                        <td>
                                                            {
                                                                el.status == "Pending" ? (
                                                                    <>
                                                                        <div className="d-flex">
                                                                            <button className="btn btn-success" onClick={() =>acceptData(el._id)}> Accept </button>
                                                                        <button className="btn btn-danger ms-2" onClick={()=> rejectData(el._id)}> Reject </button>
                                                                        </div>
                                                                    </>
                                                                ) : el.status == "Accepted" ? (
                                                                    <>
                                                                        <button className="btn btn-danger "onClick={() => rejectData(el._id)}> Reject </button>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <p className="text-danger">You can not perform any action</p>
                                                                    </>
                                                                )
                                                            }
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