Next let's make sure that the authentication works since we added JWTs, let's open the nuget gallery and install Microsoft.AspNetCore.Authentication.JwtBearer 

Next head to UsersController and add the following above both httpget annotations:
[Authorize]

Now we have add the authentication scheme into the configureservices method in startup.cs:

services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                options => {
                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_config["TokenKey"])),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                }
            );


And then add the following middleware between usecors and useauthorization:
app.UseAuthentication();
