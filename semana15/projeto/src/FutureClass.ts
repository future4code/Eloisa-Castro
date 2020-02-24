import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { FileManager } from "./FileManager";

export abstract class FutureClass {
  private fileManager: FileManager

  constructor( 
    protected startDate: string,
    protected endDate: string,
    protected teachers: Teacher[],
    protected students: Student[],
  ) {
  }

  public createClass(data: FutureClass): void {
    const fileManager = new FileManager('database.json')
    const allData: any = fileManager.readFile()
    const classData: FutureClass[] = allData.futureClasses
    classData.push(data)
    const newData = { ...allData, futureClasses: classData }
    fileManager.writeFile(newData)
  }
}