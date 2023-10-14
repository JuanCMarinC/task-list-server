const tareas = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar JavaScript', completed: true },
    { id: 3, description: 'Hacer ejercicio', completed: false }
  ];

const port = 3000;
const express = require("express");
const app = express();

const views = require("./routes/list-view-router")(tareas);
const edits = require("./routes/list-edit-router")(tareas);

app.use(express.json());
app.use('/routes/list-view-router', views);
app.use('/routes/list-edit-router', edits);



app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

module.exports = app;