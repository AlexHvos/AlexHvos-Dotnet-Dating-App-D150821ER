Next let's add a dummy route to bundle together the components that need guards, go to app-routing module, remove all routes that need guards, and create a new route:
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {path: 'members', component: MemberListComponent},
      {path: 'members/id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },

We should also add an ng-container to so that the html works better, go to nav.component.html:
            <ul class="navbar-nav mr-auto">
              <ng-container *ngIf="currentUser$ | async">
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/members">Matches</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/lists">Lists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/messages">Messages</a>
                </li>
              </ng-container>
            </ul>