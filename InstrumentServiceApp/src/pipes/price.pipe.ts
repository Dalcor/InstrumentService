import { Pipe, PipeTransform } from '@angular/core';
import { max, min } from 'rxjs/operators';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(items, minValue, maxValue) {

    let result = items.filter(item => {      
      if(item.lenght == 0) {
        return [-1];
      } else {
       return item.price <= maxValue && item.price >= minValue; 
      }
    });
    if(Object.keys(result).length === 0) {
      return [-1];
    }
    return result;
  }
}
