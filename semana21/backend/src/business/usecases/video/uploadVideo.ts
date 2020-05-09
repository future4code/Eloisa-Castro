import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { InvalidParameterError } from "../../errors/InvalidParameterError";
import { VideoGateway } from "../../gateways/videoGateway";
import { v4 } from "uuid";
import { Video } from "../../entities/video";

export class UploadVideoUC {
  constructor(
    private videoGateway: VideoGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: UploadVideoUCInput): Promise<UploadVideoUCOutput> { 
    if (!input.title || !input.description || !input.video || !input.token) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const id = v4()

    const tokenInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
    const userId = tokenInfo.userId

    const video = new Video(
      id,
      input.title,
      input.description,
      input.video,
      userId
    )

    await this.videoGateway.saveVideo(video)

    return {
      message: "Successfully updated"
    }
  }
}

interface UploadVideoUCInput {
  title: string;
  description: string;
  video: string;
  token: string;
}

interface UploadVideoUCOutput {
  message: string;
}