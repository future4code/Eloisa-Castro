import { Place } from "./place";

//classe Commerce, que usa a classe Place como padrão, incluindo outras informações relevantes
export class Commerce extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome do comércio

    public cnpj: string,
    // Refere-se ao número de CNPJ do comércio

    cep: string
  ) {
    super(cep);
  }
}
