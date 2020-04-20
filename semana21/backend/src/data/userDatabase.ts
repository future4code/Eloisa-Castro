import { BaseDatabase } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/user";

export class UsersDatabase extends BaseDatabase implements UserGateway {
  private usersTableName = "users_futuretube";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.usersTableName} (id, name, birthDate, photo, userPassword)
      VALUES (
        '${user.getId()}',
        '${user.getName()}',
        STR_TO_DATE('${this.mapDateToDbDate(user.getBirthDate())}, '%Y-%m-%d'),
        '${user.getPhoto()}',
        '${user.getUserPassword()}'
      )
    `)
  }
  
  public async changeUserPassword(userId: string, password: string): Promise<void> {
    await this.connection.raw(`
      UPDATE ${this.usersTableName}
      SET userPassword = '${password}'
      WHERE id = '${userId}'
    `)
  }
}