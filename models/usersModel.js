import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    surname: { type: String, require: true },
    age: { type: String, require: true },
},

{
    timestamps: true,
});

export default mongoose.model('users', UsersSchema);