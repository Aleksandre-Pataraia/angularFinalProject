import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Services, IBlog, IUser } from '../services';
import { Observable } from 'rxjs';
import { IndBlog } from "./ind-blog/ind-blog";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [RouterLink, RouterOutlet, IndBlog, AsyncPipe],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
  blogs = inject(Services).blogs;
  route: ActivatedRoute = inject(ActivatedRoute);
  blogsId = this.route.snapshot.params['id'];
  
  ngOnInit() {
    console.log(this.blogsId);
  }
  
  blogsService: Services = inject(Services);
  posts$: Observable<IBlog[]> = this.blogsService.getBlogs();
  users$: Observable<IUser[]> = this.blogsService.getUsers();
}

