import { Request, Response } from "express";
import { VideoDatabase } from "../../data/videoDatabase";
import { GetVideoDetailsUC } from "../../business/usecases/getVideoDetails";

export const getVideoDetailsEndpoint = async (req: Request, res: Response) => {
  try {
    const getVideoDetailsUC = new GetVideoDetailsUC(
      new VideoDatabase(),
    );

    const result = await getVideoDetailsUC.execute({
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