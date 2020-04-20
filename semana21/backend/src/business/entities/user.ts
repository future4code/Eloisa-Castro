export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
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
  
  public getEmail(): string {
    return this.email
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

export class UserBasicInfo {
  constructor(
    private id: string,
    private name: string,
    private photo: string,
  ) {}
  
  public getId(): string {
    return this.id
  }
  
  public getName(): string {
    return this.name
  }
  
  public getPhoto(): string {
    return this.photo
  }
}