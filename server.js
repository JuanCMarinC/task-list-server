

const port = 3000;
const express = require("express");
const app = express();

const views = require("./routes/list-view-router");
const edits = require("./routes/list-edit-router");

app.use(express.json());
app.use('/', views);
app.use('/', edits);



app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

module.exports = app;