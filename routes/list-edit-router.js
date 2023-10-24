const express = require("express");
const router = express.Router();
router.use(express.json());
const  tareas = require('../datos.js');


router.post('/', (req, res) => {
  const task = req.body;
  tareas.push(task);
  res.json({ message: 'Tarea creada con éxito', task });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  const index = tareas.findIndex((t) => t.id == id);
  if (index === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  tareas[index] = updatedTask;
  res.json({ message: 'Tarea actualizada con éxito', tareas: updatedTask });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = tareas.findIndex((t) => t.id == id);
  if (index === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }
  tareas.splice(index, 1);
  res.json({ message: 'Tarea eliminada con éxito' });
});

module.exports = router;