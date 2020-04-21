import { Request, Response } from "express";
import { GetAllVideosUC } from "../../../business/usecases/video/getAllVideos";
import { VideoDatabase } from "../../../data/videoDatabase";

export const getAllVideosEndpoint = async (req: Request, res: Response) => {
  try {
    const getAllVideosUC = new GetAllVideosUC(
      new VideoDatabase()
    )

    const result = await getAllVideosUC.execute({
      page: Number(req.params),
      token: req.headers.auth as string
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};