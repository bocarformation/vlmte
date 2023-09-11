import mongoose from "mongoose";

let masterclassSchema = mongoose.Schema({

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
},
category: {
    type: String
}

},{
    timestamps: true
}
)

let Masterclass = mongoose.model("Masterclass", masterclassSchema)

export default Masterclass