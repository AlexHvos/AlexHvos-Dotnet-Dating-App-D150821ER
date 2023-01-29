Let's work on making the login persistent, let's create a new folder inside the app folder named models,
then create a new file inside named user.ts and type the following inside:
export interface User {
    username: string;
    token: string;
}


Now let's implement it in account.service.ts login method and create a logout method for later:
  login(model: any): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {

  }


and also add an observable before the ctor:
private currentUserSource$ = new ReplaySubject<User>(1);
public currentUser$ = this.currentUserSource$.asObservable();


Next let's use this observable in the logout method:
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource$.next();
  }


and also add a helper function:
  setCurrentUser(user: User) {
    this.currentUserSource$.next(user);
  }


Then you should use this function in app.component.ts:
constructor(private http: HttpClient, private accountService : AccountService)
// add in the argument to the ctor

  setCurrentUser() {
    const userFromLS = localStorage.getItem('user');
    const user: User = userFromLS ? JSON.parse(userFromLS) : null; 
    this.accountService.setCurrentUser(user);
  }

ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }  


Then you need to implement it into nav.component.ts by updating logout method and creating getCurrentUser:
  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(
      {
        next: user => {
          this.loggedIn = !!user;
        },
        error: error => {
          console.log(error);
        }
      });
  }

and also use the new method:
  ngOnInit(): void {
    this.getCurrentUser();
  }
