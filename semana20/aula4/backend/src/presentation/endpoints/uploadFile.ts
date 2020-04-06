import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { UploadFileUC } from "../../business/usecase/uploadFile";


export const uploadFileEndpoint = async (req: Request, res: Response) => {
  try {
    if(!req.files) {
      res.status(400)
      return
    }

    const upload = req.files.arquivo as UploadedFile
    const uc = new UploadFileUC(new S3(""))
    const result = await uc.execute({
      file: upload
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
    return
  }
}