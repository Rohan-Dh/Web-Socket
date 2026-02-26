import "dotenv/config";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function initDB() {
    try {
        const connection = await pool.getConnection();
        console.log("Database connected successfully");
        connection.release();
    } catch (err) {
        console.log("Database connection failed:", err.message);
    }
}

initDB();

export default pool;