import Podcast from "../models/PodcastModel.js"


export const GetAllPodcast = async (req, res) =>{
    const podcast = await Podcast.find()

    if(!podcast){
        return res.json({error: "Aucun Podcast trouvée pour le moment"})
    }

    res.json(podcast)
}



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Function used for allows administrator to submit a new "Podcast"
 * We will check if in req, admin insert a file or not
 */
export const AddPodcast = async (req, res) => {

    console.log(req.body);
// const {name, logo, support, video, date} = req.body
//     if(!req.body || !name || !logo || !video || !date ) {
//        return res.json({error: "Veuillez remplir tous les champs"})
//     }
await req.myFileName

    let podcast; 
    if(!req.files.support) {
     podcast = await new Podcast({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        video: req.myFileName[1]
    })
    }else  {
         podcast = await new Podcast({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    })
    }
    await podcast.save()
    res.json({message: "Podcast enregistré avec succès"})
    
    

}


export const EditPodcast = async (req, res) => {

const id = req.params.id

const idPodcast = await Podcast.findById(id)


if(!idPodcast){
    return res.json({message: "Aucun podcast trouvé avec cet ID"})
}

let podcast;
if(req.files.logo && req.files.support && req.files.video){
    podcast = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    }
}

if(!req.files.logo && req.files.support && req.files.video){
    podcast = {
        name: req.body.name, 
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(req.files.logo && !req.files.support && req.files.video){
    podcast = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        video: req.myFileName[2]
    }
}

if(req.files.logo && req.files.support && !req.files.video){
    podcast = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
    }
}

if(!req.files.logo && !req.files.support && req.files.video){
    podcast = {
        name: req.body.name,
        date: req.body.date,
        video: req.myFileName[0]
    }
}

if(!req.files.logo && req.files.support && !req.files.video){
    podcast = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
    }
}

if(req.files.logo && !req.files.support && !req.files.video){
    podcast = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(!req.files.logo && !req.files.support && !req.files.video){
    podcast = {
        name: req.body.name,
        date: req.body.date,
    }
}

const pUpdate = await Podcast.updateOne({"_id": id}, podcast)


if (!pUpdate){
    return res.json({message: "Aucun podcast trouvé avec cet ID"})
}
console.log(req.myFileName)
res.json({message: "Podcast mis à jour!"})


}


export const DeletePodcast = async (req, res) => {
    const id = req.params.id

  const  checkPodcast = await Podcast.findById(id)

  if(!checkPodcast){
    return res.json({message: "Aucun podcast trouvé avec cet ID"})
  }

  await Podcast.deleteOne({"_id": id})

  res.json({message: "Podcast supprimé avec succès"})
}

export const GetOnePodcast = async (req, res) =>{
    const id = req.params.id
    const podcast = await Podcast.findById(id)

    if(!podcast){
        return res.json({message: "Aucun podcast trouvé avec cet ID"})
    }

    res.json(podcast)
}


export const StatsPodcast = async (req, res) =>{
    const podcast = await Podcast.find()

    if(!podcast){
        return res.json({error: "Podcast trouvé pour le moment"})
    }

    res.json(podcast)
}