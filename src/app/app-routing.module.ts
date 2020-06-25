import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dentists',
    loadChildren: () => import('./components/dentists').then(m => m.DentistsModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./components/history').then(m => m.HistoryModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
