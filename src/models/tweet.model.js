import mongoose, {Schema} from "mongoose";

const tweetSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})
//with the help of time stamps we get tha createdAt and updatedAt 


export const Tweet = mongoose.model("Tweet", tweetSchema)