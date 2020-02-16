export type userAccount = {
  name: string,
  cpf: string,
  birth: string,
  balance: number,
  statement: transactions[]
}

export type transactions = {
  value: number,
  date: string,
  description: string
}