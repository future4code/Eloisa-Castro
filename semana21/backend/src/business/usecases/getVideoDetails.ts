import { InvalidParameterError } from "../errors/InvalidParameterError";
import { VideoGateway } from "../gateways/videoGateway";
import { VideoWithUser } from "../entities/video";

export class GetVideoDetailsUC {
  constructor(
    private videoGateway: VideoGateway,
  ) {}

  public async execute(input: GetVideoDetailsUCInput): Promise<GetVideoDetailsUCOutput> {
    if (!input.id) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const result = await this.videoGateway.getVideoDetails(input.id)
    
    return {
      result
    };
  }
}

interface GetVideoDetailsUCInput {
  id: string;
}

interface GetVideoDetailsUCOutput {
  result: VideoWithUser | undefined;
}