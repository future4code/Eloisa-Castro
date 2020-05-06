export interface AuthenticationGateway {
  generateToken(input: UsersInfoForToken, expiresIn: string): string;
  getUsersInfoFromToken(token: string): UsersInfoForToken;
}

export interface UsersInfoForToken {
  userId: string;
  userDevice?: string;
}