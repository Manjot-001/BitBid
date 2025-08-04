const customer = require("./customermodel")
const user = require("../user/usermodel")
const bcrypt = require("bcrypt");
const roundValue = 10;

register =(req,res)=>{

    let validationErrors = [];

    if(!req.body.name){
        validationErrors.push("Name is required")
    }
     if(!req.body.email){
        validationErrors.push("Email is required")
    }
     if(!req.body.password){
        validationErrors.push("Password is required")
    }
     if(!req.body.contact){
        validationErrors.push("Contact is required")
    }
     if(!req.body.address){
        validationErrors.push("address is required")
    }

    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs",
            errors:validationErrors
        })
    }
    else{
        user.findOne({email:req.body.email}).
        then((customerData)=>{
            if(!customerData){
               let userObj = new user()
               userObj.name = req.body.name
               userObj.email = req.body.email
               userObj.password = bcrypt.hashSync(req.body.password,roundValue)
               userObj.save()
               .then((userResData)=>{
                let cusObj = new customer()
               cusObj.name = req.body.name
              cusObj.email = req.body.email
              cusObj.password = req.body.password
              cusObj.contact = req.body.contact
              cusObj.address = req.body.address
              cusObj.userType = 3
              cusObj.userId = userResData._id
              cusObj.save().
              then((cusResData)=>{
                userObj.customerId = cusResData._id
                userObj.save()
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"User Registered successfully",
                        data:cusResData
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
              })
              .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        errors:err.message
                    })
                })

               })
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"User already exists",
                    data:customerData
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

const getall = async (req, res) => {
    try {
        const totalCount = await customer.countDocuments();
        const customers = await customer.find();

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: customers,
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
        const singlecustomer = await customer.findOne({ _id: req.body._id });

        if (!singlecustomer ) {
            return res.status(404).json({
                success: false,
                message: "customer not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Data loaded successfully",
            data: singlecustomer
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            errors: err.message
        });
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
    customer.findOne({_id:req.body._id})
    .then((customerData)=>{
        if(!customerData){
            res.json({
                status:404,
                success:false,
                message:"Data not found"
            })
        }
        else{
            if(req.body.name){
                customerData.name=req.body.name
            }
            if(req.body.email){
                customerData.email=req.body.email
            }
             if(req.body.password){
                customerData.password=req.body.password
            }
             if(req.body.contact){
                customerData.contact=req.body.contact
            }
             if(req.body.address){
                customerData.address=req.body.address
            }
             

            customerData.save()
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
    register,
    getall,
    getsingleData,
    updateData
}
