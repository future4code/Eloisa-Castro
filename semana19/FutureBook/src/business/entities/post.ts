export class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private creationDate: Date,
    private type: PostType,
    private userId: string,
  ){ }

  public getId(): string {
    return this.id;
  }

  public getPhoto(): string {
    return this.photo;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public getType(): PostType {
    return this.type;
  }

  public getUserId(): string {
    return this.userId;
  }

  public static mapStringsToPostType(type: string): PostType {
    switch (type) {
      case "NORMAL":
        return PostType.NORMAL;
      case "EVENT":
        return PostType.EVENT;
      default:
        throw new Error("Invalid user type");
    }
  }
}

export enum PostType {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}