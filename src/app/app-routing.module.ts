import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  // {
  //   path: 'sidebar',
  //   component: FooterComponent,
  //   outlet: 'sidebar',
  // },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
