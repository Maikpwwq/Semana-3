const config = require('../secret/config');
const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// iniciarSesion
exports.signin = async (req, res, next) => {
    try {

        const user = await models.users.findOne({where: {email: req.body.email}});

        if (user) {
            const passwordIsValid = bcrypt.compareSync( req.body.password, user.password );

            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email
                }, config.secret , {
                    // Expira en 24 horas
                    expiresIn: 86400,
                });
                res.status(200).send({
                    auth: true,
                    accessToken: token
                });
                return token                
            } else {
                res.status(401).send({
                    auth: false,
                    accessToken: null,
                    error: 'Contraseña invalida'
                });
            };

        } else {
            res.status(404).json({
                error: 'Error. Usuario no encontrado'
            });
        };

    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }
}; 

// registrarUsuario
exports.signup = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await models.users.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};