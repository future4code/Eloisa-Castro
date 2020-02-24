import * as moment from 'moment';

export class ApplicationError{
  protected date: string

  constructor(
    protected message: string,  
  ) {
    this.date = moment().format('DD/MM/YYYY HH:mm')
  }
}