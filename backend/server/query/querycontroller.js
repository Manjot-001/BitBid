const query = require("./querymodel");

const add = async (req, res) => {
    let validationErrors = [];

    if (!req.body.name) validationErrors.push("name is required");
    if (!req.body.email) validationErrors.push("email is required");
    if (!req.body.subject) validationErrors.push("subject is required");
    if (!req.body.message) validationErrors.push("message is required");

    if (validationErrors.length > 0) {
        return res.json({
            status: 422,
            success: false,
            message: "validation error occurred",
            errors: validationErrors
        });
    }

    try {
        const newQuery = new query({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });

        const savedQuery = await newQuery.save();

        res.json({
            status: 200,
            success: true,
            message: "Query added successfully",
            data: savedQuery
        });
    } catch (error) {
        res.json({
            status: 500,
            success: false,
            message: "Internal server error",
            errors: error.message
        });
    }
};

const getall = async (req, res) => {
    try {
        const totalCount = await query.countDocuments().exec();
        const queryData = await query.find();

        res.json({
            status: 200,
            success: true,
            message: "Data fetched successfully",
            data: queryData,
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

const getsingleData = async (req, res) => {
    let validationErrors = [];
    if (!req.body._id) {
        validationErrors.push("id is required");
    }

    if (validationErrors.length > 0) {
        return res.json({
            status: 422,
            success: false,
            message: "validation error occurred",
            errors: validationErrors
        });
    }

    try {
        const queryData = await query.findOne({ _id: req.body._id });
        if (!queryData) {
            return res.json({
                status: 404,
                success: false,
                message: "Data not found"
            });
        }

        res.json({
            status: 200,
            success: true,
            message: "Data loaded successfully",
            data: queryData
        });
    } catch (err) {
        res.json({
            status: 500,
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                query.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted successfully",
                        data:queryData
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
    query.findOne({_id:req.body._id})
    .then((queryData)=>{
        if(!queryData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.name){
                queryData.name=req.body.name
            }
            if(req.body.email){
                queryData.email=req.body.email
            }
             if(req.body.subject){
                queryData.subject=req.body.subject
            }
             if(req.body.message){
                queryData.message=req.body.message
            }
            queryData.save()
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