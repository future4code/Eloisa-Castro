import { Request, Response } from "express";
import { BandDatabase } from "../../data/bandDatabase";
import { GetBandUC } from "../../business/usecases/getBand";

export const getBandEndpoint = async (req: Request, res: Response) => {
  try {
    const getBandUC = new GetBandUC(new BandDatabase())
    const result = await getBandUC.execute({
      id: req.query.id,
      name: req.query.name
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    })
  }
}