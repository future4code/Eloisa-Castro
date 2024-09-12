import { File } from "../entities/file";

export interface FileGateway {
  uploadFile(fileName: string, fileData: Buffer): Promise<File>
}