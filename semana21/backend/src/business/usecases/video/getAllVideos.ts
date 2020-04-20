import { VideoGateway } from "../../gateways/videoGateway";
import { VideoBasicInfo } from "../../entities/video";

export class GetAllVideosUC {
  constructor(
    private videoGateway: VideoGateway
  ) {}

  private POSTS_PER_PAGE = 10;

  public async execute(input: GetAllVideosUCInput): Promise<GetAllVideosUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    let page = input.page >= 1 ? input.page : 1;
    const offset = this.POSTS_PER_PAGE * (page - 1);

    const result = await this.videoGateway.getAllVideos(this.POSTS_PER_PAGE, offset)
    
    return {
      videos: result
    }
  }
}

export interface GetAllVideosUCInput {
  page: number;
  token: string;
}

export interface GetAllVideosUCOutput {
  videos: VideoBasicInfo[];
}