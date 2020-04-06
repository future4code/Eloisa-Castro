import { Request, Response } from "express";
import { CreateBandUC } from "../../business/usecases/createBand";
import { BandDatabase } from "../../data/bandDatabase";

export const createBandEndpoint = async (req: Request, res: Response) => {
  try {
    const createBandUC = new CreateBandUC(new BandDatabase())
    const result = await createBandUC.execute({
      name: req.body.name,
      musicGenre: req.body.musicGenre,
      responsible: req.body.responsible
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      errMessage: err.message
    })
  }
}