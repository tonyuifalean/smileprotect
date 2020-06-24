import { Component, OnInit } from '@angular/core';
import { Dentist } from '@app/models/dentist';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent implements OnInit {

  public dentists: Dentist[];

  constructor() { }

  ngOnInit() {
    this.dentists = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        location: 'Cluj-Napoca'
      },
      {
        id: 1,
        firstName: 'Mike',
        lastName: 'Doe',
        location: 'Floresti'
      }
    ];
  }

}
