import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";

const subsciptionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId, //one who is subscribing
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, //one who 'subscriber' is subscribing
            ref: "User"
        }
    }, 
    { 
        timestamps: true 
    }
);

export const subscription = mongoose.model("subscription", subsciptionSchema); 