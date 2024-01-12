const pg = require('pg');
require('dotenv').config();

const Client = pg.Client;

const dbConnection = new Client
({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD
});

async function dbSmokeTest(){
    try {
        await dbConnection.connect()
        const res = await dbConnection.query('SELECT VERSION()');
        console.log(res.rows[0].version);
    } catch (error) {
        throw Error('Connection to DB failed! Check Credentials and if DB is running (Smoketest). --- ' + error)
    }
}

module.exports = { dbSmokeTest, dbConnection }