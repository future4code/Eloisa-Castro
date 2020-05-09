import { v4 } from "uuid";
import { InvalidParameterError } from "../../errors/InvalidParameterError";
import { UserGateway } from "../../gateways/userGateway";
import { User } from "../../entities/user";
import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { CryptographyGateway } from "../../gateways/cryptographyGateway";
import { ACCESS_TOKEN_EXPIRES_IN } from "../../../services/jwtAuthorizer";

export class SignupUC {
  constructor(
    private userGateway: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway,
  ) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput> {
    const id = v4()
    
    if (!input.name || !input.birthDate || !input.photo || !input.password) {
      throw new InvalidParameterError("Invalid parameters")
    }

    const dateFormated = new Date(input.birthDate)

    const pass = await this.cryptographyGateway.encrypt(input.password)

    const user = new User(
      id,
      input.name,
      input.email,
      dateFormated,
      input.photo,
      pass
    )

    await this.userGateway.createUser(user)

    const accessToken = this.authenticationGateway.generateToken(
      {
        userId: user.getId(),
      },
      ACCESS_TOKEN_EXPIRES_IN
    );

    return {
      accessToken
    }
  }
}

export interface SignupUCInput {
  name: string,
  email: string,
  birthDate: Date,
  photo: string
  password: string
}

export interface SignupUCOutput {
  accessToken: string
}