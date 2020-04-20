import { Request, Response } from "express";
import { VideoDatabase } from "../../data/videoDatabase";
import { DeleteVideoUC } from "../../business/usecases/deleteVideo";

export const deleteVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const deleteVideoUC = new DeleteVideoUC(
      new VideoDatabase(),
    );

    const result = await deleteVideoUC.execute({
      id: req.query.id as string,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
};