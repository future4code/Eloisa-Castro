import { BaseDB } from "./baseDB";
import { Post, PostType } from "../business/entities/post";
import { PostGateway } from "../business/gateways/postGateway";

export class PostDB extends BaseDB implements PostGateway {
  private postTableName = "posts_FB";

  private mapDbPostToPost(input?: any): Post | undefined {
    return (
      input &&
      new Post(
        input.id,
        input.photo,
        input.description,
        this.mapDbDateToDate(input.creationDate),
        this.mapTypeToPostType(input.postType),
        input.userId
      )
    );
  }

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapTypeToPostType(type: string): PostType {
    switch (type) {
      case "NORMAL":
        return PostType.NORMAL;
      case "EVENT":
        return PostType.EVENT;
      default:
        return PostType.NORMAL;
    }
  }

  private mapPostTypeToDB(type: PostType): string {
    switch (type) {
      case PostType.NORMAL:
        return "NORMAL";
      case PostType.EVENT:
        return "EVENT";
      default:
        return "NORMAL";
    }
  }

  public async createPost(post: Post): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.postTableName} (id, photo, description, creationDate, postType, userId)
      VALUES(
        '${post.getId()}',
        '${post.getPhoto()}',
        '${post.getDescription()}',
        '${this.mapDateToDbDate(post.getCreationDate())}',
        '${this.mapPostTypeToDB(post.getType())}',
        '${post.getUserId()}'
      )
    `);
  }

  public async getAllPosts(userId: string, limit: number, offset: number): Promise<Post[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.postTableName}
      WHERE userId = '${userId}'
      ORDER BY creationDate DESC
      LIMIT ${limit} OFFSET ${offset}
    `)
    return result[0].map((res: any) => this.mapDbPostToPost(res)!)
  }

  public async getPostsByType(userId: string, type: PostType, limit: number, offset: number): Promise<Post[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.postTableName}
      WHERE userId = '${userId}' AND postType = '${type}'
      ORDER BY creationDate DESC
      LIMIT ${limit} OFFSET ${offset}
    `)
    return result[0].map((res: any) => this.mapDbPostToPost(res)!)
  }

}