import { Post } from "../../entities/post";
import { PostGateway } from "../../gateways/postGateway"
import { AuthenticationGateway } from "../../gateways/authenticationGateway";

export class GetPostsByTypeUC {
  constructor(
    private postGateway: PostGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  private POSTS_PER_PAGE = 10;

  public async execute(input: GetPostsByTypeUCInput): Promise<GetPostsByTypeUCOutput> {
    
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
    const userId = userInfo.userId

    let page = input.page >= 1 ? input.page : 1;
    const offset = this.POSTS_PER_PAGE * (page - 1);

    const type = Post.mapStringsToPostType(input.type)

    const result = await this.postGateway.getPostsByType(userId, type, this.POSTS_PER_PAGE, offset)
    
    return {
      posts: result
    }
  }
}

export interface GetPostsByTypeUCInput {
  token: string;
  type: string;
  page: number;
}

export interface GetPostsByTypeUCOutput {
  posts: Post[];
}
