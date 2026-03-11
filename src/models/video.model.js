import mongoose, {Schema, SchemaType} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema(
{
    videoFile: {
        type: String, // clodeinary url
        required: true
    },
    thumbnail: {
        type: String, // clodeinary url
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {         
        type: String, 
        required: true
    },
    duration:{
        type: Number, 
        required: true
    },
    views: {
        type: Number, 
        required: true
    },
    isPublished: {
        type: Boolean, 
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},

{
    timestamps: true
})


videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("video", videoSchema)