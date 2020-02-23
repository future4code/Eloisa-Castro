import { getAllAccounts } from "./getAllAccounts";

const userName = process.argv[4]
const userCpf = process.argv[5]

let selectedAccount: any[] = []

if (userName === undefined || userCpf === undefined) {
  console.error("Passe seus dados corretamente.")
} else {
  getAllAccounts.then((data: any[]) => {
    selectedAccount = data.filter((account) => {
      return account.name === userName && account.cpf === userCpf
    })
    console.log('Seu saldo é: R$', selectedAccount[0].balance.toFixed(2))
  }).catch(err => {
    console.error(err)
  })
}