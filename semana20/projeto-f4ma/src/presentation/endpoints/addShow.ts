import { Request, Response } from "express";
import { AddShowUC } from "../../business/usecases/addShow";
import { ShowDatabase } from "../../data/showDatabase";

export const addShowEndpoint = async (req: Request, res: Response) => {
  try {
    const addShowUC = new AddShowUC(new ShowDatabase())
    const result = await addShowUC.execute({
      bandId: req.body.bandId,
      day: req.body.day,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    })
  }
}