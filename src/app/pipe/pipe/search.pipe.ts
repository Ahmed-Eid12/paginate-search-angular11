import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], q: any): any[] {
    if (!q || q === '') {
      return value;
  }
  return value.filter(item =>  item.name.toLowerCase().includes(q.toLowerCase()));
  }

}
