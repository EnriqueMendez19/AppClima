import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  public title: string = 'esto es el título de la primera página';
  public menu: string[] = ['Home', 'Settings', 'Profile', 'Contact', 'LogOut']
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public total: number = 0;
  public numberOne: number = 0;
  public numbreTwo: number = 0;
  public totalone: number = 0;
  public age: number = 0;
  public calcAge: number = 0;
  public year: number = 2023;
  public secondNameComponent : string = `Hola soy un componente` 
  public ivaResult: number = 0;

  receiveIVA(iva: number): void {
    this.ivaResult = iva;
  }

  changeListName(item: string) {
    const index = this.menu.indexOf(item);
    this.menu[index] = 'New Item'
  } 

  calculateSum() {
    this.total = this.firstNumber + this.secondNumber;
    //return this.firstNumber + this.secondNumber;
  }
  calculateMul() {
    this.totalone = this.numberOne * this.numbreTwo;
  }
 calculateAge () {
   this.calcAge = this.year - this.age;
 }
}
