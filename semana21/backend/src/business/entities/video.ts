import { UserBasicInfo } from "./user"

export class Video {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private video: string,
    private userId: string
  ) {}
  
  public getId(): string {
    return this.id
  }
  
  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getVideo(): string {
    return this.video
  }

  public getUserId(): string {
    return this.userId
  }

  public setTitle(newTitle: string): void {
    this.title = newTitle
  }

  public setDescription(newDescription: string): void {
    this.description = newDescription
  }
}

export class VideoWithUser extends Video {
  constructor(
    id: string,
    title: string,
    description: string,
    video: string,
    private user: UserBasicInfo,
  ) {
    super(id, title, description, video, user.getId())
  }

  public getUser(): UserBasicInfo {
    return this.user
  }
}