import * as moment from 'moment';

export class Post {
  protected date: string
  
  constructor(
    protected name: string,
    protected text: string,
  ) {
    this.date = moment().format('DD/MM/YYYY HH:mm')
  }

}