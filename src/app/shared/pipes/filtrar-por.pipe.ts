import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPor'
})
export class FiltrarPorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
