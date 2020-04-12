import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

export default app;
