import { InvalidParameterError } from "../../errors/InvalidParameterError";
import { VideoGateway } from "../../gateways/videoGateway";
import { VideoWithUser } from "../../entities/video";

export class GetVideoDetailsUC {
  constructor(
    private videoGateway: VideoGateway,
  ) {}

  public async execute(input: GetVideoDetailsUCInput): Promise<GetVideoDetailsUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    if (!input.id) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const result = await this.videoGateway.getVideoDetails(input.id)
    
    return {
      video: result
    };
  }
}

interface GetVideoDetailsUCInput {
  id: string;
  token: string;
}

interface GetVideoDetailsUCOutput {
  video: VideoWithUser | undefined;
}