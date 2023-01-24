Next up adding authentication, go to appuser.cs and add the following properties:
public byte[] PasswordHash { get; set; }
public byte[] PasswordSalt { get; set; }

Next open terminal in the api and type in:
dotnet ef migrations add UserPasswordAdded 
And then:
dotnet ef database update

Since we changed the appuser entity, the changes needed to be properly integrated to the api

