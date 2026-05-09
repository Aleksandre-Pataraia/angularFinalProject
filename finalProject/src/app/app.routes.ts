import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { HomeMain } from './body/home-main/home-main';
import { Users } from './users/users';
import { Errorpage } from './errorpage/errorpage';
import { IndUser } from './users/ind-user/ind-user';

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
        path: 'users',
        component: Users
    },
    {
        path: 'users/:id',
        component: IndUser
    },
    {
        path: '**',
        component: Errorpage
    }
];
