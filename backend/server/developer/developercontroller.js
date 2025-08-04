const developer = require("./developermodel")
const user = require("../user/usermodel")
const bcrypt = require("bcrypt");
const roundValue = 10;


getall = async (req, res) => {
    totalCount = await developer.countDocuments().exec()

    developer.find()
        .then((developerData) => {
            res.json({
                status: 200,
                success: true,
                message: "Data added successfully",
                data: developerData,
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
        developer.findOne({ _id: req.body._id })
            .then((developerData) => {
                if (!developerData) {
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
                        data: developerData
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

updateData = (req, res) => {
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
    developer.findOne({ _id: req.body._id })
        .then((developerData) => {
            if (!developerData) {
                res.json({
                    status: 404,
                    success: false,
                    message: "Data not found"
                })
            }
            else {
                if (req.body.name) {
                    developerData.name = req.body.name
                }
                if (req.body.email) {
                    developerData.description = req.body.email
                }
                if (req.body.password) {
                    developerData.description = req.body.password
                }
                if (req.body.contact) {
                    developerData.description = req.body.contact
                }
                if (req.body.address) {
                    developerData.description = req.body.address
                }
                if (req.body.developerImage) {
                    developerData.description = req.body.developerImage
                }
                if (req.body.qualification) {
                    developerData.description = req.body.qualification
                }
                if (req.body.experience) {
                    developerData.description = req.body.experience
                }
                if (req.body.certification) {
                    developerData.description = req.body.certification
                }

                developerData.save()
                    .then((resData) => {
                        res.json({
                            status: 200,
                            success: true,
                            message: "Data updated successfully",
                            data: resData
                        })
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

register = (req, res) => {

    let validationErrors = [];

    if (!req.body.name) {
        validationErrors.push("name is required")
    }
    if (!req.body.email) {
        validationErrors.push("Email is required")
    }
    if (!req.body.password) {
        validationErrors.push("Password is required")
    }
    if (!req.body.contact) {
        validationErrors.push("Contact is required")
    }
    if (!req.body.address) {
        validationErrors.push("address is required")
    }
    if (!req.file) {
        validationErrors.push("developerImage is required")
    }
    if (!req.body.qualification) {
        validationErrors.push("qualification is required")
    }
    if (!req.body.experience) {
        validationErrors.push("experience is required")
    }
    if (!req.body.certification) {
        validationErrors.push("certification is required")
    }


    if (validationErrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation error occurs",
            errors: validationErrors
        })
    }
    else {
        user.findOne({ email: req.body.email })
            .then((developerData) => {
                if (!developerData) {
                    let userObj = new user()
                    userObj.name = req.body.name
                    userObj.email = req.body.email
                    userObj.userType = 2
                    userObj.password = bcrypt.hashSync(req.body.password, roundValue)
                    userObj.save()
                        .then((userResData) => {
                            let devObj = new developer()
                            devObj.name = req.body.name
                            devObj.email = req.body.email
                            devObj.password = req.body.password
                            devObj.contact = req.body.contact
                            devObj.address = req.body.address
                            devObj.developerImage = "developer/" + req.file.filename
                            devObj.qualification = req.body.qualification
                            devObj.experience = req.body.experience
                            devObj.certification = req.body.certification
                            devObj.userType = 2
                            devObj.userId = userResData._id
                            devObj.save()
                                .then((cusResData) => {
                                    userObj.developerId = cusResData._id
                                    userObj.save()
                                        .then(() => {
                                            res.json({
                                                status: 200,
                                                success: true,
                                                message: "User Registered successfully",
                                                data: cusResData
                                            })
                                        })
                                        .catch((err) => {
                                            res.json({
                                                status: 500,
                                                success: false,
                                                message: "Internal server error",
                                                errors: err.message
                                            })
                                        })
                                })
                                .catch((err) => {
                                    res.json({
                                        status: 500,
                                        success: false,
                                        message: "Internal server error",
                                        errors: err.message
                                    })
                                })

                        })
                }
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "User already exists",
                        data: customerData
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
module.exports = {
    getall,
    getsingleData,
    updateData,
    register
}
