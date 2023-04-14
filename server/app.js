import dotenv from "dotenv";
dotenv.config()
import express from "express"
import mongoDb from "./connection/db.js";
import web from './routes/web.js'
import webs from './routes/webs.js'
import cors from "cors"

const MongodbUrl=process.env.MongodbUrl

const port = process.env.Port || 3002
const app = express()
app.use(cors())

mongoDb(MongodbUrl)
// app.use("/",(req,res)=>{
//     req.send("Helo word ")
// })

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api", web);
app.use("/authlogin", webs);


app.listen(port ,()=>{
    console.log(`Server is Listing ${port}`)
})

