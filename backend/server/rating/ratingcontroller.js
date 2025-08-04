const rating = require("./ratingmodel");

const add = (req, res) => {
    let validationErrors = [];

    if (!req.body.clientId) {
        validationErrors.push("clientId is required");
    }
    if (!req.body.development) {
        validationErrors.push("development is required");
    }
    if (!req.body.rating) {
        validationErrors.push("rating is required");
    }
    if (!req.body.review) {
        validationErrors.push("review is required");
    }

    if (validationErrors.length > 0) {
        return res.json({
            status: 422,
            success: false,
            message: "Validation error occurred",
            errors: validationErrors
        });
    }

    const newRating = new rating({
        clientId: req.body.clientId,
        development: req.body.development,
        rating: req.body.rating,
        review: req.body.review
    });

    newRating.save()
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
        const totalCount = await rating.countDocuments().exec();
        const ratingData = await rating.find();

        res.json({
            status: 200,
            success: true,
            message: "Data fetched successfully",
            data: ratingData,
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

    rating.findOne({ _id: req.body._id })
        .then((ratingData) => {
            if (!ratingData) {
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
                    data: ratingData
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
        rating.findOne({_id:req.body._id})
        .then((ratingData)=>{
            if(!ratingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                rating.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted successfully",
                        data:ratingData
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
    rating.findOne({_id:req.body._id})
    .then((ratingData)=>{
        if(!ratingData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.clientId){
                ratingData.clientId=req.body.clientId
            }
            if(req.body.development){
                ratingData.development=req.body.development
            }
             if(req.body.rating){
                ratingData.rating=req.body.rating
            }
             if(req.body.review){
                ratingData.review=req.body.review
            }
            ratingData.save()
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