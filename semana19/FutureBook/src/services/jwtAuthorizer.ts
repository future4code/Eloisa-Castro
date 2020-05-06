import {
  AuthenticationGateway,
  UsersInfoForToken
} from "../business/gateways/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
  private SECRET_KEY = "FBook";

  public generateToken(input: UsersInfoForToken, expiresIn: string): string {
    const token = jwt.sign(
      {
        userId: input.userId,
        userDevice: input.userDevice
      },
      this.SECRET_KEY,
      {
        expiresIn
      }
    );

    return token;
  }

  public getUsersInfoFromToken(token: string): UsersInfoForToken {
    const result = jwt.verify(token, this.SECRET_KEY) as UsersInfoForToken;

    return {
      userId: result.userId,
      userDevice: result.userDevice
    };
  }
}

export const ACCESS_TOKEN_EXPIRES_IN = "15min";
export const REFRESH_TOKEN_EXPIRES_IN = "24h";