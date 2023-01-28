Next let's create a new folder in client/app called services and inside a new service called account using the following command:
ng g s account

Then go to account.service.ts and inside the class add the following code:
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'account/login', model);
  }





