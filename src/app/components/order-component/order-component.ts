import { Component, output } from '@angular/core';

@Component({
  selector: 'app-order-component',
  imports: [],
  templateUrl: './order-component.html',
  styleUrl: './order-component.scss',
})
export class OrderComponent {


  orderByAgePressed = output();
  orderByNamePressed = output<boolean>();

  isAscending = true;

  orderByAge() {
    console.log('order component - order by age');
    this.orderByAgePressed.emit();
  }

  orderByName() {
    console.log('order component - order by name');
    this.orderByNamePressed.emit(this.isAscending);

    // if (this.isAscending === true) {
    //   this.isAscending = false;
    // } else {
    //   this.isAscending = true;
    // }

    this.isAscending = !this.isAscending;
  }

}
