const bid = require("./bidmodel")

add = (req, res) => {
    let validationErrors = [];

    if (!req.body.clientId) {
        validationErrors.push("clientId is required")
    }
    if (!req.body.postId) {
        validationErrors.push("postId is required")
    }
    if (!req.body.developerId) {
        validationErrors.push("developerId is required")
    }
    if (!req.body.bidAmount) {
        validationErrors.push("bidAmount is required")
    }
    if (!req.body.description) {
        validationErrors.push("description is required")
    }
    if (!req.body.deadlineEstimate) {
        validationErrors.push("deadlineEstimate is required")
    }
    if (validationErrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "validation error occur",
            errors: validationErrors
        })
    }
    else {
        let bidobj = new bid();
        bidobj.clientId = req.body.clientId
        bidobj.postId = req.body.postId
        bidobj.developerId = req.body.developerId
        bidobj.bidAmount = req.body.bidAmount
        bidobj.description = req.body.description
        bidobj.deadlineEstimate = req.body.deadlineEstimate
        bidobj.save()
            .then((resData) => {
                res.json({
                    status: 200,
                    success: true,
                    message: "data added successful",
                    data: resData
                })
            })
            .catch((error) => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Interval server error",
                    errors: error.message
                })
            })
    }
}
getall = async (req, res) => {
    totalCount = await bid.countDocuments().exec()

    bid.find(req.body).populate("clientId").populate("developerId").populate("postId")
        .then((bidData) => {
            res.json({
                status: 200,
                success: true,
                message: "Data added successfully",
                data: bidData,
                total: totalCount
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                success: false,
                message: "internal server error",
                errors: err.message
            })
        })
}

getsingleData = (req, res) => {
    let validationErrors = [];
    if (!req.body._id) {
        validationErrors.push("id is required")
    }
    if (validationErrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "validation error occur",
            errors: validationErrors
        })
    }
    else {
        bid.findOne({ _id: req.body._id })
            .then((bidData) => {
                if (!bidData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Data not found"
                    })
                }
                else {
                    res.json({
                        status: 200,
                        success: true,
                        message: "Data loaded successfully",
                        data: bidData
                    })
                }
            })
            .catch((err) => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal server error",
                    errors: err.message
                })
            })

    }
}


deleteData = (req,res)=>{
    let validationErrors=[];
    if (!req.body._id){
        validationErrors.push("id is required")
    }
    if (validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"validation error occur",
            errors:validationErrors
        })
    }
    else{
        bid.findOne({_id:req.body._id})
        .then((bidData)=>{
            if(!bidData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                bid.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted successfully",
                        data:bidData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        errors:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                errors:err.message
            })
        })
    }
}

updateData =(req,res)=>{
    let validationErrors=[];
    if (!req.body._id){
        validationErrors.push("id is required")
    }
    if (validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"validation error occur",
            errors:validationErrors
        })
    }
    bid.findOne({_id:req.body._id})
    .then((bidData)=>{
        if(!bidData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.clientId){
                bidData.clientId=req.body.clientId
            }
            if(req.body.postId){
                bidData.postId=req.body.postId
            }
             if(req.body.developerId){
                bidData.developerId=req.body.developerId
            }
             if(req.body.bidAmount){
                bidData.bidAmount=req.body.bidAmount
            }
            if(req.body.description){
                bidData.description=req.body.description
            }
            if(req.body.deadlineEstimate){
                bidData.deadlineEstimate=req.body.deadlineEstimate
            }
            bidData.save()
            .then((resData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Data updated successfully",
                    data:resData
                })
            })
            .catch((err)=>{
                res.json({
                    status:500,
                    success:false,
                    message:"Internal server error",
                    errors:err.message
                })
            })
        }
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            errors:err.message
        })
    })
}


updateStatus=(req,res)=>{
    let validationErrors=[];
    if(!req.body._id){
        validationErrors.push("Id is required")
    }
    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Internal Server Error",
            error:validationErrors
        })
    }

     bid.findOne({_id:req.body._id})
    .then((bidData)=>{
        if(!bidData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.status){
                bidData.status=req.body.status
            }
            
            bidData.save()
            .then((resData)=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Status updated successfully",
                    data:resData
                })
            })
            .catch((err)=>{
                res.json({
                    status:500,
                    success:false,
                    message:"Internal server error",
                    errors:err.message
                })
            })
        }
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            errors:err.message
        })
    })

}

module.exports = {
    add,
    getall,
    getsingleData,
    deleteData,
    updateData,
    updateStatus
}
