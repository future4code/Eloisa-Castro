import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client {
  public clientName: string
  public clientNumber: number

  constructor(
    public name: string,
    public cnpj: string,
    cep: string,
    public consumedEnergy: number
  ) {
    super(name, cnpj, cep);
    this.clientName = name,
    this.clientNumber = Number(new Date())
    this.consumedEnergy = consumedEnergy
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}