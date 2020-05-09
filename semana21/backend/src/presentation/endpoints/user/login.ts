import { Request, Response } from "express";
import { UsersDatabase } from "../../../data/userDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { BcryptService } from "../../../services/bcryptService";
import { LoginUC } from "../../../business/usecases/user/login";

export const loginEndpoint = async (req: Request, res: Response) => {
  try {
    const loginUC = new LoginUC(
      new UsersDatabase(),
      new JwtAuthorizer(),
      new BcryptService(),
    );

    const result = await loginUC.execute({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
};
