import { Injectable, signal, WritableSignal } from '@angular/core';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  //students:WritableSignal<Student[]> = signal([]);
  students = signal<Student[]>([]);

  constructor(){

    const pippo: Student = {
      name: 'pippo',
      age: 18
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
}
