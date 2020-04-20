import { UserGateway } from "../gateways/userGateway";
import { AuthenticationGateway } from "../gateways/authenticationGateway";
import { CryptographyGateway } from "../gateways/cryptographyGateway";
import { ACCESS_TOKEN_EXPIRES_IN } from "../../services/jwtAuthorizer";
import { InvalidParameterError } from "../errors/InvalidParameterError";

export class ChangePasswordUC {
  constructor(
    private userGateway: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway,
  ) {}

  public async execute(input: ChangePasswordUCInput): Promise<ChangePasswordUCOutput> {
    if (!input.oldPassword || !input.newPassword) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const user = await this.userGateway.getUserById(input.userId);

    if (!user) {
      throw new Error("User not found");
    }

    if (
      !(await this.cryptographyGateway.compare(
        input.oldPassword,
        user.getUserPassword()
      ))
    ) {
      throw new Error("Passoword change fails");
    }

    await this.userGateway.changeUserPassword(input.userId, input.newPassword)
    
    const accessToken = this.authenticationGateway.generateToken(
      {
        userId: user.getId()
      },
      ACCESS_TOKEN_EXPIRES_IN
    );

    return {
      accessToken
    };
  }
}

interface ChangePasswordUCInput {
  userId: string;
  oldPassword: string;
  newPassword: string;
}

interface ChangePasswordUCOutput {
  accessToken: string;
}