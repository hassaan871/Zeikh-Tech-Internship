
const validateAminMiddleware = (req, res, next) => {
    if(!req.body.isAdmin) return res.status(403).json({error: "Access denied. Amins only!"});
    next(); 
}

module.exports = validateAminMiddleware;