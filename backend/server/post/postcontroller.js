const post = require("./postmodel");

const add = async (req, res) => {
    let validationErrors = [];

    if (!req.body.title) validationErrors.push("title is required");
    if (!req.body.technologyId) validationErrors.push("technologyId is required");
    if (!req.body.budget) validationErrors.push("budget is required");
    if (!req.body.deadline) validationErrors.push("deadline is required");
    if (!req.body.clientId) validationErrors.push("clientId is required");
    if (!req.body.description) validationErrors.push("description is required");

    if (validationErrors.length > 0) {
        return res.status(422).json({
            success: false,
            message: "Validation error occurred",
            errors: validationErrors
        });
    }

    try {
        const newPost = new post({
            title: req.body.title,
            technologyId: req.body.technologyId,
            budget: req.body.budget,
            deadline: req.body.deadline,
            clientId: req.body.clientId,
            description: req.body.description
        });

        const savedPost = await newPost.save();

        res.status(200).json({
            success: true,
            message: "data added successfully",
            data: savedPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errors: error.message
        });
    }
};

const getall = async (req, res) => {
    try {
        const totalCount = await post.countDocuments();
        const posts = await post.find(req.body).populate("technologyId").populate("clientId");

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: posts,
            total: totalCount
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errors: err.message
        });
    }
};

const getsingleData = async (req, res) => {
    if (!req.body._id) {
        return res.status(422).json({
            success: false,
            message: "Validation error occurred",
            errors: ["id is required"]
        });
    }

    try {
        const singlePost = await post.findOne({ _id: req.body._id });

        if (!singlePost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Data loaded successfully",
            data: singlePost
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errors: err.message
        });
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
        post.findOne({_id:req.body._id})
        .then((postData)=>{
            if(!postData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                post.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted successfully",
                        data:postData
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
    post.findOne({_id:req.body._id})
    .then((postData)=>{
        if(!postData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.title){
                postData.title=req.body.title
            }
            if(req.body.technologyId){
                postData.technologyId=req.body.technologyId
            }
             if(req.body.budget){
                postData.budget=req.body.budget
            }
             if(req.body.deadline){
                postData.deadline=req.body.deadline
            }
             if(req.body.clientId){
                postData.clientId=req.body.clientId
            }
             if(req.body.description){
                postData.description=req.body.description
            }

            postData.save()
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