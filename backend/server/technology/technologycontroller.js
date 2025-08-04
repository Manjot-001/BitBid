const technology = require("./technologymodel")

add = (req, res) => {
    let validationErrors = [];

    if (!req.body.name) {
        validationErrors.push("name is required")
    }
    if (!req.body.description) {
        validationErrors.push("description is required")
    }
    if (!req.file) {
        validationErrors.push("image is required")
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
        technology.findOne({ name: req.body.name })
            .then((technologyData) => {
                if (!technologyData) {
                    let tecobj = new technology();
                    tecobj.name = req.body.name
                    tecobj.technologyImage = "technology/" + req.file.filename
                    tecobj.description = req.body.description
                    tecobj.save()
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
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "Data already exists",
                        data: technologyData
                    })
                }
            })
            .catch((error) => {
                res.json({
                    status: 500,
                    success: false,
                    message: "intenal server error",
                    errors: error.message
                })
            })
    }
}
getall = async (req, res) => {
    totalCount = await technology.countDocuments().exec()

    technology.find()
        .then((technologyData) => {
            res.json({
                status: 200,
                success: true,
                message: "Data added successfully",
                data: technologyData,
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
        technology.findOne({ _id: req.body._id })
            .then((technologyData) => {
                if (!technologyData) {
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
                        data: technologyData
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

deleteData = (req, res) => {
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
        technology.findOne({ _id: req.body._id })
            .then((technologyData) => {
                if (!technologyData) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Data not found"
                    })
                }
                else {
                    technology.deleteOne({ _id: req.body._id })
                        .then(() => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Data deleted successfully",
                                data: technologyData
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
    technology.findOne({ _id: req.body._id })
        .then((technologyData) => {
            if (!technologyData) {
                res.json({
                    status: 404,
                    success: false,
                    message: "Data not found"
                })
            }
            else {
                if (req.body.name) {
                    technologyData.name = req.body.name
                }
                if (req.file) {
                    technologyData.technologyImage = "technology/" + req.file.filename
                }
                if (req.body.description) {
                    technologyData.description = req.body.description
                }
                technologyData.save()
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
module.exports = {
    add,
    getall,
    getsingleData,
    deleteData,
    updateData
}
