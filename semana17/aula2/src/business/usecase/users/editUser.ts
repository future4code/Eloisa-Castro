import { UserDB } from "../../../data/userDataBase";

export class EditUserUC {
  constructor(private userDB: UserDB) {}

  public async execute(input: EditUserUCInput): Promise<any> {
    if (!input.userId) {
      throw new Error("User Id is missing");
    }

    const user = await this.userDB.getUserById(input.userId);

    if (!user) {
      throw new Error("User not found");
    }

    if (input.name !== undefined) {
      if (input.name === "") {
        throw new Error("Name must not be an empty string");
      } else {
        user.setName(input.name);
      }
    }

    if (input.email !== undefined) {
      if (input.email === "") {
        throw new Error("Email must not be an empty string");
      } else {
        user.setEmail(input.email);
      }
    }

    await this.userDB.updateUser(user);

    return {
      message: "User edited successfully"
    };
  }
}

export interface EditUserUCInput {
  userId: string;
  name: string;
  email: string;
}

export interface EditUserUCOutput {
  message: string;
}
