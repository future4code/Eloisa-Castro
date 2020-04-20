import express from "express";
import { signupEndpoint } from "./endpoints/signup";
import { loginEndpoint } from "./endpoints/login";
import { changePasswordEndpoint } from "./endpoints/changePassword";
import { uploadVideoEndpoint } from "./endpoints/uploadVideo";
import { getUserVideoEndpoint } from "./endpoints/getUserVideo";
import { editVideoEndpoint } from "./endpoints/editVideo";
import { deleteVideoEndpoint } from "./endpoints/deleteVideo";
import { getVideoDetailsEndpoint } from "./endpoints/getVideoDetails";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/signup', signupEndpoint)
app.post('/login', loginEndpoint)
app.post('/changePassword', changePasswordEndpoint)
app.post('/uploadVideo', uploadVideoEndpoint)
app.get('/getUserVideo', getUserVideoEndpoint)
app.post('/editVideo', editVideoEndpoint)
app.delete('/deleteVideo', deleteVideoEndpoint)
app.get('/getVideoDetails', getVideoDetailsEndpoint)

export default app;