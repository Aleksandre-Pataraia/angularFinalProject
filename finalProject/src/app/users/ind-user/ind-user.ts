import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Services, IUser } from '../../services';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ind-user',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './ind-user.html',
  styleUrl: './ind-user.scss'
})
export class IndUser {

  route = inject(ActivatedRoute);
  service = inject(Services);

  user$!: Observable<IUser>;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.params['id']);

    this.user$ = this.service.getUserById(id);

  }
}