To make designing easier and less time consuming let's add a new package called bootswatch which we'll use to apply a bootstrap theme, open terminal in client and type in:
npm i bootswatch

then let's choose a theme from the bootstwatch website and add it to angular.json styles:
 "./node_modules/bootswatch/dist/zephyr/bootstrap.css",

let's also make the navbar more pleasent to look at by changing the background color,
go to nav.component.html and change bg to primary

and also let's the logged in user's name at the top right:
<a class="text-light dropdown-toggle" dropdownToggle>Welcome {{user.username | titlecase}}</a>