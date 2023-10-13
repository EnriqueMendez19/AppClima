import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
interface UserData {
  id: number,
  name: string,
  role: number
}
@Directive({
  selector: '[appValidateAcces]'
})
export class ValidateAccesDirective {
  @Input('appValidateAcces')
  userData!: UserData;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    if(this.userData){
      const {role} = this.userData;
      if (role === 1 || role === 2){
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block')
      }
      else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
      }
    }
  }

}
