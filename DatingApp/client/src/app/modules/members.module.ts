import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MemberCardComponent } from '../members/member-card/member-card.component';
import { CoreModule } from './core.module';

const routes: Routes = [
  {path:'', component: MemberListComponent, pathMatch: 'full'},
  {path:':username', component: MemberDetailComponent}
]

@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailComponent,
    MemberCardComponent
  ],
  imports: [
    CoreModule,
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
