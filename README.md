Next let's add the token service to the accountcontroller class in the following way:

private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

now create a new dto named UserDTO class with two public string properties: Username and Token
and implement it into the register and login methods in accountcontroller by changing what the methods return:

return new UserDTO {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        
and then go to appsettings.Development.json and add the following:
"TokenKey": "super secret unguessable key [should be 16-32 unguessable text]",        