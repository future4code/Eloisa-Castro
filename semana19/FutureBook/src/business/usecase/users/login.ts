import { UserGateway } from "../../gateways/userGateway"
import { CryptographyGateway } from "../../gateways/cryptographyGateway"
import { AuthenticationGateway } from "../../gateways/authenticationGateway"
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from "../../../services/jwtAuthorizer"

export class LoginUC {
  constructor(
    private userGateway: UserGateway,
    private cryptographyGateway: CryptographyGateway,
    private authenticationGateway: AuthenticationGateway
  ) {}

  public async execute(input: LoginUCInput): Promise<LoginUCOutput> {
    const user = await this.userGateway.getUserByEmail(input.email)

    if (!user) {
      throw new Error("User not found")
    }

    const isPasswordCorrect = await this.cryptographyGateway.compare(input.password, user.getPassword())

    if (!isPasswordCorrect) {
      throw new Error("Email or password is incorrect")
    }

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

interface LoginUCInput {
  email: string,
  password: string
}

interface LoginUCOutput {
  accessToken: string,
  refreshToken: string
}