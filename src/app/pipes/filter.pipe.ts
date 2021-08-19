import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], field: string, value: any): any[] {
    if (!list) return [];
    if (!field || value === '') return list;
    return list.filter(item => item[field] === value);
  }

}
