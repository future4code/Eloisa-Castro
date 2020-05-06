import { BaseDB } from "./baseDB";
import { FriendsGateway } from "../business/gateways/friendsGateway";
import { Friends } from "../business/entities/friends";

export class FriendsDB extends BaseDB implements FriendsGateway{
  private friendsTableName = "friends_FB";
  
  public async verifyFellowship(friends: Friends): Promise<Friends | undefined>{
    const result = await this.connection.raw(`
      SELECT * FROM ${this.friendsTableName}
      WHERE userId = '${friends.getUserId()}' AND friendId = '${friends.getFriendId()}'
    `)

    return result[0][0]
  }

  public async createFellowship(friends: Friends): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.friendsTableName} (userId, friendId) 
      VALUES(
        '${friends.getUserId()}',
        '${friends.getFriendId()}'
      );
    `)
  }
  
  public async undoFellowship(friends: Friends): Promise<void> {
    await this.connection.raw(`
      DELETE FROM ${this.friendsTableName} 
      WHERE userId = '${friends.getUserId()}' AND friendId = '${friends.getFriendId()}'
    `)
  }
}