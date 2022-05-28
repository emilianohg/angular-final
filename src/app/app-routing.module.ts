import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserLoggedIn } from './auth/guard/is-user-logged-in';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canLoad: [IsUserLoggedIn],
    canActivate: [IsUserLoggedIn],
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
