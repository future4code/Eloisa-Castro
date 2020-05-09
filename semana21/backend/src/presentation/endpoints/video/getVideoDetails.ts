import { Request, Response } from "express";
import { VideoDatabase } from "../../../data/videoDatabase";
import { GetVideoDetailsUC } from "../../../business/usecases/video/getVideoDetails";

export const getVideoDetailsEndpoint = async (req: Request, res: Response) => {
  try {
    const getVideoDetailsUC = new GetVideoDetailsUC(
      new VideoDatabase(),
    );

    const result = await getVideoDetailsUC.execute({
      id: String(req.params.id),
      token: req.headers.auth as string
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
};