import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* shared module */
import { AppPlugin } from '../shared/app.plugin';

/* module components */
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { UnauthorizedComponent } from '../components/pages/unauthorized/unauthorized.component';
import { ErrorPageComponent } from '../components/pages/error-page/error-page.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    NotFoundComponent,
    UnauthorizedComponent,
    ErrorPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AppPlugin
  ],
  exports: [RouterModule]
})
export class PagesModule { }
