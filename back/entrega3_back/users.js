const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// just for academic purpose until database module is ready
const bd = require('./bd_mock');


const login = async (req, res) => {
    const { email, password } = req.body;

    // buscar email en la bbdd
    // nos devolverá un JSON para el usuario con un ID, un role, y su password
    const user = bd.getUser(email);



    if (!user) {
        res.status(404).send();
        return;
    }

    // comprobar la password (ojo! con bcrypt)
    // error si no matchean
    const passwordIsvalid = await bcrypt.compare(password, user.password);

    if (!passwordIsvalid) {
        res.status(401).send();
        return;
    }

    const tokenPayload = { 
        id: user.id, 
        role: user.role,
        email: user.email
    };

    const token = jwt.sign(tokenPayload, process.env.SECRET, {
        expiresIn: '1d'
    });

    res.json({
        token
    })
}

module.exports = {
    login,
}
