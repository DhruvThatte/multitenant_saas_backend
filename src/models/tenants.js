const db = require('../config/database'); // Import the database connection

class TenantModel {
    //Create tenants table
    static async createTable (){
        const query = `
            CREATE TABLE IF NOT EXISTS tenants(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                slug VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                phone VARCHAR(20),
                subscription_plan VARCHAR(50) NOT NULL,
            )`
    }
}