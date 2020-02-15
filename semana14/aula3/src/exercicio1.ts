import { readFile, readdir, writeFile } from 'fs';

const path = require('path')
const fs = require('fs')

const directoryPath = path.join(process.cwd(), 'textos')

fs.readdir(directoryPath, function(err: Error, files: string[]): void {
  if (err) {
    console.error(err)
  } else {
    files.forEach(function(file: string): void {
      const filePath = directoryPath + '/' + file
      fs.readFile(filePath, function(err: Error, data: Buffer) : void {
        if (err) {
          console.error(err)
        } else {
          const stringData = data.toString()
          console.log(stringData)
        }
      })
    })
  }
})