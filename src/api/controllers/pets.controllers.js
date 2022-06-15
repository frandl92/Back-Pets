// const { deleteFile } = require("../../middlewares/deleteFile");
const Pets = require("../models/pets.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode")



const getAllPets = async (req, res, next) => {
  try {
    const allPets = await Pets.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Perrekes: allPets,
    });
  } catch (error) {
    return next(error);
  }
};


const getPetByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const petByID = await Pets.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Mesa: petByID,
    });
  } catch (error) {
    return next(error);
  }
};


const createPets = async (req, res, next) => {
  try {
    const newPets = new Pets(req.body);
    if (req.file) {
      newPets.imagen = req.file.path;
    }
    const createdPets = await newPets.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      perreke: createdPets,
    });
  } catch (error) {
    return next(error);
  }
};

const deletePets = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const petBorrado = await Pets.findByIdAndDelete(id);
  
      return res.status(200).json(petBorrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchPet = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchPet = new Pets(req.body);
  
      patchPet._id = id;

      const petData= await Pets.findById(id)

      // patchPet.autor =[...petData.autor, ...patchPet.autor]

      if (petData.imagen) {
        deleteFile(petData.imagen);
        }

      if (req.file) {
        patchPet.imagen = req.file.path;
      }
  
      const PetDB = await Pets.findByIdAndUpdate(id, patchPet);
      
      return res.status(200).json({ nuevo: patchPet, vieja: PetDB });
    } catch (error) {
      return next(error);
    }
  };


//   const getPetByZona = async (req, res, next) => {
//     const zoneMesa = req.params.zona;
//     try {
//       const mesaByZona = await Mesa.find({zona: zoneMesa});
//       return res.json({
//         status: 200,
//         message: HTTPSTATUSCODE[200],
//         Mesa: mesaByZona,
//       });
//     } catch (error) {
//       return next(error);
//     }
//   };

  

module.exports = { getAllPets, getPetByID, createPets, deletePets, patchPet};
