import { FutureClass } from "./FutureClass";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class MobileClass extends FutureClass {
  constructor(
    public classNumber: number,
    protected startDate: string,
    protected endDate: string,
    protected teachers: Teacher[],
    protected students: Student[],
  ) {
    super(startDate, endDate, teachers, students)
  }
}