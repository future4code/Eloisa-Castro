import { Client } from "./client";
import { Industry } from "./industry";

export class IndustrialClient extends Industry implements Client {
  public clientName: string
  public clientNumber: number

  constructor(
    public industryName: string,
    public industryNumber: string,
    cep: string,
    public consumedEnergy: number
  ) {
    super(industryName, industryNumber, cep);
    this.clientName = industryName,
    this.clientNumber = Number(new Date())
    this.consumedEnergy = consumedEnergy
  }

  calculateBill(): number {
    return (this.consumedEnergy * 0.45) + 10000
  }
}