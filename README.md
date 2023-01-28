Next let's inject the account service into nav.component.ts and add some login logic:
export class NavComponent implements OnInit {
  loggenIn:boolean = false;
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggenIn = true;
    }, error => {
      console.log(error);
    })
  }





