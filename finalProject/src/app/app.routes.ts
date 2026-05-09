import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { HomeMain } from './body/home-main/home-main';
import { Blogs } from './blogs/blogs';
import { Errorpage } from './errorpage/errorpage';
import { IndBlog } from './blogs/ind-blog/ind-blog';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-main',
        pathMatch: 'full'
    },
    {
        path: 'home-main',
        component: HomeMain
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'blogs',
        component: Blogs
    },
    {
        path: 'blogs/:id',
        component: IndBlog
    },
    {
        path: '**',
        component: Errorpage
    }
];
