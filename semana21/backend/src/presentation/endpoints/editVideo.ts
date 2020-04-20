import { Request, Response } from "express";
import { UsersDatabase } from "../../data/userDatabase";
import { JwtAuthorizer } from "../../services/jwtAuthorizer";
import { BcryptService } from "../../services/bcryptService";
import { EditVideoUC } from "../../business/usecases/editVideo";
import { VideoDatabase } from "../../data/videoDatabase";

export const editVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const editVideoUC = new EditVideoUC(
      new VideoDatabase(),
    );

    const result = await editVideoUC.execute({
      token: req.body.token,
      id: req.body.id,
      title: req.body.title,
      description: req.body.description
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
};