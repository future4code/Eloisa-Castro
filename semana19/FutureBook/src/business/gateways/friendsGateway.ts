import { Friends } from "../entities/friends";

export interface FriendsGateway {
  verifyFellowship(friends: Friends): Promise<Friends | undefined>,
  createFellowship(friends: Friends): Promise<void>,
  undoFellowship(friends: Friends): Promise<void>,
}
