Let’s go to client/src/app and open app.component.html and add the following code:
<h1>{{title}}</h1>


<ul>
  <li *ngFor="let user of users">
    {{user.id}} - {{user.userName}}
  </li>
</ul>

This will show the list of users in the browser
