import { Routes } from '@angular/router';
import { FirstStyleComponent } from './designs/first-style/first-style.component';
import { RegisterComponent } from './register/register.component';
import { FirstDesignComponent } from './designs/first-design/first-design.component';

export const routes: Routes = [
    {path: '', component: FirstStyleComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: FirstDesignComponent}
];