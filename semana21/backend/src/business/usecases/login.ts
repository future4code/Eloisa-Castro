import { UserGateway } from "../gateways/userGateway";
import { AuthenticationGateway } from "../gateways/authenticationGateway";
import { CryptographyGateway } from "../gateways/cryptographyGateway";
import { ACCESS_TOKEN_EXPIRES_IN } from "../../services/jwtAuthorizer";

export class LoginUC {
  constructor(
    private userGateway: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway,
  ) {}

  public async execute(input: LoginUserUCInput): Promise<LoginUserUCOutput> {
    const user = await this.userGateway.getUserByEmail(input.email);

    if (!user) {
      throw new Error("User not found");
    }

    if (
      !(await this.cryptographyGateway.compare(
        input.password,
        user.getUserPassword()
      ))
    ) {
      throw new Error("Wrong Password or Email");
    }

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

interface LoginUserUCInput {
  email: string;
  password: string;
}

interface LoginUserUCOutput {
  accessToken: string;
}