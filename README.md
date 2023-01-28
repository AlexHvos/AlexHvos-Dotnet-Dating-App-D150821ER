Next let's add a logout method in nav.component.ts:
  logout() {
    this.loggenIn = false;
  }

Then let's update nav.component.html so that we can login and logout:
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">

        <a class="navbar-brand" href="#">Dating App</a>

            <ul *ngIf="loggedIn" class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Matches</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Lists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" (click)="logout()" href="#">Logout</a>
                </li>
            </ul>

            <div class="dropdown" *ngIf="loggedIn">
                <a class="text-light dropdown-toggle">Welcome user</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item">Edit Profile</a>
                  <a class="dropdown-item" (click)="logout()">Logout</a>
                </div>
            </div>

            <form *ngIf="!loggedIn" class="form-inline mt-2 mt-md-0" #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">
                <input name="username" [(ngModel)]="model.username" class="form-control mr-sm-2" type="text" placeholder="Username">
                <input name="password" [(ngModel)]="model.password" class="form-control mr-sm-2" type="password" placeholder="Password">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
    </div>
</nav>





