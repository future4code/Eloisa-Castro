export interface FutureUser {
  name: string
  email: string
  birth: string

  createUser(data: FutureUser): void
}