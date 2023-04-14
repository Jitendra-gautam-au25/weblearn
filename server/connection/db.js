import mongoose from "mongoose";




const mongoDb =  (MongodbUrl) => {
     mongoose.connect(MongodbUrl, {
        useNewUrlParser: true,
        // useCreateIndex:true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }).then(() => {
        console.log("Connection successFull")
    }).catch(() => {
        console.log("No connected")

    })
}



export default mongoDb