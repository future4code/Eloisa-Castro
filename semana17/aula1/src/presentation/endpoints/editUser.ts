import { Request, Response } from "express";
import { GetUserByEmailUC } from "../../business/usecase/getUserByEmail";

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    // CHAMAR USE CASE
    res.status(200).send({
      msg: "success"
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
