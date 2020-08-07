import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'login', loadChildren: './login/login.module#loginModule' },
  {path: 'signup',loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'login',loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'userdetails',loadChildren: () => import('./userdetails/userdetails.module').then(m => m.UserdetailsModule)},
  { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
