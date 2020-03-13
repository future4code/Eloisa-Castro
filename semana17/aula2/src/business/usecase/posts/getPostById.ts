import { PostDB } from "../../../data/postDataBase";
import { PostType } from "../../entities/post";
import { NotFoundError } from "../../error/NotFoundError";

export class GetPostByIdUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByIdUCInput): Promise<GetPostByIdUCOutput> {
    /**
     * ISSUE 2
     *
     * Perceba que a Presentation e o DataBase já estão preparados,
     * você deve terminar o UseCase (lembre-se de colcar a saída correta)
     */
    const post = await this.db.getPost(input.id)

    if (!post) {
      throw new NotFoundError("Post not found");
    }
    
    return {
      id: post.getId(),
      title: post.getTitle(),
      content: post.getContent(),
      image: post.getImage(),
      type: post.getType(),
      userId: post.getUserId(),
      userName: post.getUser().getName()
    }
  }
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
