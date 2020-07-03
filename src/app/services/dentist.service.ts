import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '@environments/environment';
import { Dentist } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class DentistService {

  constructor(private http: HttpClient) { }

  /**
   * Get dentist list
   */
  public getAll() {
    return this.http.get<Dentist[]>(`${environment.apiUrl}/dentists`);
  }
}
