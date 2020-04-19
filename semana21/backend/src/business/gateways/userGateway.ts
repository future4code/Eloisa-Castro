import { Users } from "../entities/users";

export interface UserGateway {
  createUser(user: Users): Promise<void>
  changeUserPassword(userId: string, password: string): Promise<void>
}