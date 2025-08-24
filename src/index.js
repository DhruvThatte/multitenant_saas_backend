const express = require('express');
const cors = require('cors');
require('dotenv').config();


const connectDB = require('./config/database'); // importing database
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());// Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

//Test route
app.get('/', (req, res) => {
    res.send('Welcome to the SaaS Backend API');
});

app.get('/health',async (req, res) => {
    try{
        const db = require('./config/database'); // Import the database connection }
        await db.query('SELECT 1'); // Simple query to check database connectivity
        res.status(200).json({ message: 'API is healthy and database is connected' });
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(500).json({ message: 'API is unhealthy', error: error.message });
    }

});

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});