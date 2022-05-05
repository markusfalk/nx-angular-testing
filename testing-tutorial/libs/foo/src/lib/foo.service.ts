import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

export interface Planet {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class FooService {
  apiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {}

  getAllPlanets() {
    return this.http.get(this.apiUrl).pipe(pluck<Planet[]>('results'));
  }

  getPlanet(id: number) {
    return this.http.get(`${this.apiUrl}${id}`);
  }
}
