import { User } from "../entities/user";

export interface UserGateway {
  createUser(user: User): Promise<void>,
  getUserByEmail(email: string): Promise<User | undefined>
}