import { AsyncHandler } from "../utils/asyncHandler.js";


const requestUser = AsyncHandler( async(req, res) => {
    res.status(200).json({
        message : "ok"
    })
}) 

export {requestUser}