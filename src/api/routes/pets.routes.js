const express = require("express");

const router = express.Router();
// const upload = require("../../middlewares/file")
// const {isAuth} = require("../../middlewares/auth.middleware");

const {
    getAllPets, getPetByID, createPets, deletePets, patchPet
} = require("../controllers/pets.controllers");

router.get("/", getAllPets);
router.get("/id/:id", getPetByID);
// router.get("/zona/:zona", getMesaByZona);
router.post("/", createPets);
router.delete('/:id', deletePets);
router.patch('/:id', patchPet)

module.exports = router;
