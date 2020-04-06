import { FileGateway } from "../gateways/fileGateway";
import * as dotenv from "dotenv";
import * as AWS from "aws-sdk";
import { File } from "../entities/file";


export class S3 implements FileGateway {
  private s3: AWS.S3

  constructor(private bucketName: string) {
    dotenv.config()
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  public async uploadFile(fileName: string, fileData: Buffer): Promise<File>{
    const fileObject = {
      Bucket: this.bucketName,
      Key: fileName,
      Body: fileData
    }
    const res = await this.s3.upload(fileObject).promise()
    const file = new File(res.Location)
    return file
  }
}