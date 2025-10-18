import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "user name wajib diisi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib diisi"],
            unique : true,
            trim : true,
        },
        password : {
            type : String,
            required : [true, "password wajib diisi"],
        }
    },
    {
        timestamps : true
    }
)

const usermodel = mongoose.model("user", UserSchema)

export default usermodel