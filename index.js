
const rodar = require("./oraculo.js");
const express = require('express');
const { response } = require("express");

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Server is up'});
})

app.listen(3333)

rodar //Oraculo