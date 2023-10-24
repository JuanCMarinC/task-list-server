
const express = require("express");
const router = express.Router();
router.use(express.json());
const  tareas = require('../datos.js');

router.get('/completed', (req, res) => {
    const completedTasks = tareas.filter((task) => task.completed === true);
    res.json(completedTasks);
  });
  
  router.get('/incomplete', (req, res) => {
    const incompleteTasks = tareas.filter((task) => task.completed === false);
    res.json(incompleteTasks);
  });

router.get("/", function (req, res) {
  res.json(tareas);
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const task = tareas.find((t) => t.id == id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
  });
 
  module.exports = router;