import { Request, Response } from "express";
import { EditPostUC } from "../../../business/usecase/posts/editPost";
import { PostDB } from "../../../data/postDataBase";

export const editPostEndpoint = async (req: Request, res: Response) => {
  try {
    const editPostUC = new EditPostUC(new PostDB())
    const result = editPostUC.execute({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      image: req.body.image
    })
    res.status(200).send(result)
  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    })
  }
  
  /**
   * ISSUE 1
   *
   * Perceba que o UseCase e o DataBase já estão preparados,
   * você deve terminar a presentation
   */
};
