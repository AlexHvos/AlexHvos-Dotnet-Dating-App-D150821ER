Next let's use async pipe to make our code cleaner,
inside nav.component.ts let's change it up:
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$?: Observable<User>;

  constructor(private accountService: AccountService) { 
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
    
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }
}



and also nav.component.html:
change all *ngIf arguments that there values were: loggedIn to   currentUser$ | async