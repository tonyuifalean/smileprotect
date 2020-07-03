import { Component, OnInit } from '@angular/core';
import { Dentist } from '@app/models/dentist';
import { DentistService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent implements OnInit {

  public dentists$: Observable<Dentist[]>;

  constructor(private dentistService: DentistService) { }

  ngOnInit() {
    this.dentists$ = this.dentistService.getAll();
  }

}
