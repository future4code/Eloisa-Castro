import { User } from "./user";
import { type } from "os";

export class Post {
  constructor(
    private id: string,
    private title: string,
    private content: string,
    private type: PostType,
    private userId: string,
    private image?: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getType(): PostType {
    return this.type;
  }

  public setType(type: PostType): void {
    this.type = type;
  }

  public getUserId(): string {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getImage(): string | undefined {
    return this.image;
  }

  public setImage(image: string): void {
    this.image = image;
  }
}

export enum PostType {
  normal = "normal",
  event = "event"
}

export class PostWithUser extends Post {
  constructor(
    id: string,
    title: string,
    content: string,
    type: PostType,
    private user: User,
    image?: string
  ) {
    super(id, title, content, type, user.getId(), image);
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getUser(): User {
    return this.user;
  }
}
