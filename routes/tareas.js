const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crear una tarea
//api/tarea
router.post(
  "/",
  auth,
  [check("nombre", "el nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "el proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

//Obtener las tareas por proyecto
router.get('/',
auth,
tareaController.obtenerTareas)

//Actualizar Tarea
router.put('/:id',
auth,
tareaController.actualizarTarea
);

//eliminar tarea
router.delete('/:id',
auth,
tareaController.eliminarTarea);

module.exports = router;
