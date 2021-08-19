import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], field: string, value: string): any[] {
    if (!list) return [];
    if (!field || !value) return list;
    return list.filter(
      item => item[field].toLowerCase().includes(value.toLowerCase())
    );
  }

}
