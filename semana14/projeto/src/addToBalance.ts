import { getAllAccounts } from "./getAllAccounts";
import { writeFile } from "fs";

const userName = process.argv[4]
const userCpf = process.argv[5]
const valueInput = process.argv[6]

let treatedValue: number = undefined
if (valueInput === undefined) {
  treatedValue = 0
} else {
  treatedValue = Number(valueInput)
}

//let selectedAccount: any[] = []

if (userName === undefined || userCpf === undefined || treatedValue < 1) {
  console.error("Insira os dados corretamente.")
} else {
  getAllAccounts.then((data: any[]) => {
    const indexOfAccount = data.findIndex((account) => {
      return account.cpf === userCpf
    })
    const selectedAccount = data[indexOfAccount]
    const newValue = selectedAccount.balance + treatedValue
    const accountNewData = { ...selectedAccount, balance: newValue}

    data.splice(indexOfAccount, 1)
    data.push(accountNewData)

    const dataToString = JSON.stringify(data)

    const saveAccounts = new Promise ((resolve, reject) => {
      writeFile('./allAccounts.txt', dataToString, () => {
        resolve("Saldo atualizado com sucesso.")
      })
    })

    saveAccounts.then((msg: string) => {
      console.log(msg)
    }).catch((err) => {
      console.error("Erro ao atualizar a conta.")
    })

  }).catch(err => {
    console.error(err)
  })
}