import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";

import Connection from './database/db.js';
import Routes from './routes/route.js';

dotenv.config();

const app = express();

/* Middleware */
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* Routes */
app.use('/', Routes);

/* DB Connection */
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

/* Port (K8s/Docker friendly) */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
