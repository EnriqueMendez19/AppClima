import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public title: string = 'Esto es el título de la primera página';
  public menu: string[] = ['Home', 'Settings', 'Profile', 'Contact', 'LogOut']
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public total: number = 0;

  changeListName(item: string) {
    const index = this.menu.indexOf(item);
    this.menu[index] = 'New Item'
  }

  calculateSum() {
    this.total = this.firstNumber + this.secondNumber;
    return this.firstNumber + this.secondNumber;
  }
 
}
