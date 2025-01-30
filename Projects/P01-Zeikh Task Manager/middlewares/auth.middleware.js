const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({error: "Access denied. No token provided"});
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }catch(ex){
        res.json({error: "Invalid token"});
    }
}

module.exports = auth;