The routes are now working but not entirely as expected, we need change the routes when a user logs in/out,
so go to nav.component.ts 

Add the following to the ctor arguments:
private router: Router

Add routing to both login and logout methods:
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }