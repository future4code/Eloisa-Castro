import { AuthenticationGateway } from "../../gateways/authenticationGateway"
import { FriendsGateway } from "../../gateways/friendsGateway"
import { Friends } from "../../entities/friends"

export class BeFriendUC {
  constructor(
    private friendsGateway: FriendsGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: BeFriendUCInput): Promise<BeFriendUCOutput> {
    if (!input.token) {
      throw new Error("Missing authorization token")
    }

    const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
    const userId = userInfo.userId
    
    const friend = new Friends(userId, input.friendId)
    const isFriend = await this.friendsGateway.verifyFellowship(friend)
    if (isFriend) {
      throw new Error("You are already friends")
    }

    await this.friendsGateway.createFellowship(friend)

    return {
      message: "Success! Now you are friends!"
    }
  }
}

interface BeFriendUCInput {
  token: string,
  friendId: string
}

interface BeFriendUCOutput {
  message: string
}