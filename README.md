Next let's work on a home page, so open a terminal in client, and create a home component:
ng g c home --skip-tests


Then inside home.component.ts add the following:
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }


Then home.component.html:
<div class="container mt-5">
    <div *ngIf="!registerMode" style="text-align: center">
        <h1>Find Your Match</h1>
        <p class="lead">Come on in to view your matched... all you need to is signup!</p>
        <div class="text-center">
            <button (click)="registerToggle()" class="btn btn-primary btn-lg mr-2">Register</button>
            <button class="btn btn-info btn-lg mr-2">Learn More</button>
        </div>
    </div>
    <div *ngIf="registerMode" class="container">
        <div class="row justify-content=center">
            <div class="col-4">
                <p>Register Form Goes Here</p>
            </div>
        </div>
    </div>
</div>


and finally display this inside app.component.html instead of a user list:
<app-nav></app-nav>
<div class="container" style="margin-top: 100px;">
  <app-home></app-home>
</div>

so now we have a basic home page