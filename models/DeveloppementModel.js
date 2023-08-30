import mongoose from "mongoose";

let developpementSchema = mongoose.Schema({

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

let Developpement = mongoose.model("Developpement", developpementSchema)

export default Developpement