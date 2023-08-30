import express from "express"
import { uploadS3 } from "../middlewares/multer.js"
import Temoignage from "../models/TemoignageModel.js"
import { AddTemoignage, DeleteTemoignage, EditTemoignage, GetAllTemoignage, GetOneTemoignage, StatsTemoignage } from "../controllers/c_temoignage.js"


const router = express.Router()



router.get("/", GetAllTemoignage )

router.post("/new",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  AddTemoignage)

router.put("/edit/:id",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  EditTemoignage)

router.delete("/delete/:id", DeleteTemoignage)

router.get("/:id", GetOneTemoignage)
router.get("/stats", StatsTemoignage)

export default router