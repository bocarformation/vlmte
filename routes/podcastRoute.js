import express from "express"
import { uploadS3 } from "../middlewares/multer.js"
import { AddPodcast, DeletePodcast, EditPodcast, GetAllPodcast, GetOnePodcast, StatsPodcast } from "../controllers/c_podcast.js"


const router = express.Router()



router.get("/", GetAllPodcast )

router.post("/new",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  AddPodcast)

router.post("/edit/:id",uploadS3.fields([{

    name: "logo"

},
{
    name: "support"
},
{
    name: "video"
}]),  EditPodcast)

router.delete("/delete/:id", DeletePodcast)

router.get("/:id", GetOnePodcast)
router.get("/stats", StatsPodcast)

export default router