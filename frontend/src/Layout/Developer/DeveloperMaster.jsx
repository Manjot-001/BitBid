import { Outlet } from "react-router-dom";
import DeveloperHeader from "./DeveloperHeader";
import DeveloperFooter from "./DeveloperFooter";



export default function DeveloperMaster(){
    return(
        <>
        <DeveloperHeader />
        <Outlet />
        <DeveloperFooter />        
        </>
    )
}