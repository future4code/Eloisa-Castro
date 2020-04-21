import { AuthenticationGateway, UserInfoForToken } from "../business/gateways/authenticationGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
  private SECRET_KEY = "bananinha";

  public generateToken(input: UserInfoForToken, expiresIn: string): string {
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

  public getUsersInfoFromToken(token: string): UserInfoForToken {
    const result = jwt.verify(token, this.SECRET_KEY) as UserInfoForToken;
    return {
      userId: result.userId,
      userDevice: result.userDevice
    };
  }
}

export const ACCESS_TOKEN_EXPIRES_IN = "1h";
export const REFRESH_TOKEN_EXPIRES_IN = "24h";
