Next go to student assets/generateTrustedSSL and open that folder in the file explorer, open the instructions file and do the written steps to create a certificate in the app

Next create a new folder named ssl in the client, and copy the files server.crt and server.key from generate TrustedSSL

Then go to angular.json and add the following code in serve:production and serve:development brackets:
“sslKey”: “./ssl/server.key”,
“sslCert”: “./ssl/server.crt”,
“ssl”: true,

Then head back to startup.cs and change the app.UseCors method this way:
WithOrigins(“https://localhost:4200”)
