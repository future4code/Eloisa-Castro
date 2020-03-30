import { Request, Response } from "express";
import { LoginUC } from "../../../business/usecase/users/login";
import { UserDB } from "../../../data/userDB";
import { BcryptService } from "../../../services/bcryptService";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const loginEndpoint = async (req: Request, res: Response) => {
  try {
    const userDB = new LoginUC(
      new UserDB(),
      new BcryptService(),
      new JwtAuthorizer()
    )

    const result = await userDB.execute({
      email: req.body.email,
      password: req.body.password
    })

    res.status(200).send(result)
  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    })
  }
}