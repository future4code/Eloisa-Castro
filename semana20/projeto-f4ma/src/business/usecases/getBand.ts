import { BandGateway } from "../gateways/band";
import { Band } from "../entities/band";

export class GetBandUC {
  constructor(
    private bandGateway: BandGateway
  ) {}

  public async execute(input: GetBandUCInput): Promise<GetBandUCOutput> {
    if(!input.id && !input.name) {
      throw new Error("Invalid parameters")
    }

    if(input.id && input.name) {
      throw new Error("You can get a band by id OR by email")
    }

    let result

    if(input.id) {
      result = await this.bandGateway.getBandById(input.id)
    } else {
      result = await this.bandGateway.getBandByName(input.name)
    }

    if(!result){
      throw new Error("Band not found")
    }

    return {
      result
    }
  }
}

interface GetBandUCInput {
  id: string,
  name: string
}

interface GetBandUCOutput {
  result: Band
}