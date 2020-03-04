import { FutureUser } from "./FutureUser";
import { FutureClass } from "./FutureClass";
import { FileManager } from "./FileManager";

export class Student implements FutureUser {
  protected fileManager: FileManager

  constructor (
    public name: string,
    public email: string,
    public birth: string,
    public futureClass: FutureClass
  ) {
  }
  
  public createUser(data: any): void {
    const fileManager = new FileManager('database.json')
    const allData: any = fileManager.readFile()
    
    //buscar turma para add o aluno
    //aqui adicionei somente o nome do aluno, embora o exercício pedisse
    //toda a instância - achei poluído rs
    const classesData: any = allData.futureClasses
    let classIndex: number
  
    if (data.futureClass.patron) {
      classIndex = classesData.findIndex((el: any) =>
        el.patron === data.futureClass.patron
      )
      classesData[classIndex].students.push(data.name)
    } else {
      classIndex = classesData.findIndex((el: any) =>
        el.classNumber === data.futureClass.classNumber
      )
      classesData[classIndex].students.push(data.name)
    }

    //incluir aluno na lista de alunos
    const studentData: Student[] = allData.futureStudents
    studentData.push(data)

    //escrever no arquivo json
    //dúvida: posso fazer dessa forma ou seria melhor criar
    //uma variável para os dados modificados?
    fileManager.writeFile(allData)
  }
}