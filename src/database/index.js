//exportando biblioteca
const mysql = require("mysql2")
//passando informações do banco de dados para exportar
const pool = mysql.createConnection({
//host significa "hospedeiro"    
host: "localhost",
user: "root",
password: "",
database: "pi_auditorio"
}).promise()
//await "espere uma promessa"

async function connection() {
    await pool.connect((err) => {
        if(err) {
            throw err
        }
        console.log("MySql connected...")
    })
    pool.destroy()
}
module.exports = {connection, pool}