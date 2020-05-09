import { User } from "../entities/user";

export interface UserGateway {
  createUser(user: User): Promise<void>
  getUserByEmail(email: string): Promise<User | undefined>
  getUserById(id: string): Promise<User | undefined>
  changeUserPassword(userId: string, password: string): Promise<void>
}