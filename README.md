Next up adding authentication with JSON Web Token(JWT)

Create a new folder called interfaces, and inside a new file call ITokenService with one method:

string CreateToken(AppUser user);

And then create a new folder named services, and inside a new file called TokenService which implement the interface we just made 

Now we need to update Startup.cs so that we can use this service in order to create JWTs

Inside the ConfigureServices method add the following code:

services.AddScoped<ITokenService, TokenService>();
