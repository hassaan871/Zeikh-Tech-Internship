
const authenticator = (req, res, next)=>{
    console.log("Authenticatingg.....")
    
    next();
}

module.exports = authenticator;
