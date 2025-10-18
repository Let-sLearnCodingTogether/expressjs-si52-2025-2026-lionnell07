import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true,"display name wajib diisi"],
        },
        profilePicture : {
            type : String,
            required :[true,"profile picture wajib diisi"],
        },
        bio : {
            type : String,
            minLength : [10, "minimal 10 karakter"],
            maxLength : [150,"minimal 150 karakter"],
            required : [true, "bio wajib diisi"],
            trim : true
        },
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required : true
        }
    },
    {
        timestamps : true
    }
)

const profilemodel = mongoose.Model("Profile", ProfileSchema)

export default profilemodel