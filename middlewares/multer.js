import multer from "multer"
import path from "path"
import multerS3 from "multer-s3"
import { S3Client } from "@aws-sdk/client-s3"
const maxSize = 5242880000 

const s3 = new S3Client({
    region: "us-east-1",
    credentials: {

        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }

})

let myArray = []
export const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: "cloud-cube-us2",
        
        key:  (req, file, cb) => {
            const myFileName =  "x0421t1f57wi/public/" +  `${Date.now()}-${(file.originalname.split(" ")).join("_")}`
             cb(null, myFileName)
              myArray.push(myFileName)
             req.myFileName = myArray
            //  console.log(myArray);
             return req.myFileName
        }
    })
})


const storageEngineImg = multer.diskStorage({
    destination: "./public/img",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${(file.originalname.split(" ")).join("_")}`)
    }
})

const storageEnginePdf = multer.diskStorage({
    destination: "./public/pdf",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${(file.originalname.split(" ")).join("_")}`)
    }
})

const storageEngineVideo = multer.diskStorage({
    destination: "./public/video",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${(file.originalname.split(" ")).join("_")}`)
    }
})

const checkFileTypeImg = (file, cb) =>{
    // Autorisation des extensions de fichiers
    const fileTypes = /jpeg|jpg|png|pdf|ppt|mp4|mkv|mov|webM|avi|webp/
    
    // Vérifie les  nom des extensions
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype)
    if(mimeType && extName){
        return cb(null, true)
    }else {
        cb("Format de fichier non supporté")
    }
    }

const checkFileTypePdf = (file, cb) =>{
        // Autorisation des extensions de fichiers
        const fileTypes = /pdf|ppt/
        
        // Vérifie les  nom des extensions
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype)
        if(mimeType && extName){
            return cb(null, true)
        }else {
            cb("Format de fichier non supporté")
        }
        }

 const checkFileTypeVideo = (file, cb) =>{
            // Autorisation des extensions de fichiers
            const fileTypes = /mp4|mkv|mov|webM|avi/
            
            // Vérifie les  nom des extensions
            const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
            const mimeType = fileTypes.test(file.mimetype)
            if(mimeType && extName){
                return cb(null, true)
            }else {
                cb("Format de fichier non supporté")
            }
            }



export const uploadImg = multer({
    storage: storageEngineImg,
    limits:{
        fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
        checkFileTypeImg(file, cb)
    }

})

export const uploadPdf = multer({
    storage: storageEnginePdf,
    limits:{
        fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
        checkFileTypePdf(file, cb)
    }

})

export const uploadVideo = multer({
    storage: storageEngineVideo,
    limits:{
        fileSize: maxSize
    },
    fileFilter: (req, file, cb) => {
        checkFileTypeVideo(file, cb)
    }

})