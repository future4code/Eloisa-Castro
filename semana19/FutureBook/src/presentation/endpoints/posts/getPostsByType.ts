import { Request, Response } from "express";
import { PostDB } from "../../../data/postDB";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { GetPostsByTypeUC } from "../../../business/usecase/posts/getPostsByType";

export const getPostsByTypeEndpoint = async (req: Request, res: Response) => {
  try {
    const getPostsByTypeUC = new GetPostsByTypeUC(
      new PostDB(),
      new JwtAuthorizer()
    );

    const result = await getPostsByTypeUC.execute({
      token: req.headers.auth as string,
      type: req.query.type,
      page: req.query.page
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
