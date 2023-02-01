Next let's work on a register form, so open a terminal in client, and create a register component:
ng g c register --skip-tests

let's start by defining some methods register.component.ts just for show(for now):
export class RegisterComponent implements OnInit {
  model:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  register(form:any) {
    console.log(this.model);
  }

  cancel() {
    console.log("cancelled");
  }
}



Then let's work on the register form display in register.component.html:
<form (ngSubmit)="register(registerForm)" #registerForm="ngForm" autocomplete="off">
    <h2 class="text-center text-primary">Sign up</h2>
    <hr>
    <div class="form-group">
        <input type="text" class="form-control" name="username" [(ngModel)]="model.username" placeholder="Username">
    </div>
    <div class="form-group">
        <input type="text" class="form-control" name="password" [(ngModel)]="model.password" placeholder="Password">
    </div>

    <div class="form-group text center">
        <button class="btn btn-success mr-2" type="submit">
            Register
        </button>
        <button class="btn btn-default mr-2" type="button">
            Cancel
        </button>
    </div>
</form>


And also add it to home.component.html:
    <div *ngIf="registerMode" class="container">
        <div class="row justify-content=center">
            <div class="col-4">
                <p><app-register></app-register></p>
            </div>
        </div>
    </div>