export interface AuthenticationGateway {
  generateToken(input: UserInfoForToken, expiresIn: string): string;
  getUsersInfoFromToken(token: string): UserInfoForToken;
}

export interface UserInfoForToken {
  userId: string;
  userDevice?: string;
}

// access_token: USER_ID
// refresh_token: USER_ID e USER_DEVICE
