const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host:process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        // Exit the process with failure
    }
}
module.exports = pool;