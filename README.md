Next head to the new folder named client/src/app which was created from the previous command and open app.module.ts, and do the following:
import {HttpClientModule} from "@angular/common/http"


And then inside @ngmodule:
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],


Next open app.component.ts and add the following:
import { HttpClient } from '@angular/common/http';

and:
export class AppComponent {
  title: string = 'The Dating app';
  users: any;


  constructor(private http: HttpClient) {
   
  }


  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Finished');
      }
    )
  }
}
