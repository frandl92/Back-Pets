// const { deleteFile } = require("../../middlewares/deleteFile");
// const Pets = require("../models/pets.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Cats = require("../models/cats.models");
const Pets = require("../models/pets.models");



const getAllCats = async (req, res, next) => {
  try {
    const allCats = await Cats.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Gaterres: allCats,
    });
  } catch (error) {
    return next(error);
  }
};


const getCatByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const catByID = await Cats.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Mesa: catByID,
    });
  } catch (error) {
    return next(error);
  }
};


const createCats = async (req, res, next) => {
  try {
    const newCats = new Cats(req.body);
    if (req.file) {
      newCats.imagen = req.file.path;
    }
    const createdCats = await newCats.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      mesa: createdCats,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteCats = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const catBorrado = await Cats.findByIdAndDelete(id);
  
      return res.status(200).json(Borrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchCat = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchCat = new Cats(req.body);
  
      patchCat._id = id;

      const catData= await Cats.findById(id)

      // patchCat.autor =[...catData.autor, ...patchCat.autor]

      if (catData.imagen) {
        deleteFile(catData.imagen);
        }

      if (req.file) {
        patchCat.imagen = req.file.path;
      }
  
      const CatDB = await Cats.findByIdAndUpdate(id, patchCat);
      
      return res.status(200).json({ nuevo: patchCat, vieja: CatDB });
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

  

module.exports = { getAllCats, getCatByID, createCats,patchCat,deleteCats};
