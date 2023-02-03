Time to start working on the router:
let's start with creating some components:
Lists, Messages and a members folder which contains the components Member-list and Member-detail

then we need to specify where we show them, go to app-routing.model.ts and add some routes:
const routes: Routes = [
  {
    path: '', //localhost:4200
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'members', //localhost:4200/members
    component: MemberListComponent
  },
  {
    path: 'members/:id', //localhost:4200/members/1
    component: MemberDetailComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: '**', //localhost:4200/anything
    component: HomeComponent,
    pathMatch: 'full'
  }
];

Then go to app.component.html and chagne app-home to router-outlet so that we see the routes in the navbar