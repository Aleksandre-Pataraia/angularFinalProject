import { AsyncPipe } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IBlog, IUser, Services } from '../../services';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

/**
 * @title Card overview
 */
@Component({
  selector: 'app-ind-blog',
  templateUrl: 'ind-blog.html',
  styleUrl: 'ind-blog.scss',
  imports: [MatCardModule, MatButtonModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndBlog {
  blogsService: Services = inject(Services);
  posts$: Observable<IBlog[]> = this.blogsService.getBlogs();
  users$: Observable<IUser[]> = this.blogsService.getUsers();

  route = inject(ActivatedRoute);

  service = inject(Services);

  blog?: IBlog;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.service.getPostById(id).subscribe(data => {
      this.blog = data;
    });
  }
}
