import { FutureClass } from "./FutureClass";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class WfsClass extends FutureClass {
  constructor(
    public patron: string,
    protected startDate: string,
    protected endDate: string,
    protected teachers: Teacher[],
    protected students: Student[],
  ) {
    super(startDate, endDate, teachers, students)
  }
}