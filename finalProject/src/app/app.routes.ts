import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { HomeMain } from './body/home-main/home-main';
import { Blogs } from './blogs/blogs';
import { Products } from './products/products';
import { Errorpage } from './errorpage/errorpage';

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
        path: 'blogs/blogs-detailed/:id',
        component: Blogs
    },
    {
        path: 'products/products-detailed/:id',
        component: Products
    },
    {
        path: '**',
        component: Errorpage
    }
];
