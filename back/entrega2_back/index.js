/**
 * Un cliente nos pide realizar un sistema para gestionar eventos culturales.
 * Necesita dar de alta eventos, que pueden ser de tipo 'concierto', 'teatro' o 
 * 'monólogo'. Cada uno se caracteriza por un 'nombre', 'aforo' y 'artista'.
 * Opcionalmente pueden incluir una descripción.
 * 
 * El cliente necesitará una API REST para añadir conciertos y poder obtener
 * una lista de los existentes.
 * 
 * El objetivo del ejercicio es que traduzcas estos requisitos a una descripción
 * técnica, esto es, decidir qué endpoints hacen falta, qué parámetros y cuáles 
 * son los código de error a devolver
 * 
 * Notas:
 *    - el conocimiento necesario para realizarlo es el adquirido hasta la clase del
 *      miércoles
 *    - llega con un endpoint GET y otro POST
 *    - el almacenamiento será en memoria, por tanto cuando se cierre el servidor
 *      se perderán los datos. De momento es aceptable esto.
 * 
 */


const axios = require('axios');
const bodyParser = require('body-parser');
const csvtojson = require('csvtojson');
const express = require('express');
const axiosCacheAdapter = require('axios-cache-adapter');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let eventos = []

app.post('/eventos', (req, res) => {

  let data = {

    tipo: req.body.tipo,
    nombre: req.body.nombre,
    aforo: req.body.aforo,
    artista: req.body.artista,
    descripcion: req.body.descripcion,

  }

  let search = eventos.filter(event => event.nombre === req.body.nombre)

  if (req.body.tipo.toUpperCase().indexOf('CONCIERTO') === -1 &&
    req.body.tipo.toUpperCase().indexOf('MONOLOGO') === -1 &&
    req.body.tipo.toUpperCase().indexOf('TEATRO') === -1
  ) {
    res.status(400).send('Esto no es un evento');
    return;

  }

  if (req.body.tipo == undefined ||
    req.body.nombre == undefined ||
    req.body.aforo == undefined ||
    req.body.artista == undefined) {
    res.status(400).send('Te falta algún campo');
    return;
  }

  if (search.length !== 0) {
    res.status(409).send('Este evento ya está registrado');
    return;
  }
  else {
    eventos.push(data);
    res.send();

  }

});

app.get('/eventos', (req, res) => {

  res.json(eventos);
});


app.listen(3000);
