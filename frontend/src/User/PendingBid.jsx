import { useEffect, useState } from "react"
import apiServices, { IMAGE_URL } from "../APISERVICES/apiServices"


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


    return (
        <>
            <>
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
                                            <th scope="col">Post Info</th>
                                            <th scope="col">Developer Id</th>
                                            <th scope="col">Bid Amount</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Deadline</th>
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
                                                        <td>
                                                   npm         <button className="btn btn-danger mb-2"> Accept </button>
                                                            <button className="btn btn-danger "> Reject </button>
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