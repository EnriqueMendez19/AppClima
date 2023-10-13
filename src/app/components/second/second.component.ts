import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() name: string = '';
  @Input() numberOne: number = 0;

  @Output() ivaCalculated = new EventEmitter<number>();
  public userData = 
  {
    id: 1,
    name: 'user1',
    role: 1,
  };
  public ivanumber: number = 0;
  public isPreview: string = '';
  public background: boolean = false;

  mouseOn() {
    this.background = true;
  }

  mouserOut() {
    this.background = false;
  }
  calculateIVA(price: number): void {
    const ivaAmount = price * 0.16;
    this.ivaCalculated.emit(ivaAmount);
  }
  @Input() resultadoIva: number = 0;
  
 
}
