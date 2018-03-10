import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreaker'
})
export class LineBreakerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value ? value.split(' ') : '';
    let brokenLine = '';

    for(let v of values){
      brokenLine += v + '<br>';
    }

    return brokenLine.substr(0,brokenLine.lastIndexOf("<br>"));
  }

}
