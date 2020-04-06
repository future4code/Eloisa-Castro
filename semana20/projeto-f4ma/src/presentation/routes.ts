import express, { Request, Response } from "express";
import { createBandEndpoint } from "./endpoints/createBand";
import { getBandEndpoint } from "./endpoints/getBand";
import { addShowEndpoint } from "./endpoints/addShow";
import { getShowsEndpoint } from "./endpoints/getShows";

const app = express();
app.use(express.json()); // Linha mágica (middleware)


app.post('/createBand', createBandEndpoint)
app.get('/getBand', getBandEndpoint)
app.post('/addShow', addShowEndpoint)
app.get('/getShows', getShowsEndpoint)

export default app;
