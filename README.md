Next we’ll head back to the api folder and then open startup.cs and add the following code inside configureservices method:
services.AddCors();

Then you need to add the following code to configure method(make the following is between app.UseRouting and app.UseAuthorization):
app.UseCors(policy =>
            policy.AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:4200")
            );
