import express from "express"
import {uploadS3} from "../middlewares/multer.js"
import { AddDeveloppement, DeleteDeveloppement, EditDeveloppement, GetAllDeveloppement, GetOneDeveloppement, StatsDeveloppement } from "../controllers/c_developpement.js"


const router = express.Router()



router.get("/", GetAllDeveloppement )

router.post("/new",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  AddDeveloppement)

router.post("/edit/:id",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  EditDeveloppement)

router.delete("/delete/:id", DeleteDeveloppement)

router.get("/:id", GetOneDeveloppement)
router.get("/stats", StatsDeveloppement)

export default router