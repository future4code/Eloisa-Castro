import { Request, Response } from "express";
import { GetShowsUC } from "../../business/usecases/getShows";
import { ShowDatabase } from "../../data/showDatabase";

export const getShowsEndpoint = async (req: Request, res: Response) => {
  try {
    const getShowsUC = new GetShowsUC(new ShowDatabase())
    const result = await getShowsUC.execute({
      day: req.query.day
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    })
  }
}