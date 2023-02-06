import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '', //localhost:4200
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(mod => mod.MembersModule) 
      },
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: 'server-error', component: ServerErrorComponent}
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {
    path: '**', 
    component:  NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true
    }
  ]
})
export class AppRoutingModule { }
