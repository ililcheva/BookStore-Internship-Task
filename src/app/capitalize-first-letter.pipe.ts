import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string, args?: any[]): string {
    if(value === null) return 'not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
