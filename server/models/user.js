import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    sname: { type: String },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Use only one password field
    role: { type: String, enum: ["teacher", "parent", "student", "admin"], required: true },
    profileImage: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
