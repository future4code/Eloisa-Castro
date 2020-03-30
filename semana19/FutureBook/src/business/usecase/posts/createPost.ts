import { Post } from "../../entities/post";
import { v4 } from "uuid";
import { PostGateway } from "../../gateways/postGateway"
import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { InvalidParameterError } from "../../error/InvalidParameterError";

export class CreatePostUC {
  constructor(
    private postGateway: PostGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    if (!input.photo || !input.description) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const id = v4()

    const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
    const userId = userInfo.userId

    const post = new Post(
      id,
      input.photo,
      input.description,
      new Date(),
      Post.mapStringsToPostType(input.type),
      userId
    )

    await this.postGateway.createPost(post)
    
    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  photo: string;
  description: string;
  type: string;
  token: string;
}

export interface CreatePostUCOutput {
  message: string;
}
