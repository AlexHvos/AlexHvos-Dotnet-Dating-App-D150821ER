Now lets add route guards so that only a logged in user can access certain routes, first open a ne folder named guards and open a terminal and type in:
ng g guard auth

Then go to the new file auth.guard.ts and change the following:
constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        this.toastr.error('You shall not pass!');
        return false;
      })
    )
  }

Now let's use this in app-routing.module.ts, add the following to all routes which require a user to be logged in:
canActivate: [AuthGuard]

and finally change the error display in nav.component.ts so it works properly:
    error: ({error}) => {
      if(!(error.errors && typeof error.errors === 'object')) {
        return this.toastr.error(error) as any;
      }
      for (const key in error.errors) {
        if (error.errors.hasOwnProperty(key)) {
          this.toastr.error(error.errors[key]);
        }
