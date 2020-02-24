import { FutureUser } from "./FutureUser";
import { FileManager } from "./FileManager";

export enum AllSpecialties {
  html = 'HTML',
  css = 'CSS',
  js = 'JS',
  react = 'React',
  redux = 'Redux',
  back = 'Back',
  poo = 'Orientação a Objetos'
}

export class Teacher implements FutureUser {
  protected fileManager: FileManager

  constructor (
    public name: string,
    public email: string,
    public birth: string,
    public specialty: AllSpecialties[]
  ) { }

  public createUser(data: Teacher): void {
    const fileManager = new FileManager('database.json')
    const allData: any = fileManager.readFile()
    const teacherData: Teacher[] = allData.futureTeachers
    teacherData.push(data)
    const newData = { ...allData, futureTeachers: teacherData }
    fileManager.writeFile(newData)
  }
}