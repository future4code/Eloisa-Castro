import { Request, Response } from "express";
import { SignupUC } from "../../business/usecases/signup";
import { UsersDatabase } from "../../data/userDatabase";
import { JwtAuthorizer } from "../../services/jwtAuthorizer";
import { BcryptService } from "../../services/bcryptService";

export const signupEndpoint = async (req: Request, res: Response) => {
  try {
    const signupUC = new SignupUC(
      new UsersDatabase(),
      new JwtAuthorizer(),
      new BcryptService()
    )

    const result = await signupUC.execute({
      name: req.body.name,
      email: req.body.email,
      birthDate: req.body.birthDate,
      photo: req.body.photo,
      password: req.body.password
    })

    res.status(200).send(result)

  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message,
      ...err
    })
  }
}