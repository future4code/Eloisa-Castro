import { readFile } from "fs"

export const getAllAccounts = new Promise ((resolve, reject) => {
  readFile('./allAccounts.txt', (err: Error, data: Buffer) => {
    const treatedData = data.toString()
    const dataToUse = JSON.parse(treatedData)
    resolve(dataToUse)
  })
})

getAllAccounts.then((data: any[]) => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
