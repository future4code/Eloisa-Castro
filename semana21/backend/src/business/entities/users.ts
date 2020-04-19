export class Users {
  constructor(
    private id: string,
    private name: string,
    private birthDate: Date,
    private photo: string,
    private userPassword: string,
  ) {}
  
  public getId(): string {
    return this.id
  }
  
  public getName(): string {
    return this.name
  }

  public getBirthDate(): Date {
    return this.birthDate
  }

  public getPhoto(): string {
    return this.photo
  }

  public getUserPassword(): string {
    return this.userPassword
  }

  public setPassword(newPassword: string): void {
    this.userPassword = newPassword
  }
}