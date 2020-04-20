import { Request, Response } from "express";
import { GetAllVideosUC } from "../../business/usecases/getAllVideos";
import { VideoDatabase } from "../../data/videoDatabase";

export const getAllVideosEndpoint = async (req: Request, res: Response) => {
  try {
    const getAllVideosUC = new GetAllVideosUC(
      new VideoDatabase()
    )

    const result = await getAllVideosUC.execute({
      page: Number(req.query.page)
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};