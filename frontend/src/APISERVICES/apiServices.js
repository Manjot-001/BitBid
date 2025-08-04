import axios from "axios"
import * as qs from "qs"
const BASE_URL = "http://localhost:9090/api"
export const IMAGE_URL = "http://localhost:9090/"

class apiServices {
    register(data) {
        return axios.post(BASE_URL + "/customer/register", data)
    }
    Login(data) {
        return axios.post(BASE_URL + "/user/login", data)
    }
    //technology
    addTechnology(data) {
        return axios.post(BASE_URL + "/technology/add", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
    //update technology
     updateTechnology(data) {
        return axios.post(BASE_URL + "/technology/updateData", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    //updatepost
    updatePost(data){
        return axios.post(BASE_URL +"/post/updateData" , data)
    }

    deletetrackbidstatus(data){
        return axios.post(BASE_URL +"")
    }

    deleteTechnology(data){
        return axios.post(BASE_URL + "/technology/deleteData",qs.stringify(data))
    }
    deletePostData(data){
        return axios.post(BASE_URL +"/post/deleteData", qs.stringify(data))
    }

    //
    getsingletechnology(data) {
        return axios.post(BASE_URL + "/technology/getsingle", qs.stringify(data))
    }

    //getallcustomer
    getallcustomerData(data){
        return axios.post(BASE_URL +"/customer/getall" , qs.stringify(data))
    }

    //getalltechnology
    getalltechnology(data) {
        return axios.post(BASE_URL + "/technology/getall", qs.stringify(data))
    }

    //getallpost
    getallpost(data) {
        return axios.post(BASE_URL + "/post/getall", qs.stringify(data))
    }

    //getalldeveloper
    getalldeveloperpost(data) {
        return axios.post(BASE_URL + "/developer/getall", qs.stringify(data))
    }

    //getallmanagebid
    getallManageBid(data) {
        return axios.post(BASE_URL + "/bid/getall", qs.stringify(data))
    }

    //getallmanagepost
    getallManagePost(data) {
        return axios.post(BASE_URL + "/managepost", qs.stringify(data))
    }

    //developerregister
    DeveloperRegister(data) {
        return axios.post(BASE_URL + "/developer/register", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    //post
    post(data) {
        return axios.post(BASE_URL + "/post/add", qs.stringify(data))
    }
    //get single post
    getsinglepost(data) {
        return axios.post(BASE_URL + "/post/getsingle", qs.stringify(data))
    }

    //bid

    addbid(data) {
        return axios.post(BASE_URL + "/bid/add", data)
    }

    //getallbid
    getallbid(data) {
        return axios.post(BASE_URL + "/bid/getall", qs.stringify(data))
    }

    //getallquery

    getallManageQuery(data){
        return axios.post(BASE_URL +"/query/getall", qs.stringify(data))
    }

    //managebid
    managebid(data){
        return axios.post(BASE_URL +"", qs.stringify(data))
    }

    updatebidStatus(data){
        return axios.post(BASE_URL+"/bid/updateStatus",data)
    }

    //addquery
    contactadd(data) {
        return axios.post(BASE_URL + "/query/add", qs.stringify(data))
    }


}

export default new apiServices