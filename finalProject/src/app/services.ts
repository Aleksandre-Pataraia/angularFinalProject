import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface IBlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  apiUrl2: string = 'https://jsonplaceholder.typicode.com/users';

  getBlogs() {
    return this.http.get<IBlog[]>(this.apiUrl);
  }

  getUsers() {
    return this.http.get<IUser[]>(this.apiUrl2);
  }
  
  getPostById(id: number) {
    return this.http.get<IBlog>(`${this.apiUrl}/${id}`);
  }
}
