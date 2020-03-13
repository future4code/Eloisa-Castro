import { PostDB } from "../../../data/postDataBase";
import { NotFoundError } from "../../error/NotFoundError";
import { PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";

export class EditPostUC {
  constructor(private db: PostDB) {}

  public async execute(input: EditPostUCInput): Promise<EditPostUCOutput> {
    const post = await this.db.getPost(input.id);

    if (!post) {
      throw new NotFoundError("Post not found");
    }

    if (input.title !== undefined) {
      if (input.title === "") {
        throw new InvalidParameterError("Name must not be an empty string");
      } else {
        post.setTitle(input.title);
      }
    }

    if (input.content !== undefined) {
      if (input.content === "") {
        throw new InvalidParameterError("Name must not be an empty string");
      } else {
        post.setContent(input.content);
      }
    }

    let type = post.getType();
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type === "normal") {
      type = PostType.normal;
    } else {
      throw new InvalidParameterError("Invalid type");
    }
    post.setType(type);

    post.setImage(input.image);

    await this.db.updatePost(post);

    return {
      message: "Post edited successfully"
    };
  }
}

export interface EditPostUCInput {
  id: string;
  title: string;
  content: string;
  type: string;
  image: string;
}

export interface EditPostUCOutput {
  message: string;
}
