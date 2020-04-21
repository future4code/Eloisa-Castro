import { InvalidParameterError } from "../../errors/InvalidParameterError";
import { VideoGateway } from "../../gateways/videoGateway";

export class EditVideoUC {
  constructor(
    private videoGateway: VideoGateway,
  ) {}

  public async execute(input: EditVideoUCInput): Promise<EditVideoUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }
    
    if (!input.id || !input.title || !input.description) {
      throw new InvalidParameterError("Invalid parameters")
    }

    await this.videoGateway.changeVideoInformations(input.id, input.title, input.description)
    
    return {
      message: "Informations updated successfuly"
    };
  }
}

interface EditVideoUCInput {
  id: string;
  title: string;
  description: string;
  token: string;
}

interface EditVideoUCOutput {
  message: string;
}