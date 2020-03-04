import {readFileSync, writeFileSync} from 'fs';

export class FileManager {
  constructor(public fileName: string) {}
  readFile() {
    const fileContent = readFileSync(this.fileName)
    return JSON.parse(fileContent.toString())
  }
  writeFile(objectToWrite: any) {
    writeFileSync(this.fileName, JSON.stringify(objectToWrite, null, 2))
  }
}