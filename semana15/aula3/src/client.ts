
//interface de cliente
export interface Client {
  clientName: string;
  // Refere-se ao nome do cliente

  clientNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
