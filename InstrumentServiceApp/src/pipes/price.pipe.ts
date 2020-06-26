import { Pipe, PipeTransform } from '@angular/core';
import { max, min } from 'rxjs/operators';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(items, minValue, maxValue) {
    return items.filter(item => {
         return item.price <= maxValue && item.price >= minValue; 
    });
  }

}
