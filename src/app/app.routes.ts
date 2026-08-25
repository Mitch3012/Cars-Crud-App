import { Routes } from '@angular/router';
import { List } from './list/list';
import { Home } from './home/home';
import { Edit } from './edit/edit';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'list', component: List},
    {path: 'cars/:id/edit', component: Edit}
];
