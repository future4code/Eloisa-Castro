import { readFile } from "fs"

export const getAllAccounts = new Promise ((resolve, reject) => {
  readFile('./allAccounts.txt', (err: Error, data: Buffer) => {
    let dataToUse
    if (data === undefined) {
      dataToUse = []
    } else {
      const treatedData = data.toString()
      dataToUse = JSON.parse(treatedData)
    }
    resolve(dataToUse)
  })
})