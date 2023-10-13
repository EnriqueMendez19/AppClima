import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalleter'
})
export class CapitalleterPipe implements PipeTransform {

  transform(value: string,): string {
    const Mayus = value.charAt(0).toUpperCase();
    const Frase = value.slice(1)
    return `${Mayus + Frase}`;
  }

}
