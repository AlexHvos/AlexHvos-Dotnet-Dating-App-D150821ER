Next let's start working on the login form:
go to app.module.ts and inside imports add FormsModule

Then let's go to nav.component.ts and add the following to OnInit:
model: any = {};

And add a new function:
login() {
    console.log(this.model);
  }

Then let's turn the login form into an angular form by doing the following in nav.component.html:
            <form class="form-inline mt-2 mt-md-0" #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">
                <input name="username" [(ngModel)]="model.username" class="form-control mr-sm-2" type="text" placeholder="Username">
                <input name="password" [(ngModel)]="model.password" class="form-control mr-sm-2" type="password" placeholder="Password">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>



