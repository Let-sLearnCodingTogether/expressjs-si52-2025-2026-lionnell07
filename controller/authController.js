
import usermodel from "../models/usermodel.js"
import { hash } from "../utils/hashUtil.js"
import { jwtSignutil } from "../utils/jwtSignutil.js"
import { compare } from "bcrypt"

export const register = async (req, res) => {
    try {
        // untuk mengambil body atau data dari request
        const registerData = req.body
        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await usermodel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword
        })
        res.status(201).json({
            massage : "berhasil register, silahkan login",
            data : null
        })
    } catch(e) {
        res.status(500).json({
            massage : e.massage,
            data : null
        })
    }
}

export const login = async (req, res) => {
    try {
        const loginData = req.body

        //select * from users where email = email
        // mencari user berdasarkan email
        const user = await usermodel.findOne({
            email : loginData.email
        })

        // jika user tidak ditemukan 
        if (!user) {
            res.status(404).json({
                massage : "user tidak ditemukan",
                data : null
            })
        }
        // membandingkan passwod  yang ada didalam db dengan request
        if (compare(loginData.password, user.password)){
            return res.status(200).json({
                message : "login berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : jwtSignutil(user) // melakukan sign jwt token
                }
            })
        }
        return res.status(401).json({
                message : "login gagal",
                data : null
        })
                       
    } catch (error){
    res.status(500).json({
            massage : error.message,
            data : null
        })
    }
}


