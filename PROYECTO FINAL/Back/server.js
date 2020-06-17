/**
Portal de búsqueda de proveedores B2B, con información histórica de los usuarios (clientes), para que
 otros clientes encuentren al proveedor perfecto, basado en score de interacciones anteriores.
 ANÓNIMO :

●Visualizar la landing 
●Búsqueda por: 
	○Localidad 
	○Precio 
	○Operaciones de compraventa 
	○Score. 

●Login 
●Registro (le llega email de registro) USUARIOS REGISTRADOS: (la misma persona puede ser cliente y proveedor) 
●Gestión del perfil (cambios...) 
●Búsqueda por: 
	○Localidad 
	○Precio 
	○Operaciones de compraventa 
	○Score 

●Solicitud de reserva (le llega email de confirmación) 
●Publicar un producto/servicio ofrecido. 
●Aceptar reserva de producto/servicio ofrecido. 
●Valorar al proveedor
 * 
 */

require('dotenv').config();

//AÑADIDO PARA LOGS:(4 lineas)

var logger = require('morgan');
var createError = require('http-errors');
var path = require('path');

var validator = require('validator');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const nodeMailer = require('nodemailer');
const server = express(); // necesito esto?
//const Fattura24API = require('fattura24-api-js')

// AÑADIDO PARA LOGS: view engine setup (2 lineas)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// AÑADIDO PARA LOGS (2 lineas)
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

const { register, login, updateUser } = require('./routes/users');
const { isAuthenticated } = require('./routes/auth')
const { add, list } = require('./routes/events');

const port = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Añadido de skeleton. No sé para qué sirven:
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

const miMiddleware = (req, res, next) => {
    console.log('código que se ejecuta antes de procesar el endpoint');
    next();
}

const miMiddlewareWrapper = (req, res, next) => {
    return miMiddleware;
}

app.use(miMiddleware);

app.use(miMiddlewareWrapper());

// add middleware to parse the json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));

// LOS SIGUIENTES MIDDLEWARE NO SÉ SI ESTÁN BIEN O SOBRAN (los cogí de una libreria)
// catch 404 error
server.use(function (req, res, next) {
    const err = new Error('Requested URL Not Found !');
    err.status = 404;
    next(err);
});

//Error handler
server.use(function (err, req, res, next) {
    res.locals.message = err.message;

    // render the error page
    res.status(err.status || 500);
    res.send({
        "error": {
            "message": res.locals.message
        }
    });
});


// register
app.post('/user', register);

// login
app.post('/user/login', login);

// gestion del perfil : tengo problemas con la función updateUser
app.put('/user', isAuthenticated, updateUser);

// post proveedores:
app.post('/suppliers', isAuthenticated, add);

// get proveedores (sin autorizacion y con la opción de filtrar)
app.get('/suppliers', list);

// solicitar reserva y enviar email
app.post('/send-email', isAuthenticated, emailRequest = async (req, res) => {
    try {

        const email = req.body['email'];
        const name = req.body['name'];
        const number = req.body['number'];
        const request = req.body['request']


        if (validator.isEmail(email) === false) {

            return res.status(400).send({
                "error": {
                    "message": "Please provide a valid email"
                }
            });
        }

        if (validator.isNumeric(number) === false) {

            return res.status(400).send({
                "error": {
                    "message": "Please provide a valid number"
                }
            });
        }

        if (!email || !number || !name) {
            return res.status(400).send({
                "error": {
                    "message": "Some fields are missing"
                }
            });
        }

        let transporter = nodeMailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            auth: {
                user: 'pps@marosavat.com',
                pass: 'Iva030201'
            }
        });
        let mailOptions = {
            from: '"Pedro Pestana" <pps@marosavat.com>',
            to: 'pps@marosavat.com',
            subject: 'Booking request',
            html: `<b><h1>Prueba de email</h1> </b> || <b> Nombre: ${name} </b> || <b> Number: ${number} </b> || <b> Email: ${email} </b> || Solicitud: ${request} ||`

        };

        transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                throw new error('Something went wrong')
            }
            console.log(data);
            return res.status(200).send({
                "status": true,
                "message": "Email Sent Successfully."
            });
        });

    } catch (err) {
        console.log(err);
        return res.status(200).send({
            "error": {
                "message": "Something went wrong"
            }
        });
    }
})

// enviar email de confirmación de reserva

app.post('/response-email', isAuthenticated, emailRequest = async (req, res) => {
    try {

        const email = req.body['email'];

        if (!email) {
            return res.status(400).send({
                "error": {
                    "message": " Email required"
                }
            });
        }

        let transporter = nodeMailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            auth: {
                user: 'pps@marosavat.com',
                pass: 'Iva030201'
            }
        });
        let mailOptions = {
            from: '"Pedro Pestana" <pps@marosavat.com>',
            to: email,
            subject: 'Booking confirmation',
            html: `<b><h1>Tu solicitud ha sido confirmada</h1> `

        };

        transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                throw new error('Something went wrong')
            }
            console.log(data);
            return res.status(200).send({
                "status": true,
                "message": "Email Send Successfully."
            });
        });

    } catch (err) {
        console.log(err);
        return res.status(200).send({
            "error": {
                "message": "Something went wrong"
            }
        });
    }
})


// enviar factura PT
/*
var moloni = new Moloni({
    client_id: '195074',
    client_secret: '6f2c1e1605069694258da8ecccdfbee31a577949',
    username: 'pps@marosavat.com',
    password: 'Achuchalavida0',
    sandbox: true
})

moloni.users('getMe', function (error, result) {
    if (error)
        return console.error(error);

    console.log(result);
})
*/


var http = require("https");

var options = {
  "method": "POST",
  "hostname": "marosavatslu.app.invoicexpress.com",
  "port": null,
  "path": "/:document-type.json?api_key=1a5c462c099f12c5d8e4491a7f79465af0443b43",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ shipping:
    { date: '03/12/2017',
      due_date: '03/12/2017',
      loaded_at: '02/12/2017 19:00:00',
      address_from:
       { detail: 'Rua 5',
         city: 'Lisboa',
         postal_code: '1000-555',
         country: 'Portugal' },
      address_to:
       { detail: 'Avenida 10',
         city: 'Porto',
         postal_code: '2000-555',
         country: 'Portugal' },
      client:
       { name: 'Client Name',
         code: 'A1'},
      items:
       [ { name: 'Item Name',
           description: 'Item Description',
           unit_price: '100',
           quantity: '5' } ] } }));
 req.end();

// enviar factura IT






app.use((error, req, res, next) => {

    res
        .status(error.status || 500)
        .send({ status: 'error', message: error.message })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});









