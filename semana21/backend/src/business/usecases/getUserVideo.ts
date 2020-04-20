import { AuthenticationGateway } from "../gateways/authenticationGateway";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { VideoGateway } from "../gateways/videoGateway";
import { Video } from "../entities/video";

export class GetUserVideoUC {
  constructor(
    private videoGateway: VideoGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: GetUserVideoUCInput): Promise<GetUserVideoUCOutput> {
    if (!input.token) {
      throw new InvalidParameterError("Invalid parameters")
    }

    let id
    if (input.userId) {
      id = input.userId
    } else {
      const tokenInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
      id = tokenInfo.userId
    }

    const result = await this.videoGateway.getVideosByUser(id)

    return {
      result
    }
  }
}

interface GetUserVideoUCInput {
  userId: string;
  token: string;
}

interface GetUserVideoUCOutput {
  result: Video[];
}