const {dbConnection} = require("./db_connection");

class UserAgent {
    getAllUsers() {
        console.log(dbConnection)
    }
}


module.exports = { UserAgent }