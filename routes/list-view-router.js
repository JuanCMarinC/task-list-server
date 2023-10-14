
const express = require("express");
const router = express.Router();
router.use(express.json());

module.exports = function (tareas) {
    router.get("/", function (req, res) {
        res.send(tareas);
        });  
      
    router.get("/:estado", function (req, res) {
        let resultados = "true";

        if(req.params.estado.toString() == "true"){
            resultados = tareas.filter( tarea => tarea.completed === true);
            res.send(resultados);
        }else if(req.params.estado.toString()=="false"){
            resultados = tareas.filter( tarea => tarea.completed === false);
            res.send(resultados);
        }else{res.send('parametro no valido');}
        
        });  
     
        return router;    
    }
