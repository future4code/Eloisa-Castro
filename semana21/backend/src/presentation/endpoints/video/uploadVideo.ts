import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { UploadVideoUC } from "../../../business/usecases/video/uploadVideo";
import { VideoDatabase } from "../../../data/videoDatabase";

export const uploadVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const uploadVideoUC = new UploadVideoUC(
      new VideoDatabase(),
      new JwtAuthorizer()
    )

    const result = await uploadVideoUC.execute({
      title: req.body.title,
      description: req.body.description,
      video: req.body.video,
      token: req.headers.token as string,
    })

    res.status(200).send(result)

  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
}