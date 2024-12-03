import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import databaseConnection from './db/config.js';

import departamentRoutes from './routes/departamentRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT_ENV || 3001;

databaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Rutas
app.use(departamentRoutes);

app.listen(PORT, () => {
    console.log(`[SERVER] Server running in port: http://localhost:${PORT}`);
});
