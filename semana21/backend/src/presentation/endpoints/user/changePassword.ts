import { Request, Response } from "express";
import { UsersDatabase } from "../../../data/userDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { BcryptService } from "../../../services/bcryptService";
import { ChangePasswordUC } from "../../../business/usecases/user/changePassword";

export const changePasswordEndpoint = async (req: Request, res: Response) => {
  try {
    const changePasswordUC = new ChangePasswordUC(
      new UsersDatabase(),
      new JwtAuthorizer(),
      new BcryptService(),
    );

    const result = await changePasswordUC.execute({
      token: req.headers.auth as string,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
};