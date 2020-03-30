import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecase/posts/createPost";
import { PostDB } from "../../../data/postDB";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const createPostEndpoint = async (req: Request, res: Response) => {
  try {
    const createPostUC = new CreatePostUC(
      new PostDB(),
      new JwtAuthorizer()
    );

    const result = await createPostUC.execute({
      photo: req.body.photo,
      description: req.body.description,
      type: req.body.type,
      token: req.headers.auth as string
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
