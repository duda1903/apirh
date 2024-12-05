require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,      
    user: process.env.DB_USER,      
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,     
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



pool.getConnection((err, connection) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message); // Exibe erro
  } else {
    console.log("Conexão bem-sucedida com o banco de dados!"); // Mensagem de sucesso
    connection.release();
  }
});

module.exports = pool;
