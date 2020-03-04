import { ApplicationError } from "./ApplicationError";

export class ErrorPrinter extends ApplicationError {
  
  onError(): void {
    console.log(this.message, '-', this.date)
  }
}