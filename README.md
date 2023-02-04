Next let's add a toast service for notifications, open a terminal in client and type in:
npm i ngx-toastr@14.3.0

Now let's add the imports, go to angular.json and go to styles:
"styles": [
              "./node_modules/font-awesome/css/font-awesome.css",
              "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/ngx-toastr/toastr.css",
              "src/styles.css"
            ],

Then add it to app.module.ts and add it to imports:
ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

Then implement it in nav.component.ts:
add it in the ctor arguments:
private toastr: ToastrService

and add it to login:
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response);
    }, error => {
      this.toastr.error(error.error);
      console.log(error);
    })
  }

now if an error occurs during login a message will pop up, but its not perfect so we'll fix it later