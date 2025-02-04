
const logger = (req, res, next)=>{
    console.log("Loggiingg....");
    next();
}

module.exports = logger;