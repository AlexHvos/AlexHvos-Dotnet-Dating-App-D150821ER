Let's practice some parent and child component communication, first off let's take the getusers method from app.component.ts and move it to home.component.ts, let's also register some new users for testing with postman
and jump into userscontroller and above the getusers change authorize to allowanonymous

let's add some stuff to home.component.ts:
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

so that we can use the users data in home and register components

then add the following to register.component.ts under model:any; :
  @Input() usersFromHomeComponent: any;
and also add the following to register.component.html:

    <select class="form-control">
        <option *ngFor="let user of usersFromHomeComponent" [value]="user.userName">{{user.userName}}</option>
    </select>

and finally implement in home.component.html:
<p><app-register [usersFromHomeComponent]="users"></app-register></p>