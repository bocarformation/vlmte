import mongoose from "mongoose";

let cateMasterclassSchema = mongoose.Schema({

name: {
    type: String,
    required: true
}

},{
    timestamps: true
}
)

let CateMasterclass = mongoose.model("CateMasterclass", cateMasterclassSchema)

export default CateMasterclass