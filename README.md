Next up go to appsetting.Development.json and inside the main brackets add the following:
 "ConnectionStrings": {
    "DefaultConnection": "Data source=datingapp.db"
  },


Next up head back to startup.cs and inside the startup class add a private readonly property of type IConfiguration named _config 

Then change the constructor to the following:
 public Startup(IConfiguration config)
        {
            _config = config;
        }

Now we can use it for the connection string, go to ConfigureServices method and change the following:
services.AddDbContext<DataContext>(options => {
                options.UseSqlite(_config.GetConnectionString("DefaultConnection"));
            });

Next go to the nuget gallery and add Microsoft.EntityFrameworkCore.Design to the API project

Then use the following command to add emigration which will create the database using sqlite:
dotnet ef migrations add InitialCreate -o Data/Migrations

