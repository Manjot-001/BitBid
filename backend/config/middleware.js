const jwt = require("jsonwebtoken")
const privateKey = "manjot123"

module.exports = (req,res,next)=>{
    const token = req.headers['authorization']

    jwt.verify(token,privateKey,function(err,result){
        if(err==null){
            res.body['tokenData'] = result
            next()
        }
        else{
            res.json({
                status:403,
                success:"token not found"
            })
        }
    })
}