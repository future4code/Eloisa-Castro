import { writeFile } from "fs"
import { userAccount } from "./types"
import { getAllAccounts } from './getAllAccounts'

const userName = process.argv[4]
const userCpf = process.argv[5]
const userBirth = process.argv[6]

let accountsList: any[] = []

getAllAccounts.then((data: any[]) => {
  accountsList = data
  createAccount(accountsList)
}).catch(err => {
  console.error(err)
})


const createAccount = (data: any[]) : void => {
  if (userName === undefined || userCpf === undefined || userBirth === undefined) {
    console.error('Erro ao criar a conta.')
  } else {
    const userData: userAccount = {
      name: userName,
      cpf: userCpf,
      birth: userBirth,
      balance: 0,
      statement: []
    }
    
    accountsList.push(userData)

    const dataToString = JSON.stringify(accountsList)

    const saveAccount = new Promise ((resolve, reject) => {
      writeFile('./allAccounts.txt', dataToString, () => {
        resolve("Conta cadastrada com sucesso")
      })
    })
    saveAccount.then((msg: string) => {
      console.log(msg)
    }).catch((err) => {
      console.error("Erro ao criar a conta.")
    })
  }
}
