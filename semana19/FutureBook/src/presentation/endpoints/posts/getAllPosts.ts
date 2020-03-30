import { Request, Response } from "express";
import { PostDB } from "../../../data/postDB";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { GetAllPostsUC } from "../../../business/usecase/posts/getAllPosts";

export const getAllPostsEndpoint = async (req: Request, res: Response) => {
  try {
    const getAllPostsUC = new GetAllPostsUC(
      new PostDB(),
      new JwtAuthorizer()
    );

    const result = await getAllPostsUC.execute({
      token: req.headers.auth as string,
      page: req.query.page
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
