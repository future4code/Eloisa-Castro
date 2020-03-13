import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { EditPostUC } from "../../../business/usecase/posts/editPost";
import { GetPostByIdUC } from "../../../business/usecase/posts/getPostById";

export const getPostByIdEndpoint = async (req: Request, res: Response) => {
  try {
    const getPostByIdUC = new GetPostByIdUC(new PostDB());
    const result = await getPostByIdUC.execute({
      id: req.params.id
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
