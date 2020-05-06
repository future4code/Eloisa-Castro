import { Post } from "../../entities/post";
import { PostGateway } from "../../gateways/postGateway"
import { AuthenticationGateway } from "../../gateways/authenticationGateway";

export class GetAllPostsUC {
  constructor(
    private postGateway: PostGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  private POSTS_PER_PAGE = 10;

  public async execute(input: GetAllPostsUCInput): Promise<GetAllPostsUCOutput> {
    
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
    const userId = userInfo.userId

    let page = input.page >= 1 ? input.page : 1;
    const offset = this.POSTS_PER_PAGE * (page - 1);

    const result = await this.postGateway.getAllPosts(userId, this.POSTS_PER_PAGE, offset)
    
    return {
      posts: result
    }
  }
}

export interface GetAllPostsUCInput {
  token: string;
  page: number
}

export interface GetAllPostsUCOutput {
  posts: Post[];
}
