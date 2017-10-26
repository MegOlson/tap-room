import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowKeg",
  pure: false
})

export class LowKegPipe implements PipeTransform {
  transform(input: Keg[]) {
    let output: Keg[] = [];
    for (let i = 0; i < input.length; i++){
      if(input[i].pints <= 10){
        output.push(input[i]);
      }
    }
    return output;
  }
}
