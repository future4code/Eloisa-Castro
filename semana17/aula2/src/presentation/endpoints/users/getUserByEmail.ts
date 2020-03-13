import { Request, Response } from "express";
import { GetUserByEmailUC } from "../../../business/usecase/users/getUserByEmail";
import { UserDB } from "../../../data/userDataBase";

export const getUserByEmailEndpoint = async (req: Request, res: Response) => {
  try {
    const signupUC = new GetUserByEmailUC(new UserDB());
    const result = await signupUC.execute({
      email: req.query.email
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
