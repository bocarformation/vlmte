import mongoose from "mongoose";

let temoignageSchema = mongoose.Schema({

name: {
    type: String,
    required: true
},
date: {
    type: String
},

logo: {
    type: String
},

support: {
    type: String
},
video: {
    type: String
}

},{
    timestamps: true
}
)

let Temoignage = mongoose.model("Temoignage", temoignageSchema)

export default Temoignage