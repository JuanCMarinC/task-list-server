const express = require("express");
const router = express.Router();
router.use(express.json());

module.exports = function (tareas) {
    router.post("/agregar", (req, res) => {
      if (Object.keys(req.body).length === 0){
        res.status(400).json({ error: 'El cuerpo de la petición está vacío' });
      }else if(Number.isInteger(req.body.id) && typeof req.body.completed === 'boolean'){
          const nuevoElemento = req.body; // El nuevo elemento enviado en el cuerpo de la solicitud
          tareas.push(nuevoElemento); // Agregar el nuevo elemento al array
          res.send("Elemento agregado con éxito");   
      }else{
          res.send("Elemento no valido tenga encuenta que el estado solo acepta valores booleanos y el id numericos");   
      }
                 
        
        
      });
      
    router.put("/actualizar/:id", (req, res) => {
      if(Number.isInteger(req.body.id) && typeof req.body.completed === 'boolean'){

        const id = req.params.id; // ID del elemento a actualizar
        const nuevoDatos = req.body; // Nuevos datos para el elemento
        const elementoExistente = tareas.find((elemento) => elemento.id == id);
      
        if (!elementoExistente) {
          res.status(404).send("Elemento no encontrado");
        } else {
          // Actualizar el elemento con los nuevos datos
          Object.assign(elementoExistente, nuevoDatos);
          res.send("Elemento actualizado con éxito");
        }
       
    }else{
      res.send("Elemento no valido tenga encuenta que el estado solo acepta valores booleanos y el id numericos");   
    }
        
      });

    router.delete("/eliminar/:id", (req, res) => {
        const id = req.params.id; // ID del elemento a eliminar
        const elementoIndex = tareas.findIndex((elemento) => elemento.id == id);
      
        if (elementoIndex === -1) {
          res.status(404).send("Elemento no encontrado");
        } else {
          tareas.splice(elementoIndex, 1); // Eliminar el elemento del array
          res.send("Elemento eliminado con éxito");
        }
      });
     
        return router;    
    }
