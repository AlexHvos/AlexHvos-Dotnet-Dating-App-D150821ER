Next let's add the nav links, go to nav.component.html and change the following:
        <a class="navbar-brand" routerLink="/">Dating App</a>

            <ul *ngIf="currentUser$ | async" class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/members">Matches</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/lists">Lists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLinkActive="active" routerLink="/messages">Messages</a>
            </ul>

now when we click on the different options on the navbar it will display the correct route