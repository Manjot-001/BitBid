const user = require("../server/user/usermodel")
const bcrypt = require("bcrypt")
const saltRound = 10;


adminSeeder = ()=>{

    user.findOne({email:"admin@gmail.com"})
    .then((userData)=>{
        if(!userData){
            let useobj = new user()
            useobj.name = "admin"
            useobj.email = "admin@gmail.com"
            useobj.password = bcrypt.hashSync("admin123",saltRound)
            useobj.userType = 1
            useobj.save()
            console.log("admin seeded")
        }
        else{
            console.log("admin already exist")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    adminSeeder
}