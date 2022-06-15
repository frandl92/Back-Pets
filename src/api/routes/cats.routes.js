const express = require("express");

const router = express.Router();
// const upload = require("../../middlewares/file")
// const {isAuth} = require("../../middlewares/auth.middleware");

const {
    getAllCats, getCatByID, createCats,patchCat,deleteCats
} = require("../controllers/cats.controllers");

router.get("/", getAllCats);
router.get("/id/:id", getCatByID);
// router.get("/zona/:zona", getMesaByZona);
router.post("/", createCats);
router.delete('/:id', deleteCats);
router.patch('/:id', patchCat)

module.exports = router;
