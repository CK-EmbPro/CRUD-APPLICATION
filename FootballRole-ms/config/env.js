const dotenv = require('dotenv');
dotenv.config();

module.exports={
    port: process.env.Port,
    dbUrl: process.env.dbUrl
}
