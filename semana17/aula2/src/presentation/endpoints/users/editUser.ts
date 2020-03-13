import { Request, Response } from "express";
import { EditUserUC } from "../../../business/usecase/users/editUser";
import { UserDB } from "../../../data/userDataBase";

export const editUserEndpoint = async (req: Request, res: Response) => {
  try {
    const editUserUC = new EditUserUC(new UserDB());
    const result = await editUserUC.execute({
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
