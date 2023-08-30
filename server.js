import express from "express"
import dotenv from "dotenv"
import { dbInit } from "./config/db.js"
import masterclassRouter from "./routes/masterclassRoute.js"
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import podcastRouter from "./routes/podcastRoute.js"
import temoignageRouter from "./routes/temoignageRoute.js"
import developpementRouter from "./routes/developpementRoute.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
dotenv.config()

app.use(express.static('public'))
app.use(cors())
dbInit


app.use("/masterclass", masterclassRouter)
app.use("/podcast", podcastRouter)
app.use("/temoignage", temoignageRouter)
app.use("/developpement", developpementRouter)
app.use("/", userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Le serveur est bien démarré sur ${process.env.HOSTNAME}${process.env.PORT}`);
})