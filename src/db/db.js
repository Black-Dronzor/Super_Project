import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async() => {
    try {
       const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\nMONGODB connected!! DB host : ${ConnectionInstance.connection.host}`)
    //    console.log("HI how are you")
    //    app.listen(process.env.PORT, () => {
    //     console.log("App is listening on port", process.env.PORT)
    //    })
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }
}

export {connectDB}