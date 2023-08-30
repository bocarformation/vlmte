import User from "../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Login = async (req, res) => {

    const user = await User.findOne({"email": req.body.email})

    if (user){
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(result){
                const token =  jwt.sign({id: user.id}, process.env.JWT_SECRET, {
                    expiresIn: "48h"
                })

                res.json({
                    id: user._id,
                    login: user.login,
                    email: user.email, 
                    role: user.role,
                    status: user.status,
                    token: token
                })
            } else{
                res.json({message: "Mot de passe incorrecte"})
            }
        })
    } else {
        res.json({message: "Cet email est introuvable"})
    }

}

export const Register = async (req, res) =>{
    const checkPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
    let verifMail = await User.findOne({"email": req.body.email})

    if(verifMail){
        return res.json({message: "Cet email est déjà enregistré"})
    }
    if(!checkPwd.test(req.body.password)) {
        return res.json({message:"Le mot de passe ne respecte pas les conditions"})
    }

    let user = {
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    }

    let newUser = new User(user)

    await newUser.save()

    res.json({message: "Votre compte a bien été créé"})
}


export const GetAllUsers = async (req, res) => {
    const users = await User.find({}, {password: 0})


    if(!users){
        return res.json({message: "Aucun utilisateur trouvé"})
    }

    res.json(users)
}