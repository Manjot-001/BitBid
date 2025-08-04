const task = require("./taskmodel");

const add = (req, res) => {
    let validationErrors = [];

    if (!req.body.taskTitle) {
        validationErrors.push("taskTitle is required");
    }
    if (!req.body.taskDescription) {
        validationErrors.push("taskDescription is required");
    }
    if (!req.body.bidId) {
        validationErrors.push("bidId is required");
    }
    if (!req.body.developerId) {
        validationErrors.push("developerId is required");
    }
     if (!req.body.clientId) {
        validationErrors.push("clientId is required");
    }
     if (!req.body.completionDate) {
        validationErrors.push("completionDate is required");
    }
     if (!req.body.taskAttachment) {
        validationErrors.push("taskAttachment is required");
    }

    if (validationErrors.length > 0) {
        return res.json({
            status: 422,
            success: false,
            message: "Validation error occurred",
            errors: validationErrors
        });
    }

    const newtask = new task({
        taskTitle: req.body.taskTitle,
        taskDescription: req.body.taskDescription,
        bidId: req.body.bidId,
        developerId: req.body.developerId,
        clientId: req.body.clientId,
        completionDate: req.body.completionDate,
        taskAttachment: req.body.taskAttachment,
        rating: req.body.rating,
        review: req.body.review
    });

    newtask.save()
        .then(() => {
            res.json({
                status: 200,
                success: true,
                message: "data added successfully"
            });
        })
        .catch((error) => {
            res.json({
                status: 500,
                success: false,
                message: "Internal server error",
                errors: error.message
            });
        });
};

const getall = async (req, res) => {
    try {
        const totalCount = await task.countDocuments().exec();
        const taskData = await task.find();

        res.json({
            status: 200,
            success: true,
            message: "Data fetched successfully",
            data: taskData,
            total: totalCount
        });
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal server error",
            errors: err.message
        });
    }
};

const getsingleData = (req, res) => {
    let validationErrors = [];

    if (!req.body._id) {
        validationErrors.push("id is required");
    }

    if (validationErrors.length > 0) {
        return res.json({
            status: 422,
            success: false,
            message: "Validation error occurred",
            errors: validationErrors
        });
    }

    task.findOne({ _id: req.body._id })
        .then((taskData) => {
            if (!taskData) {
                res.json({
                    status: 404,
                    success: false,
                    message: "Data not found"
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    message: "Data loaded successfully",
                    data: taskData
                });
            }
        })
        .catch((err) => {
            res.json({
                status: 500,
                success: false,
                message: "Internal server error",
                errors: err.message
            });
        });
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
        task.findOne({_id:req.body._id})
        .then((taskData)=>{
            if(!taskData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                task.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted successfully",
                        data:taskData
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
    task.findOne({_id:req.body._id})
    .then((taskData)=>{
        if(!taskData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.taskTitle){
                taskData.taskTitle=req.body.taskTitle
            }
            if(req.body.taskDescription){
                taskData.taskDescription=req.body.taskDescription
            }
            if(req.body.bidId){
                taskData.bidId=req.body.bidId
            }
            if(req.body.developerId){
                taskData.developerId=req.body.developerId
            }
            if(req.body.clientId){
                taskData.clientId=req.body.clientId
            }
            if(req.body.completionDate){
                taskData.completionDate=req.body.completionDate
            }
            if(req.body.taskAttachment){
                taskData.taskAttachment=req.body.taskAttachment
            }
            taskData.save()
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

module.exports = {
    add,
    getall,
    getsingleData,
    deleteData,
    updateData
};