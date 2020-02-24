import { Student } from "./Student";
import { WfsClass } from "./WfsClass";
import { Teacher, AllSpecialties } from "./Teacher";
import { MobileClass } from "./MobileClass";

const newClass = new WfsClass('Hamilton', '01/12/2019', '30/06/2020', [], [])
//const newClass2 = new WfsClass('Bouman', '29/10/2019', '30/05/2020', [], [])

const newMobile = new MobileClass(1, '01/12/2019', '30/06/2020', [], [])

const student1 = new Student("Astrodev Sobrinho", 'sobrinho@astrodev', '24/02/2000', newClass)

//const newTeacher = new Teacher('Goli', 'goli@f4', '20/05/1995', [AllSpecialties.html, AllSpecialties.poo])

student1.createUser(student1)
