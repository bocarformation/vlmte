import Developpement from "../models/DeveloppementModel.js"


export const GetAllDeveloppement = async (req, res) =>{
    const developpement = await Developpement.find()

    if(!developpement){
        return res.json({error: "Aucun développement personnel trouvée pour le moment"})
    }

    res.json(developpement)
}



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Function used for allows administrator to submit a new "Leçon entrepreunariale"
 * We will check if in req, admin insert a file or not
 */
export const AddDeveloppement = async (req, res) => {

    console.log(req.body);
// const {name, logo, support, video, date} = req.body
//     if(!req.body || !name || !logo || !video || !date ) {
//        return res.json({error: "Veuillez remplir tous les champs"})
//     }
await req.myFileName

    let developpement; 
    if(!req.files.support) {
        developpement = await new Developpement({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        video: req.myFileName[1]
    })
    }else  {
        developpement = await new Developpement({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    })
    }
    await developpement.save()
    res.json({message: "Développement personnel enregistré avec succès"})
    
    

}


export const EditDeveloppement = async (req, res) => {
    
const id = req.params.id

const idDeveloppement = await Developpement.findById(id)


if(!idDeveloppement){
    return res.json({message: "Aucune développement personnel trouvé avec cet ID"})
}

let developpement;
if(req.files.logo && req.files.support && req.files.video){
    developpement = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    }
}

if(!req.files.logo && req.files.support && req.files.video){
    developpement = {
        name: req.body.name, 
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(req.files.logo && !req.files.support && req.files.video){
    developpement = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        video: req.myFileName[2]
    }
}

if(req.files.logo && req.files.support && !req.files.video){
    developpement = {
        name: req.body.name,
        logo: req.myFileName[0], 
        date: req.body.date,
        support: req.myFileName[1],
    }
}

if(!req.files.logo && !req.files.support && req.files.video){
    developpement = {
        name: req.body.name,
        date: req.body.date,
        video: req.myFileName[0]
    }
}

if(!req.files.logo && req.files.support && !req.files.video){
    developpement = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
    }
}

if(req.files.logo && !req.files.support && !req.files.video){
    developpement = {
        name: req.body.name,
        date: req.body.date,
        support: req.myFileName[0],
        video: req.myFileName[1]
    }
}

if(!req.files.logo && !req.files.support && !req.files.video){
    developpement = {
        name: req.body.name,
        date: req.body.date,
    }
}

const dUpdate = await Developpement.updateOne({"_id": id}, developpement)


if (!dUpdate){
    return res.json({message: "Aucun développement personnel trouvé avec cet ID"})
}
console.log(req.myFileName)
res.json({message: "Développement personnel mis à jour!"})


}


export const DeleteDeveloppement = async (req, res) => {
    const id = req.params.id

  const  checkDeveloppement = await Developpement.findById(id)

  if(!checkDeveloppement){
    return res.json({message: "Aucun développement personnel trouvé avec cet ID"})
  }

  await Developpement.deleteOne({"_id": id})

  res.json({message: "Développement supprimé avec succès"})
}

export const GetOneDeveloppement = async (req, res) =>{
    const id = req.params.id
    const developpement = await Developpement.findById(id)

    if(!developpement){
        return res.json({message: "Aucun développement personnel trouvé avec cet ID"})
    }

    res.json(developpement)
}


export const StatsDeveloppement = async (req, res) =>{
    const developpement = await Developpement.find()

    if(!developpement){
        return res.json({error: "Aucun développement personnel trouvé pour le moment"})
    }

    res.json(developpement)
}