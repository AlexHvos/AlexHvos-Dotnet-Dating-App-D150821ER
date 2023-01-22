Inside the API folder create a new folder named Data and inside create a new class name DataContext

DataContext class must inherit from DbContext, inside the class make a constructor with the parameter ‘DbContextOptions<DataContext> options’ which will inherit from base options, this will make the database instance

The class also needs a property of type Dbset which will be generic with AppUser named Users and this will be the user list db

Next head to Startup.cs and go to ConfigureServices method, add a service to it that will make a database upon startup: 
services.AddDbContext<DataContext>(options => {
                options.UseSqlite("connection string");
            });
