export class Friends {
  constructor(
    private userId: string,
    private friendId: string
  ) { }

  public getUserId(): string {
    return this.userId;
  }

  public getFriendId(): string {
    return this.friendId;
  }
}