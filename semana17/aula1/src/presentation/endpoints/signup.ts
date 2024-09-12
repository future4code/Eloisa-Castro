import { Request, Response } from "express";
import { SignupUC } from "../../business/usecase/signup";
import { UserDB } from "../../data/userDataBase";
import { User } from "../../business/entities/user";

export const signupEndpoint = async (req: Request, res: Response) => {
  try {
    const signupUC = new SignupUC(new UserDB());
    const result = await signupUC.execute({
      name: req.body.name,
      email: req.body.email,
      birthDate: req.body.birthDate
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
