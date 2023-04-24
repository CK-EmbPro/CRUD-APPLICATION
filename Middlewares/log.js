module.exports.log= function(req, res, next){
    console.log(`Incoming ${req.method} at ${req.originalUrl} on ${new Date().toUTCString()}`);
    next();
};


