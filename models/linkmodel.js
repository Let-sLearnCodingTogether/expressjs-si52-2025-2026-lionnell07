import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : [true,"title wajib diisi"],
            trim : true
        },
        icon : {
            type : String,
            required :[true,"icon wajib diisi"],
        },
        url : {
            type : String,
            required : [true, "url wajib diisi"],
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
const linkmodel = mongoose.Model("link", LinkSchema)
export default linkmodel