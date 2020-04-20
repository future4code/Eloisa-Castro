import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { loginEndpoint } from "./endpoints/login";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/signup', signupEndpoint)
app.post('/login', loginEndpoint)

export default app;