import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidad'
})
export class CantidadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value) {
      return value
    }else {
      return 1;
    }
    
  }

}
