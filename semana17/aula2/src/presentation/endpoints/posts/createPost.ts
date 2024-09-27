import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecase/posts/createPost";
import { PostDB } from "../../../data/postDataBase";

export const createPostEndpoint = async (req: Request, res: Response) => {
  try {
    const createPostUC = new CreatePostUC(new PostDB());
    const result = await createPostUC.execute({
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      userId: req.body.userId,
      image: req.body.image
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
