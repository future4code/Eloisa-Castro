import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/users/signup";
import { getUserByEmailEndpoint } from "./endpoints/users/getUserByEmail";
import { editUserEndpoint } from "./endpoints/users/editUser";
import { getAllUsersEndpoint } from "./endpoints/users/getAllUsers";
import { deleteUserEndpoint } from "./endpoints/users/deleteUser";
import { createPostEndpoint } from "./endpoints/posts/createPost";
import { editPostEndpoint } from "./endpoints/posts/editPost";
import { getPostByIdEndpoint } from "./endpoints/posts/getPostById";
import { deletePostEndpoint } from "./endpoints/posts/deletePost";

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);
app.get("/user", getUserByEmailEndpoint);
app.get("/user/all", getAllUsersEndpoint);
app.post("/user/edit", editUserEndpoint);
app.delete("/user/:id", deleteUserEndpoint);

app.post("/post", createPostEndpoint);
app.post("/post/edit", editPostEndpoint);
app.get("/post/:id", getPostByIdEndpoint);
app.delete("/post/:id", deletePostEndpoint);

export default app;
