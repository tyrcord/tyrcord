import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@tyrcord/feature/lazy/home').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@tyrcord/feature/lazy/about').then((m) => m.AboutModule),
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('@tyrcord/feature/lazy/apps').then((m) => m.AppsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@tyrcord/feature/lazy/contact').then((m) => m.ContactModule),
  },
  {
    path: 'secret',
    loadChildren: () =>
      import('@tyrcord/feature/lazy/secret').then((m) => m.SecretModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
