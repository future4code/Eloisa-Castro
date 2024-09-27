import { BaseDB } from "./baseDataBase";
import { Post, PostWithUser, PostType } from "../business/entities/post";
import { User } from "../business/entities/user";

export class PostDB extends BaseDB {
  private userTableName = "usersSoftware";
  private postTableName = "postsSoftware";

  public async createPost(post: Post): Promise<void> {
    let query = post.getImage()
      ? `
      INSERT INTO ${
        this.postTableName
      } (id, title, content, type, image, userId)
      VALUES(
      '${post.getId()}',
      '${post.getTitle()}',
      '${post.getContent()}',
      '${post.getType()}',
      '${post.getImage()}',
      '${post.getUserId()}'
      );`
      : `
      INSERT INTO ${this.postTableName} (id, title, content, type, userId)
      VALUES(
      '${post.getId()}',
      '${post.getTitle()}',
      '${post.getContent()}',
      '${post.getType()}',
      '${post.getUserId()}'
      );`;

    await this.connection.raw(query);
  }

  public async updatePost(post: Post): Promise<void> {
    let query = post.getImage()
      ? `
      UPDATE ${this.postTableName} 
      SET
        title='${post.getTitle()}',
        content='${post.getContent()}',
        image='${post.getImage()}'
      WHERE id='${post.getId()}'
    `
      : `
        UPDATE ${this.postTableName} 
        SET
          title='${post.getTitle()}',
          content='${post.getContent()}'
        WHERE id='${post.getId()}'
      `;

    await this.connection.raw(query);
  }

  public async getPost(id: string): Promise<PostWithUser | undefined> {
    const result = await this.connection.raw(`
SELECT * FROM ${this.userTableName} u
LEFT JOIN ${this.postTableName} p ON u.id = p.userId
WHERE p.id='${id}'`);
    let postType = PostType.normal;

    if (!result[0][0]) {
      return undefined;
    }

    if (result[0][0].type === "event") {
      postType = PostType.event;
    }

    const user = new User(
      result[0][0].userId,
      result[0][0].name,
      result[0][0].email,
      new Date(result[0][0].birthDate)
    );

    return (
      result[0][0] &&
      new PostWithUser(
        result[0][0].id,
        result[0][0].title,
        result[0][0].content,
        postType,
        user,
        result[0][0].image
      )
    );
  }

  public async deletePost(id: string): Promise<void> {
    /**
     * ISSUE 3
     *
     * Perceba que o UseCase e a Presentation já estão preparados,
     * você deve terminar essa função do DataBase
     */
  }
}
