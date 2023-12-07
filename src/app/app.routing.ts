import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

/* shared module */
import { AppPlugin } from './shared/app.plugin';

import { LoginGuard, LayoutGuard  } from './auth/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { SidemenuComponent } from './components/main/sidemenu/sidemenu.component';
import { LayoutComponent } from './components/main/layout/layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '', 
    component: LayoutComponent,
    canActivate: [(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) => LayoutGuard(snapshot, state)],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
    ]
  },
  { path: 'pages', loadChildren: () => import('./module/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: '/pages/not-found' }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,

    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [RouterModule.forRoot(routes), AppPlugin],
  exports: [RouterModule]
})
export class AppRouting { }
