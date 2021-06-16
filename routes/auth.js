//Rutas para auth usuarios
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");
const authController = require("../controllers/authController");
//Iniciar sesion
//api/auth
router.post("/", authController.autenticarUsuario);
//obitene el usuario auth
router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
