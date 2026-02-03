import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service/student-service';

@Component({
  selector: 'app-list-component',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {

  constructor(public studentServ: StudentService){}

}
