import { Request, Response } from "express";
import { UserDB } from "../../../data/userDataBase";
import { GetAllUsersUC } from "../../../business/usecase/users/getAllUsers";

export const getAllUsersEndpoint = async (req: Request, res: Response) => {
  try {
    const signupUC = new GetAllUsersUC(new UserDB());
    const result = await signupUC.execute();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
