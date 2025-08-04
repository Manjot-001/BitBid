const  express = require("express")
const app=express();
const port=9090;
const config = require("./config/db")
const seeder = require("./config/seeder")
seeder.adminSeeder()

const cors = require("cors")
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:"50mb"}))
const router = require("./routes/apiroutes")
app.use("/api",router)
app.use(express.static(__dirname + "/public/"));


app.listen(port,()=>{
    console.log("my project is on port . "+" "+port)
})

