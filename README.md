let's put the backend aside for a little bit and start adding components to our ui

starting with a navbar component, let's open a terminal in client and type in the following to create the component:
ng g c nav --skip-tests
// g - generate // c - component // nav - name of component

After creating the component let's start editing it, let's take an example of a basic navbar from getbootstrap/docs/4.6/examples, open the template that you like, inspect it and copy the navbar element to our nav.component.html file and then edit it to fit our desired app:

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">

        <a class="navbar-brand" href="#">Dating App</a>

        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
        </button> -->

        <!-- <div class="collapse navbar-collapse" id="navbarCollapse"> -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Matches</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Lists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                </li>
            </ul>

            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Username">
                <input class="form-control mr-sm-2" type="password" placeholder="Password">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
        <!--</div>-->
    </div>
</nav>


now we need to implement it in app.component.html:

<app-nav></app-nav>
<div class="container" style="margin-top: 100px;">
  <ul>
    <li *ngFor="let user of [{id:1,username:'dave'}]">
      {{user.username}} - {{user.id}}
    </li>
  </ul>
</div>