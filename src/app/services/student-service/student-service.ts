import { Injectable, signal, WritableSignal } from '@angular/core';
import { Student } from '../../model/student';
import { installDevToolsSignalFormatter } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  //students:WritableSignal<Student[]> = signal([]);
  students = signal<Student[]>([]);

  constructor(){

    const pippo: Student = {
      name: 'pippo',
      age: 12
    }

    const pluto: Student ={
      name: 'pluto',
      age: 24
    }

    const paperino: Student = {
      name: 'paperino',
      age: 16
    }

    const newStudents = [pippo, pluto, paperino];

    this.students.set(newStudents);

  }

  orderStudentsByAge() {
    this.students.update((oldStudents) => this.updateStudentsOrderingByAge(oldStudents)); 
  }

  updateStudentsOrderingByAge(oldStudents: Student[]){

    oldStudents.sort(this.compareStudentByAge);

    return oldStudents;

  }

  compareStudentByAge(student1: Student, student2: Student){
    const age1 = student1.age;
    const age2 = student2.age;
    return age1 - age2;
  }

  orderStudentsByName(isAscending: boolean) {
    if (isAscending) {
      this.students.update(oldStudents => oldStudents.sort((s1, s2) => s1.name.localeCompare(s2.name)));
    } else {
      this.students.update(oldStudents => oldStudents.sort((s1, s2) => s2.name.localeCompare(s1.name)));
    }
    
  }
}
