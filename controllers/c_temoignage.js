import Temoignage from "../models/TemoignageModel.js"


export const GetAllTemoignage = async (req, res) =>{
    const temoignage = await Temoignage.find()

    if(!temoignage){
        return res.json({error: "Aucun témoignage trouvé pour le moment"})
    }

    res.json(temoignage)
}



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Function used for allows administrator to submit a new "Leçon entrepreunariale"
 * We will check if in req, admin insert a file or not
 */
export const AddTemoignage = async (req, res) => {

    console.log(req.body);
// const {name, logo, support, video, date} = req.body
//     if(!req.body || !name || !logo || !video || !date ) {
//        return res.json({error: "Veuillez remplir tous les champs"})
//     }
await req.myFileName

    let temoignage; 
    if(!req.files.support) {
     temoignage = await new Temoignage({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        video: req.myFileName[1]
    })
    }else  {
         temoignage = await new Temoignage({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    })
    }
    await temoignage.save()
    res.json({message: "Témoignage enregistré avec succès"})
    
    

}


export const EditTemoignage = async (req, res) => {

const id = req.params.id

const idTemoignage = await Temoignage.findById(id)


if(!idTemoignage){
    return res.json({message: "Aucun témoignage trouvée avec cet ID"})
}

let temoignage;
if(req.files.logo && req.files.support && req.files.video){
    masterclass = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    }
}

if(!req.files.logo && req.files.support && req.files.video){
    masterclass = {
        name: req.body.name, 
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(req.files.logo && !req.files.support && req.files.video){
    masterclass = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        video: req.myFileName[2]
    }
}

if(req.files.logo && req.files.support && !req.files.video){
    masterclass = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
    }
}

if(!req.files.logo && !req.files.support && req.files.video){
    masterclass = {
        name: req.body.name,
        date: req.body.date,
        video: req.myFileName[0]
    }
}

if(!req.files.logo && req.files.support && !req.files.video){
    masterclass = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
    }
}

if(req.files.logo && !req.files.support && !req.files.video){
    masterclass = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(!req.files.logo && !req.files.support && !req.files.video){
    masterclass = {
        name: req.body.name,
        date: req.body.date,
    }
}


const tUpdate = await Temoignage.updateOne({"_id": id}, temoignage)


if (!tUpdate){
    return res.json({message: "Aucun témoignage trouvé avec cet ID"})
}
console.log(req.myFileName)
res.json({message: "Témoignage mise à jour!"})


}


export const DeleteTemoignage = async (req, res) => {
    const id = req.params.id

  const  checkTemoignage = await Temoignage.findById(id)

  if(!checkTemoignage){
    return res.json({message: "Aucun témoignage trouvée avec cet ID"})
  }

  await Temoignage.deleteOne({"_id": id})

  res.json({message: "Témoignage supprimé avec succès"})
}

export const GetOneTemoignage = async (req, res) =>{
    const id = req.params.id
    const temoignage = await Temoignage.findById(id)

    if(!temoignage){
        return res.json({message: "Aucun témoignage trouvé avec cet ID"})
    }

    res.json(temoignage)
}


export const StatsTemoignage = async (req, res) =>{
    const temoignage = await Temoignage.find()

    if(!temoignage){
        return res.json({error: "Aucun témoignage trouvée pour le moment"})
    }

    res.json(temoignage)
}