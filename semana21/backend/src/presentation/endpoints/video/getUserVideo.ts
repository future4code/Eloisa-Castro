import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { VideoDatabase } from "../../../data/videoDatabase";
import { GetUserVideoUC } from "../../../business/usecases/video/getUserVideo";

export const getUserVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const getUserVideoUC = new GetUserVideoUC(
      new VideoDatabase(),
      new JwtAuthorizer()
    )

    const result = await getUserVideoUC.execute({
      userId: req.query.id as string,
      token: req.headers.auth as string,
    })

    res.status(200).send(result)

  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
}