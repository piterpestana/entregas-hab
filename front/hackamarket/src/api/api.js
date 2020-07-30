// COSAS QUE HE INSTALADO
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

// COSAS QUE USA LA APP
app.use(cors())
app.use( bodyParser.urlencoded ( { extended: true } ) )
app.use(bodyParser.json())
// TUS DATOS DE CONEXIÓN A LA BBBDD
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bbdd'
})
// HACIENDO LA CONEXIÓN A LA BBDD
connection.connect( error => {
if(error) throw error
console.log('BBDD UP')
} )
// PUERTO DE CONEXIÓN DEL SERVICIO
const PORT = 3050
// CONEXIÓN DEL SERVICIO
app.listen( PORT, () => console.log('API UP') )



// API QUE OBTIENE LOS PRODUCTOS
app.get('/productos', (req, res) => {

    const sql = 'SELECT * FROM listaproductos'


    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('NO HAY PRODUCTOS :(')
        }
    })
})


// API QUE OBTIENE LOS CLIENTES
app.get('/clientes', (req, res) => {

    const sql = 'SELECT * FROM listaclientes'


    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('NO HAY CLIENTES :(')
        }
    })
})

// AÑADIR CLIENTES A LA BASE DE DATOS

app.post('/add-clients', (req, res) => {

    //SECUENCIA SQL
    const sql = 'INSERT INTO listaclientes SET ?'

    //OBJETO DE DATOS DE NUEVO CLIENTE
    const nuevoCliente = {
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        passw: req.body.passw,
        email: req.body.email,
        foto: req.body.foto
    }

    //CONEXIÓN A LA BBDD
    connection.query(sql, nuevoCliente, error => {
        if (error) throw error
        console.log('Cliente creado con éxito')
    })

})


// ACTUALIZANDO CLIENTES EN LA BBDD

app.put('/update/:id', (req, res) => {

    // datos que recibimos de la vista
    const id = req.params.id
    const nombre = req.body.nombre
    const usuario = req.body.usuario
    const passw = req.body.passw
    const email = req.body.email
    const foto = req.body.foto

    // secuencia SQL

    const sql = `UPDATE listaclientes SET nombre='${nombre}', usuario='${usuario}', passw='${passw}', email='${email}', foto='${foto}' WHERE id=${id}`

    connection.query(sql, error => {
        if (error) throw error
        console.log('Cliente actualizado')

    })
}

)
// BORRANDO CLIENTES EN LA BBDD

app.delete('/delete/:id', (req, res) => {

    // DATOS QUE LLEGAN A LA VISTA
    const id = req.params.id

    // SECUENCIA SQL

    const sql = `DELETE FROM listaclientes WHERE id=${id}`

    // CONEXIÓN A LA BBDD

    connection.query(sql, error => {
        if (error) throw error
        console.log('cliente borrado')

    })
}

)

