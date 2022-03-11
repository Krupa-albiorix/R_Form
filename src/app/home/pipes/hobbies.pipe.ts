import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hobbies'
})
export class HobbiesPipe implements PipeTransform {

  transform(hobbies: any[]): any {
    console.log(hobbies);
    const hobbies_array = [
      { id : 1, name : 'Reading' },
      { id : 2, name : 'Cooking' },
      { id : 3, name : 'Playing Cricket' },
      { id : 4, name : 'Listening Music' }
    ];

    if (hobbies) {
      return hobbies_array.filter((hobbie: any) => hobbies.includes(hobbie.id)).map((hobbie: any) => hobbie.name);
    }
  }

}
