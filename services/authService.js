const  jwt = require('jsonwebtoken');
const { authConfig } = require('../config/authConfig');

const generateToken = (user) => {   
    return jwt.sign({id: user.id}, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
    }); 
};
const verifyToken = (token) => {
    return jwt.verify(token, authConfig.secret);
};  
module.exports = {
    generateToken,
    verifyToken,
};