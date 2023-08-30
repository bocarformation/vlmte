import mongoose from "mongoose";

let podcastSchema = mongoose.Schema({

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

let Podcast = mongoose.model("Podcast", podcastSchema)

export default Podcast