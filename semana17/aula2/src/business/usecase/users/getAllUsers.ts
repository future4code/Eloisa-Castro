import { UserDB } from "../../../data/userDataBase";

export class GetAllUsersUC {
  constructor(private userDB: UserDB) {}
  public async execute(): Promise<GetAllUsersOutput> {
    const users = await this.userDB.getAllUsers();
    return {
      users: users.map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        birthDate: user.getBirthDate()
      }))
    };
  }
}

export interface GetAllUsersOutput {
  users: GetAllUsersOutputUser[];
}

export interface GetAllUsersOutputUser {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
}
