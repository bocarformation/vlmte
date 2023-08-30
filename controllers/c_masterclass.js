import Masterclass from "../models/MasterclassModel.js"


export const GetAllMasterclass = async (req, res) =>{
    const masterclass = await Masterclass.find()

    if(!masterclass){
        return res.json({error: "Aucune Masterclass trouvée pour le moment"})
    }

    res.json(masterclass)
}



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Function used for allows administrator to submit a new "Leçon entrepreunariale"
 * We will check if in req, admin insert a file or not
 */
export const AddMasterclass = async (req, res) => {

    console.log(req.body);
// const {name, logo, support, video, date} = req.body
//     if(!req.body || !name || !logo || !video || !date ) {
//        return res.json({error: "Veuillez remplir tous les champs"})
//     }
await req.myFileName

    let masterclass; 
    if(!req.files.support) {
     masterclass = await new Masterclass({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        video: req.myFileName[1]
    })
    }else  {
         masterclass = await new Masterclass({

        name: req.body.name,
        logo: req.myFileName[0],
        date: req.body.date,
        support: req.myFileName[1],
        video: req.myFileName[2]
    })
    }
    await masterclass.save()
    res.json({message: "Leçon entrepreunariale bien enregistrée avec succès"})
    
    

}


export const EditMasterclass = async (req, res) => {

const id = req.params.id

const idMasterclass = await Masterclass.findById(id)


if(!idMasterclass){
    return res.json({message: "Aucune leçon entrepreunariale trouvée avec cet ID"})
}

let masterclass;

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

const mUpdate = await Masterclass.updateOne({"_id": id}, masterclass)


if (!mUpdate){
    return res.json({message: "Aucune leçon entrepreunariale trouvée avec cet ID"})
}
console.log(req.myFileName)
res.json({message: "Leçon entrepreunariale mise à jour!"})


}


export const DeleteMasterclass = async (req, res) => {
    const id = req.params.id

  const  checkMasterclass = await Masterclass.findById(id)

  if(!checkMasterclass){
    return res.json({message: "Aucune leçon entrepreunariale trouvée avec cet ID"})
  }

  await Masterclass.deleteOne({"_id": id})

  res.json({message: "Leçon entrepreunariale supprimée avec succès"})
}

export const GetOneMasterclass = async (req, res) =>{
    const id = req.params.id
    const masterclass = await Masterclass.findById(id)

    if(!masterclass){
        return res.json({message: "Aucune leçon entrepreunariale trouvée avec cet ID"})
    }

    res.json(masterclass)
}


export const StatsMasterclass = async (req, res) =>{
    const masterclass = await Masterclass.find()

    if(!masterclass){
        return res.json({error: "Aucune Masterclass trouvée pour le moment"})
    }

    res.json(masterclass)
}