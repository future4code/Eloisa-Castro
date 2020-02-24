import { Place } from "./place";

//classe Residence, que usa a classe Place como padrão, incluindo outras informações relevantes
export class Residence extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome da residência

    public cpf: string,
    // Refere-se ao número de cpf do titular

    cep: string
  ) {
    super(cep);
  }
}
