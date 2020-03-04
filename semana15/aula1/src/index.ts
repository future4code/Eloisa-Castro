import * as moment from 'moment'
import { readFileSync, writeFileSync } from 'fs'

class UserAccount {
  constructor(name: string, cpf: string, birth: string) {
    this.balance = 0
    this. cpf = cpf
    this.name = name
    this.birth = birth
    this.transactions = []
  }

  balance: number
  cpf: string
  name: string
  birth: string
  transactions: Transactions[]

  getBalance(): void {
    console.log('Seu saldo é de:', this.balance)
  }

  addBalance(cpf: string, value: number, description: string): void {
    const newTransaction = new Transactions(cpf, value, description)
    this.transactions.push(newTransaction)
  }
}

class Transactions {
  constructor(cpf: string, value: number, description: string) {
    this.cpf = cpf
    this.value = value
    this.description = description
    this.date = moment().format('DD/MM/AAAA')
  }

  private cpf: string
  private value: number
  private description: string
  private date: string
}

class Bank {
  accounts: UserAccount[]
  fileManager: JSONFileManager

  createAccount(name: string, cpf: string, birth: string): void {
    const formatedBirth = moment(birth, "DD/MM/YYYY")
    const age =  moment().diff(moment(formatedBirth, "DD/MM/YYYY"), 'years')
    
    if(age < 18) {
      console.log("Você precisa ter mais de 18 anos.")
      return
    }
    
    const newAccount: UserAccount = new UserAccount(name, cpf, birth)
    //console.log(newAccount)
    const allAccounts = this.getAllAccounts()
    allAccounts.push(newAccount)
    //console.log('arr:', allAccounts)
    const fileManager = new JSONFileManager
    fileManager.writeObjectToFile(allAccounts)
  }

  getAllAccounts(): UserAccount[] {
    const fileManager = new JSONFileManager
    const data = fileManager.getObjectFromFile('allAccounts.json')
    const allAccounts = data.allAccounts
    return allAccounts
  }

  // getAccountByCpf(): UserAccount {
  // }

  // saveAccounts(): void {

  // }

}

class JSONFileManager {

  getObjectFromFile(fileName: string): any { //não consegui utilizar o tipo 'object'; estava dando erro posteriormente
    const data = readFileSync(fileName)
    const dataToUse = JSON.parse(data.toString())
    return dataToUse
  }

  writeObjectToFile(accounts: UserAccount[]): void {
    const data = {
      allAccounts: accounts
    }
    const jsonData = JSON.stringify(data)
    writeFileSync('allAccounts.json', jsonData)
  }
}

const newBank = new Bank

const userName = process.argv[4]
const userCpf = process.argv[5]
const userBirth = process.argv[6]

if (userName === undefined || userCpf === undefined || userBirth === undefined) {
  console.error('Erro ao criar a conta.')
} else {
  newBank.createAccount(userName, userCpf, userBirth)
}
