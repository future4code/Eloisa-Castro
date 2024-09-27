import { PostDB } from "../../../data/postDataBase";

export class DeleteUserUC {
  constructor(private db: PostDB) {}

  public async execute(input: DeleteUserUCInput): Promise<void> {
    if (!input.id) {
      throw new Error("Post is invalid");
    }
    const user = await this.db.getPost(input.id);
    if (!user) {
      throw new Error("User not found");
    }

    await this.db.deletePost(input.id);
  }
}

export interface DeleteUserUCInput {
  id: string;
}
