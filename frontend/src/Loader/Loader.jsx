import { HashLoader } from "react-spinners";

export default function Loader(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-3 mx-auto d-flex justify-content-center align-items-center" style={{height:"70vh"}} >
                        <HashLoader loading={true} size={70} color="rgba(68, 210, 246, 0.9)" />
                </div>
            </div>
        </div>
        </>
    )
}