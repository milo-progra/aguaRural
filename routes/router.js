
const express = require("express")
var router = express.Router();
var projectControllers = require("../controllers/controllers")


// router.get("/home", projectControllers.home)

router.get("/agregar", projectControllers.agregarMes)
router.get("/", projectControllers.view)
router.post('/save-mes', projectControllers.saveMes)
router.get('/delete/:id',projectControllers.delete)
router.get('/actualizar/:id',projectControllers.update)
router.post('/actualizar/guardar',projectControllers.saveUpdate)



module.exports = router
