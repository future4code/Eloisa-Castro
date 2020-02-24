import { Place } from "./place";

//classe Industry, que usa a classe Place como padrão, incluindo outras informações relevantes
export class Industry extends Place {
  constructor(
    public industryName: string,
    // Refere-se ao nome da indústria

    public industryNumber: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
