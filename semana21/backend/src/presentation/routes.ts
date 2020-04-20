import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/signup', signupEndpoint)

export default app;