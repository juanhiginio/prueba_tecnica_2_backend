import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongoUri = process.env.DATABASE_URL || "";

async function databaseConnection() {
    try {
        await mongoose.connect(mongoUri);
        console.log('[DataBase] DataBase Connected successfully');
    } catch (err) {
        console.error('[DataBase] Error connecting to a DataBase ->', err);
    }
};

export default databaseConnection;