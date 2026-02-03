import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service/student-service';
import { OrderComponent } from "../order-component/order-component";

@Component({
  selector: 'app-list-component',
  imports: [OrderComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {

  constructor(public studentServ: StudentService){}

  orderByName(isAscending: boolean){
    console.log('list component - order by name');
    console.log('is ascending: ', isAscending);
    this.studentServ.orderStudentsByName(isAscending);
  }

  orderByAge(){
    console.log('list component - order by age');
    this.studentServ.orderStudentsByAge()
  }

}
