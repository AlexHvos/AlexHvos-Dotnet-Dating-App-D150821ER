Next let's start tidying up our app.module.ts by making more modules and use them as well,
let's a new folder inside app named modules and create 2 new modules:
core & members

inside core for now we'll grab BsDropdownModule and ToastrModule from app.module and move them there:
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [
    BsDropdownModule,
    ToastrModule
  ]
})
export class CoreModule { }


then inside members we'll grab MembersList & MembersDetail from app.module and add them there:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: MemberListComponent, pathMatch: 'full'},
  {path:':id', component: MemberDetailComponent}
]

@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MemberListComponent,
    MemberDetailComponent,
    RouterModule
  ]
})
export class MembersModule { }


Now let's this also in app-routing.module.ts:
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(mod => mod.MembersModule) 
      },
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
