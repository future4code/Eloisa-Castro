import { User } from "../entities/user";

export interface UserGateway {
  createUser(user: User): Promise<void>
  changeUserPassword(userId: string, password: string): Promise<void>
}