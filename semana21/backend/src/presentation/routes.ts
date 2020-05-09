import express from "express";
import { signupEndpoint } from "./endpoints/user/signup";
import { loginEndpoint } from "./endpoints/user/login";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndpoint } from "./endpoints/video/uploadVideo";
import { getUserVideoEndpoint } from "./endpoints/video/getUserVideo";
import { editVideoEndpoint } from "./endpoints/video/editVideo";
import { deleteVideoEndpoint } from "./endpoints/video/deleteVideo";
import { getVideoDetailsEndpoint } from "./endpoints/video/getVideoDetails";
import { getAllVideosEndpoint } from "./endpoints/video/getAllVideos";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/signup', signupEndpoint)
app.post('/login', loginEndpoint)
app.post('/changePassword', changePasswordEndpoint)
app.post('/uploadVideo', uploadVideoEndpoint)
app.get('/getUserVideo/', getUserVideoEndpoint)
app.post('/editVideo', editVideoEndpoint)
app.delete('/deleteVideo/:id', deleteVideoEndpoint)
app.get('/getVideoDetails/:id', getVideoDetailsEndpoint)
app.get('/getAllVideos', getAllVideosEndpoint)

export default app;