import express from "express"
import { GetAllMasterclass, AddMasterclass, EditMasterclass, DeleteMasterclass, GetOneMasterclass, StatsMasterclass, AddCategory, GetAllCategory } from "../controllers/c_masterclass.js"
import { uploadImg, uploadPdf, uploadS3, uploadVideo } from "../middlewares/multer.js"


const router = express.Router()



router.get("/", GetAllMasterclass )

router.post("/new",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  AddMasterclass)

router.post("/edit/:id",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  EditMasterclass)

router.delete("/delete/:id", DeleteMasterclass)

router.post("/new/category", uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),AddCategory)

router.get("/category", GetAllCategory )

router.get("/:id", GetOneMasterclass)
router.get("/stats", StatsMasterclass)

export default router