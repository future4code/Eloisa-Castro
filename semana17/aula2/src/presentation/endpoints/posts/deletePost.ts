import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { DeletePostUC } from "../../../business/usecase/posts/deletePost";

export const deletePostEndpoint = async (req: Request, res: Response) => {
  try {
    const deletePostUC = new DeletePostUC(new PostDB());
    await deletePostUC.execute({
      id: req.params.id
    });

    res.status(200).send();
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};
