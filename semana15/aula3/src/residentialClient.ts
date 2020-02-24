import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {
  
  public clientName: string
  public clientNumber: number

  constructor(
    public name: string,
    public cpf: string,
    cep: string,
    public consumedEnergy: number
  ) {
    super(name, cpf, cep);
    this.clientName = name,
    this.clientNumber = Number(new Date())
    this.consumedEnergy = consumedEnergy
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}