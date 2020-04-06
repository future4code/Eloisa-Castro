import { BandGateway } from "../gateways/band";
import { v4 } from "uuid";
import { Band } from "../entities/band";

export class CreateBandUC {
  constructor(
    private bandGateway: BandGateway
  ) {}

  public async execute(input: CreateBandUCInput): Promise<CreateBandUCOutput> {
    const id = v4()

    if(!input.name || !input.musicGenre || !input.responsible) {
      throw new Error("Invalid parameters")
    }

    const band = new Band(id, input.name, input.musicGenre, input.responsible)

    await this.bandGateway.createBand(band)

    return {
      message: "Band created successfully"
    }
  }
}

interface CreateBandUCInput {
  name: string,
  musicGenre: string,
  responsible: string
}

interface CreateBandUCOutput {
  message: string
}