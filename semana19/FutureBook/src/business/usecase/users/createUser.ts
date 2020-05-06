import { UserGateway } from "../../gateways/userGateway";
import { v4 } from "uuid";
import { CryptographyGateway } from "../../gateways/cryptographyGateway";
import { User } from "../../entities/user";
import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from "../../../services/jwtAuthorizer";

export class CreateUserUC {
  constructor(
    private userDb: UserGateway,
    private cryptographyGateway: CryptographyGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput>{
    const id = v4()

    const encryptedPassword = await this.cryptographyGateway.encrypt(input.password)

    const user = new User(
      id,
      input.name,
      input.email,
      encryptedPassword
    )

    await this.userDb.createUser(user)

    const accessToken = this.authenticationGateway.generateToken(
      {
        userId: user.getId()
      },
      ACCESS_TOKEN_EXPIRES_IN
    )

    const refreshToken = this.authenticationGateway.generateToken(
      {
        userId: user.getId()
      },
      REFRESH_TOKEN_EXPIRES_IN
    )

    return {
      accessToken,
      refreshToken
    }
  }
}

interface CreateUserUCInput {
  name: string,
  email: string,
  password: string
}

interface CreateUserUCOutput {
  accessToken: string,
  refreshToken: string
}