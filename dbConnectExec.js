const sql = require('mssql')

const rockwellConfig = require('./config.js')

const config = {
    user: rockwellConfig.DB.user,
    password: rockwellConfig.DB.password,
    server:  rockwellConfig.DB.server, // You can use 'localhost\\instance' to connect to named instance
    database: rockwellConfig.DB.database,
}

var myMovies;

async function executeQuery(aQuery){
    var connection = await sql.connect(config)
    var result = await connection.query(aQuery)

   return result.recordset
}

//executeQuery(`SELECT * FROM movie LEFT JOIN genre ON genre.GenrePK = movie.GenreFK`)
module.exports = {executeQuery: executeQuery}