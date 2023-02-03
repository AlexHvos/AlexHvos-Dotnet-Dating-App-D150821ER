Next let's hook the register method to the service, go to account.service.ts and a register method:
  register(model: any): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource$.next(user);
        }
        return user;
      })
    )
  }

Let's remove stuff we used for testing earlier and then add the register method to the register component
so at home.component.html change the following:
<p><app-register (cancelRegister)="cancelRegisterMode($event)"></app-register></p>
at register.component.html change the following:
<form (ngSubmit)="register()" #registerForm="ngForm" autocomplete="off">
and also get rid off class form control

Then go to register.component.ts, remove the @input, imject accountservice into the ctor:
constructor(private accountService: AccountService) { }
and change the register method:
  register() {
    this.accountService.register(this.model).subscribe({
      next: res => {
        console.log(res);
        this.cancel();
      },
      error: err => {
        console.log(err);
      }
    })
  }

so now register works properly