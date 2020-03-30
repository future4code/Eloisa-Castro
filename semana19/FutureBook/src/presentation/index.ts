import express from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginEndpoint } from "./endpoints/users/login";
import { beFriendEndpoint } from "./endpoints/users/beFriend";
import { undoFriendEndpoint } from "./endpoints/users/undoFriend";
import { createPostEndpoint } from "./endpoints/posts/createPost";
import { getAllPostsEndpoint } from "./endpoints/posts/getAllPosts";
import { getPostsByTypeEndpoint } from "./endpoints/posts/getPostsByType";

const app = express();
app.use(express.json());

app.post('/createUser', createUserEndpoint)
app.post('/login', loginEndpoint)
app.post('/beFriend', beFriendEndpoint)
app.post('/undoFriend', undoFriendEndpoint)
app.post('/createPost', createPostEndpoint);
app.get('/allPosts', getAllPostsEndpoint)
app.get('/getPosts', getPostsByTypeEndpoint)

export default app;
