import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'app/animal.model';

@Pipe({
  name: 'age'
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "allAnimals") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].age != 0){
          output.push(input[i]);
        }
      }
      return output;
      } else if (desiredAge === "juvenile") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].age < 2){
          output.push(input[i]);
        }
      }
      return output;
      } else if (desiredAge === "mature") {
          for (var i = 0; i <input.length; i++) {
            if (input[i].age >= 2){
              output.push(input[i]);
        }
      }
      return output;
      } else {
        return input;
      }
    }
}
