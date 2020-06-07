/**
 * Una tienda quiere ofrecer sus servicios online. 
 * Para ello se dispone a digitalizar su catálogo y mostrarlo 
 * en una web. Nos piden realizar la parte de backend, que debe
 * permitir añadir y modificar productos, para lo cual será 
 * necesario que el usuario esté autenticado; y permitirá también 
 * listar los productos existentes, que se podrá acceder 
 * libremente.
 * 
 * Notas:
 *   - no se pueden dar de alta usuarios. Deberá existir uno por
 * defecto para las tareas de administración.
 *   - la lista de productos puede llegar a ser muy grande, así 
 * que el usuario deberá poder filtrarla mediante parámetros
 * enviados en la `querystring`
 *   - la estructura de un producto es la siguiente:
 *       {
 *           name: '',
 *           stock: <número de productos disponibles de este modelo>
 *           precio: 100
 *       }
 * 
 * 
 * 
 */

require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const { login } = require('./users');
const { isAuthenticated } = require('./auth')
const { add, list, update } = require('./events');

const port = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const miMiddleware = (req, res, next) => {
    console.log('código que se ejecuta antes de procesar el endpoint');
    next();
}

const miMiddlewareWrapper = (req, res, next) => {
    return miMiddleware;
}

app.use(miMiddleware);          

app.use(miMiddlewareWrapper());  

// login

app.post('/user/login', login);


// post productos:

app.post('/products', isAuthenticated, add);

app.use((error, req, res, next) => {

    res
        .status(error.status || 500)
        .send({status: 'error', message: error.message})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Actualizar productos:

app.put('/products', isAuthenticated, update);


// get productos (sin autorizacion y con la opción de filtrar)
app.get('/products', list);




