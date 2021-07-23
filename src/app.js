const express = require('express');
const Router = require('../routes/router');
const path = require('path');

const app = express();
const publicDirectory = path.join(__dirname, '../public');

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(publicDirectory));
app.use('/', Router);

app.listen(5000, () => {
    console.log("server started");
});