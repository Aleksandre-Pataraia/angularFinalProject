import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Services, IUser } from '../services';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  blogsService: Services = inject(Services);
  users$: Observable<IUser[]> = this.blogsService.getUsers();
}

