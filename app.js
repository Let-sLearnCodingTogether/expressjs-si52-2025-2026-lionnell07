import express from "express"
import web from "./roule/web.js"
import api from "./roule/api.js"
import { database } from "./config/database.js"
import passport from "passport" // tambahan
import "./config/passport.js" // tambahan 

const app = express()

app.use(express.json())

app.use(passport.initialize()) // tambahan

app.use(express.static("public"))

app.set("view engine", "ejs")

app.use(web)

app.use("/api",api)

app.listen(3000, () => {
    database()
    console.log("aplikasi berjalan di http://localhost:3000")
})