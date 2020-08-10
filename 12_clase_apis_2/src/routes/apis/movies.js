const express = require('express');
const router = express.Router();

const moviesApiController = require('../../controllers/apis/moviesApiController');

// Toda la coleccion ---> /movies
router.get("/", moviesApiController.index);

// Un recurso ---> /movies/:id
router.get("/:id", moviesApiController.show);

// Crear un recurso ---> /movies
router.post("/", moviesApiController.create);

// Editar un recurso ---> /movies/:id
router.put("/:id", moviesApiController.edit);

// Borrar un recurso ---> /movies/:id 
router.delete("/:id", moviesApiController.destroy);

module.exports = router;