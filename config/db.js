import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const dbInit = mongoose.connect(`${process.env.DB_URL}`)


mongoose.connection.on("open", () => {
    console.log("Connexion avec la BDD réussie");
})

mongoose.connection.on("error", () => {
    console.log("Erreur de connexion à la BDD");
})