import { Componente } from 'src/app/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json')
  }
}
