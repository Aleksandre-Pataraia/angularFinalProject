import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string; 
  };
}

@Injectable({
  providedIn: 'root',
})
export class Services {
  blogs = ['add', 'delete', 'update'];

  http = inject(HttpClient);
  apiUrl2: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<IUser[]>(this.apiUrl2);
  }

  getUserById(id: number) {
    return this.http.get<IUser>(`${this.apiUrl2}/${id}`);
  }
}
