const jwt = require('jsonwebtoken');
const { authConfig } = require('../config/authConfig');

const authMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        next();
    });
};
module.exports = authMiddleware